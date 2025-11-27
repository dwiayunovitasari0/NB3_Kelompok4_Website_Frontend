import React, { useState } from "react";
import api from "../api";
import { layananData } from "../data/layanan";

export default function TestServiceForm() {
  const [serviceType, setServiceType] = useState("");
  const [alatJenis, setAlatJenis] = useState("");
  const [alatMerk, setAlatMerk] = useState("");
  const [alatTipe, setAlatTipe] = useState("");
  const [alatSerial, setAlatSerial] = useState("");
  const [alatKapasitas, setAlatKapasitas] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const submit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("service_type", serviceType);
      fd.append("company_name", companyName);
      fd.append("details", details);
      fd.append("alat_jenis", alatJenis);
      fd.append("alat_merk", alatMerk);
      fd.append("alat_tipe", alatTipe);
      fd.append("alat_serial", alatSerial);
      fd.append("alat_kapasitas", alatKapasitas);
      fd.append("lokasi_pemeriksaan", lokasi);

      if (file) fd.append("dokumen", file);

      const token = localStorage.getItem("jwt_token");

      await api.post("/api/test/submit", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMsg("Pengajuan berhasil");
    } catch (err) {
      setMsg(err.response?.data?.message || "Gagal mengirim");
    }
  };

  const alatOptions = layananData[serviceType] || [];

  return (
    <div className="container py-5" style={{ maxWidth: 800 }}>
      <h3>Form Pengajuan Test</h3>
      <form onSubmit={submit}>
        {/* JENIS LAYANAN */}
        <select
          className="form-control mb-3"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="">-- Pilih Layanan --</option>
          {Object.keys(layananData).map((lay) => (
            <option key={lay}>{lay}</option>
          ))}
        </select>

        {/* JENIS ALAT */}
        <select
          className="form-control mb-3"
          value={alatJenis}
          onChange={(e) => setAlatJenis(e.target.value)}
          disabled={!serviceType}
        >
          <option value="">-- Pilih Jenis Alat --</option>
          {alatOptions.map((alat) => (
            <option key={alat}>{alat}</option>
          ))}
        </select>

        <input
          className="form-control mb-3"
          placeholder="Merk Alat"
          value={alatMerk}
          onChange={(e) => setAlatMerk(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Tipe / Model"
          value={alatTipe}
          onChange={(e) => setAlatTipe(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="No. Serial"
          value={alatSerial}
          onChange={(e) => setAlatSerial(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Kapasitas (opsional)"
          value={alatKapasitas}
          onChange={(e) => setAlatKapasitas(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Lokasi Pemeriksaan"
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Nama Perusahaan"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Detail Tambahan"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <input
          type="file"
          className="form-control mb-3"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="btn btn-success">Kirim</button>

        {msg && <div className="mt-3">{msg}</div>}
      </form>
    </div>
  );
}
