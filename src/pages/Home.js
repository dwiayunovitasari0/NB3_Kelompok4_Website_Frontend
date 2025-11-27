import React from "react";
import { Link } from "react-router-dom";
import { BubbleChat } from "flowise-embed-react";

export default function Home() {
  const cardStyle = {
    borderRadius: "15px",
    cursor: "pointer",
    transition: "transform 0.2s",
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="hero text-center d-flex align-items-center"
        style={{
          backgroundImage: "url('/bglb.png')", // gambar dari public
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100px",
          paddingTop: "120px",
          paddingBottom: "120px",
          color: "white",
        }}
      >
        <div
          className="container"
          style={{
            background: "rgba(0,0,0,0.15)",   // ← overlay lebih muda/transparan
            padding: "40px",
            borderRadius: "12px",
          }}
        >
          {/* TITLE */}
          <h1 className="display-4 fw-bold">PT GEO MANDIRI KREASI</h1>
          <p className="lead fs-4 mt-3">
            Certification & Engineering Inspection — Riksa Uji & Jasa Inspeksi
          </p>

          {/* ================= LAYANAN ================= */}
          <h3 className="text-center mb-4 mt-5 fw-bold">Layanan Utama Kami</h3>

          <div className="row g-4 justify-content-center">
            {/* PUBT */}
            <div className="col-md-4">
              <Link
                to="/services#pubt"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card shadow-sm p-3"
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <h5>PUBT - Bejana Tekan</h5>
                  <p>
                    Inspeksi ketel, bejana tekan, tangki, pipa bertekanan, dsb.
                  </p>
                </div>
              </Link>
            </div>

            {/* PAPA */}
            <div className="col-md-4">
              <Link
                to="/services#papa"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card shadow-sm p-3"
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <h5>PAPA - Angkat & Angkut</h5>
                  <p>
                    Inspeksi crane, forklift, hoist, dan alat angkat lainnya.
                  </p>
                </div>
              </Link>
            </div>

            {/* PTP */}
            <div className="col-md-4">
              <Link
                to="/services#ptp"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card shadow-sm p-3"
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <h5>PTP - Tenaga & Produksi</h5>
                  <p>Mesin, transmisi, turbin, tanur, oven, dsb.</p>
                </div>
              </Link>
            </div>
          </div>

          {/* ================= VIDEO ================= */}
          <h4 className="text-center mb-4 mt-5 fw-bold">Video Riksa Uji Services (Demo)</h4>

          <div className="d-flex justify-content-center">
            <video
              width="680px"
              height="400px"
              controls
              className="shadow-lg mb-4"
              style={{
                maxWidth: "100%",
                borderRadius: "12px",
                backgroundColor: "#000000",
              }}
            >
              <source src="videos/kebakaran.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Chatbot tetap di posisi fixed */}
        <BubbleChat
          chatflowid="edd97f2d-c333-4b8a-9339-4966be783da6"
          apiHost="https://cloud.flowiseai.com"
        />
      </section>
    </>
  );
}
