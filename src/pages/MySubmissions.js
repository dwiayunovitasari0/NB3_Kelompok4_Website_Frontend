import React, { useEffect, useState } from "react";
import api from "../api";

export default function MySubmissions() {
  const [subs, setSubs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editData, setEditData] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // Ambil data pengajuan user
  useEffect(() => {
    const fetchSubs = async () => {
      try {
        const token = localStorage.getItem("jwt_token");
        const res = await api.get("/api/test/my-submissions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSubs();
  }, []);

  // Teks status
  const renderStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Menunggu Verifikasi Admin";
      case "approved_admin":
      case "menunggu_jadwal":
        return "Menunggu Jadwal";
      case "terjadwal":
        return "Sudah Dijadwalkan";
      case "selesai_layak":
        return "Layak - Sertifikat dikirim via email";
      case "selesai_tidak_layak":
        return "Tidak Layak";
      case "rejected":
        return "Ditolak";
      default:
        return status;
    }
  };

  // Status teks tebal dan lebih besar
  const renderStatusTextStyled = (status) => (
    <span style={{ fontSize: "1rem", fontWeight: "600" }}>
      {renderStatusText(status)}
    </span>
  );

  // Fungsi Edit & Delete
  const handleEdit = (data) => {
    setEditData({ ...data });
    setShowEdit(true);
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem("jwt_token");
      await api.patch(`/api/test/edit/${editData.id}`, editData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setShowEdit(false);

      // Refresh data
      const res = await api.get("/api/test/my-submissions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus pengajuan ini?")) return;
    try {
      const token = localStorage.getItem("jwt_token");
      await api.delete(`/api/test/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubs((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const containerStyle = {
    background: "linear-gradient(to right, #bec3ca, #d1cece)",
    borderRadius: "15px",
    padding: "40px",
    marginBottom: "50px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  return (
    <div className="container py-5" style={{ maxWidth: 1000 }}>
      <section style={containerStyle}>
        <h3 className="fw-bold text-center text-primary mb-4">My Submissions</h3>

        {subs.length === 0 ? (
          <p className="text-center">Tidak ada pengajuan.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "12%" }}>Tanggal</th>
                  <th style={{ width: "18%" }}>Jenis Layanan</th>
                  <th style={{ width: "18%" }}>Perusahaan</th>
                  <th style={{ width: "20%" }}>Status</th>
                  <th style={{ width: "12%" }}>Dokumen</th>
                  <th style={{ width: "20%" }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {subs.map((s) => (
                  <tr key={s.id}>
                    <td>{new Date(s.created_at).toLocaleDateString()}</td>
                    <td>{s.service_type}</td>
                    <td>{s.company_name}</td>
                    <td>{renderStatusTextStyled(s.status)}</td>
                    <td>
                      {s.dokumen_path ? (
                        <a
                          href={`${api.defaults.baseURL}/uploads/${s.dokumen_path}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => {
                            setSelected(s);
                            setShowDetail(true);
                          }}
                        >
                          Detail
                        </button>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleEdit(s)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(s.id)}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Modal Detail */}
      {showDetail && selected && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content p-4">
              <h5 className="mb-3 text-primary fw-bold">Detail Pengajuan</h5>
              <table className="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <th>Jenis Layanan</th>
                    <td>{selected.service_type}</td>
                  </tr>
                  <tr>
                    <th>Perusahaan</th>
                    <td>{selected.company_name}</td>
                  </tr>
                  <tr>
                    <th>Details</th>
                    <td>{selected.details}</td>
                  </tr>
                  <tr>
                    <th>Alat Jenis</th>
                    <td>{selected.alat_jenis}</td>
                  </tr>
                  <tr>
                    <th>Alat Merk</th>
                    <td>{selected.alat_merk}</td>
                  </tr>
                  <tr>
                    <th>Alat Tipe</th>
                    <td>{selected.alat_tipe}</td>
                  </tr>
                  <tr>
                    <th>Alat Serial</th>
                    <td>{selected.alat_serial}</td>
                  </tr>
                  <tr>
                    <th>Kapasitas</th>
                    <td>{selected.alat_kapasitas}</td>
                  </tr>
                  <tr>
                    <th>Lokasi Pemeriksaan</th>
                    <td>{selected.lokasi_pemeriksaan}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{renderStatusTextStyled(selected.status)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-end">
                <button className="btn btn-secondary" onClick={() => setShowDetail(false)}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit */}
      {showEdit && editData && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content p-4">
              <h5 className="mb-3 text-primary fw-bold">Edit Pengajuan</h5>
              {[
                "service_type",
                "company_name",
                "details",
                "alat_jenis",
                "alat_merk",
                "alat_tipe",
                "alat_serial",
                "alat_kapasitas",
                "lokasi_pemeriksaan",
              ].map((field) => (
                <div className="mb-2" key={field}>
                  <label className="form-label text-capitalize">{field.replace("_", " ")}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editData[field] || ""}
                    onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
                  />
                </div>
              ))}
              <div className="text-end mt-3">
                <button className="btn btn-success me-2" onClick={handleSaveEdit}>
                  Simpan
                </button>
                <button className="btn btn-secondary" onClick={() => setShowEdit(false)}>
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
