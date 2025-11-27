import React from "react";

export default function Contact() {
  const containerStyle = {
    background: "linear-gradient(to right, #bec3caff, #d1ceceff)",
    borderRadius: "15px",
    padding: "40px",
    marginBottom: "50px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  const titleStyle = {
    color: "blue",
    marginBottom: "30px",
    fontWeight: "bold",
    fontSize: "1.8rem",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "#333",
  };

  const iconStyle = {
    marginRight: "15px",
    fontSize: "1.3rem",
  };

  return (
    <div className="container py-5">
      <section style={containerStyle}>
        <h3 style={titleStyle}>Contact Us</h3>

        <div style={itemStyle}>
          <span style={iconStyle}>📞</span>
          <span>Telp: 021-22086138</span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>📠</span>
          <span>Fax: 021-8660865</span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>✉️</span>
          <span>Email: utamageomandiri@gmail.com</span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>📍</span>
          <span>Alamat: Jl. Raya Jatiwaringin No.6-C, Pangkalan Jati, Jakarta Timur, 13620</span>
        </div>

        {/* --- Tambahan Media Sosial --- */}
        <hr style={{ margin: "25px 0" }} /> {/* Garis pemisah opsional */}

        <div style={itemStyle}>
          <span style={iconStyle}>📸</span> {/* Icon Instagram (Kamera) */}
          <span>Instagram: @safezone</span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>🎶</span> {/* Icon TikTok (Not Musik) */}
          <span>TikTok: @safezone.team</span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>▶️</span> {/* Icon YouTube (Segitiga Play) */}
          <span>YouTube: @safezoneteam04</span>
        </div>
      </section>
    </div>
  );
}