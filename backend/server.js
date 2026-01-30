import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/subscribe-newsletter", async (req, res) => {
  console.log("Request body:", req.body);
  console.log("BREVO_API_KEY:", process.env.BREVO_API_KEY ? "FOUND" : "MISSING");
  console.log("BREVO_LIST_ID:", process.env.BREVO_LIST_ID);

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email" });
  }

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/contacts",
      {
        email,
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Brevo response:", response.data);

    res.json({ success: true });
  } catch (err) {
    console.error("Brevo ERROR:", err.response?.data || err.message);
    res.status(500).json({ message: "Subscription failed" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});
