"use client";

export default function DeviceScrollShowcase() {
  const images = [
    "/screens/mobile1.jpeg",
   ,
  ];

  return (
    <>
      {/* ===== STYLES ===== */}
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 120px 0;
          display: flex;
          justify-content: center;
          gap: 80px;
        }

        /* ===== LAPTOP ===== */
        .laptop {
          width: 640px;
        }

        .laptop-screen {
          height: 380px;
          background: #0c0c12;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 40px 90px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.06);
        }

        /* ===== MOBILE ===== */
        .mobile {
          width: 220px;
          margin-top: 120px;
        }

        .mobile-screen {
          height: 420px;
          background: #0c0c12;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.06);
        }

        /* ===== SCROLL ANIMATION ===== */
        .scroll {
          display: flex;
          flex-direction: column;
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .img {
          width: 100%;
          display: block;
        }

        @media (max-width: 900px) {
          .wrapper {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }
          .mobile {
            margin-top: 0;
          }
        }
      `}</style>

      {/* ===== LAYOUT ===== */}
      <div className="wrapper">
        {/* ===== LAPTOP ===== */}
        <div className="laptop">
          <div className="laptop-screen">
            <div className="scroll">
              {[...images, ...images].map((img, i) => (
                <img key={i} src={img} className="img" />
              ))}
            </div>
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="mobile">
          <div className="mobile-screen">
            <div className="scroll">
              {[...images, ...images].map((img, i) => (
                <img key={i} src={img} className="img" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
