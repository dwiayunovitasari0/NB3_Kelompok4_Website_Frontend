import React from "react";

export default function About() {
  const containerStyle = {
    background: "linear-gradient(to right,   #bec3caff, #d1ceceff )", // gradasi abu-abu lembut
    borderRadius: "15px",
    padding: "40px",
    marginBottom: "50px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  const sectionTitleStyle = {
    color: "blue",
    marginBottom: "20px",
  };

  const textStyle = {
    color: "#333",
    lineHeight: "1.7",
    marginBottom: "20px",
  };

  return (
    <div className="container py-5">
      <section style={containerStyle}>
        <h2 style={sectionTitleStyle}>About PT Geo Mandiri Kreasi</h2>
        <p style={textStyle}>
          PT Geo Mandiri Kreasi bergerak di bidang Riksa Uji dan Jasa Inspeksi di Indonesia
          yang bekerja sama dengan Kementrian Tenaga Kerja (KEMNAKER-RI). Sejak awal pendiriannya,
          PT Geo Mandiri Utama mampu mengemban tugas yang diberikan dengan baik. Tumbuh dan berkembang,
          seiring dengan kebutuhan dunia usaha, khususnya di bidang Riksa Uji dan Jasa Inspeksi.
        </p>
      </section>

      <section style={containerStyle}>
        <h2 style={sectionTitleStyle}>Vision & Mission</h2>
        <p style={textStyle}>
          <strong>Visi:</strong> Menjadi Perusahaan Jasa Keselamatan dan Kesehatan Kerja (PJK3)
          yang terdepan dan andal dengan kualitas pelayanan terbaik di bidangnya.
        </p>
        <p style={textStyle}>
          <strong>Misi:</strong> Melayani pelanggan dengan kualitas produk terbaik
          dan menjadikan jasa K3 teratas di bidangnya.
        </p>
      </section>
    </div>
  );
}
