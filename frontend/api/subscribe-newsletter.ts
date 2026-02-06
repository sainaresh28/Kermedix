export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email" });
  }

  try {
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY is missing");
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
      }),
    });

    const text = await response.text();

    if (!response.ok && response.status !== 409) {
      console.error("Brevo error:", text);
      return res.status(500).json({ message: "Brevo error" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server crashed:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
