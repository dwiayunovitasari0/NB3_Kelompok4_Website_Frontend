import React, { useEffect, useState } from "react";
import api from "../api";
import Swal from "sweetalert2";

export default function AhliPanel() {
  const [subs, setSubs] = useState([]);
  const [msg, setMsg] = useState("");
  const [selected, setSelected] = useState(null);

  const token = localStorage.getItem("jwt_token");

  // Ambil semua pengajuan
  useEffect(() => {
    const fetchSubs = async () => {
      try {
        const res = await api.get("/api/test/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubs(res.data);
      } catch (err) {
        console.error(err);
        setMsg("Gagal memuat data pengajuan");
      }
    };
    fetchSubs();
  }, [token]);

  // Update status
  const updateStatus = async (id, status) => {
    try {
      await api.patch(
        `/api/test/update-status/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setSubs((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status } : s))
      );

      // popup khusus untuk LAYAK
      if (status === "selesai_layak") {
        Swal.fire({
          icon: "success",
          title: "Sertifikat Terkirim!",
          text: "Sertifikat kelayakan sudah dikirim ke email user.",
          confirmButtonColor: "#28a745",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Status berhasil diubah",
          confirmButtonColor: "#28a745",
        });
      }

    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Gagal mengubah status",
        text: "Ada masalah. Coba lagi.",
      });
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
    <div className="container py-5" style={{ maxWidth: 1200 }}>
      <section style={containerStyle}>
        <h3 className="text-primary mb-4 fw-bold text-center">
          Panel Admin — Verifikasi Pengajuan
        </h3>

        {msg && <div className="text-danger">{msg}</div>}

        {subs.length === 0 ? (
          <p className="text-center">Tidak ada pengajuan saat ini.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className="table table-bordered table-hover align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>Tanggal</th>
                  <th>User</th>
                  <th>Jenis Layanan</th>
                  <th>Perusahaan</th>
                  <th>Dokumen</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {subs.map((s) => (
                  <tr key={s.id}>
                    <td>{new Date(s.created_at).toLocaleDateString()}</td>
                    <td>{s.user_name}</td>
                    <td>{s.service_type}</td>
                    <td>{s.company_name}</td>

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

                    <td className="fw-bold">
                      {s.status === "selesai_layak" ? (
                        <span className="badge bg-success">
                          Sertifikat dikirim via email
                        </span>
                      ) : s.status === "selesai_tidak_layak" ? (
                        <span className="badge bg-danger">Tidak Layak</span>
                      ) : (
                        s.status.replace("_", " ").toUpperCase()
                      )}
                    </td>

                    <td>
                      {/* Tombol Detail */}
                      <button
                        className="btn btn-info btn-sm me-2"
                        onClick={() => setSelected(s)}
                      >
                        Detail
                      </button>

                      {/* Approve dokumen */}
                      {s.status === "pending" && (
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() =>
                            updateStatus(s.id, "menunggu_jadwal")
                          }
                        >
                          Approve (Lolos Admin)
                        </button>
                      )}

                      {/* Reject */}
                      {s.status === "pending" && (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => updateStatus(s.id, "rejected")}
                        >
                          Reject
                        </button>
                      )}

                      {/* Kirim jadwal */}
                      {s.status === "menunggu_jadwal" && (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => updateStatus(s.id, "terjadwal")}
                        >
                          Tandai Sudah Kirim Jadwal
                        </button>
                      )}

                      {/* Hasil akhir */}
                      {s.status === "terjadwal" && (
                        <>
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() =>
                              updateStatus(s.id, "selesai_layak")
                            }
                          >
                            LAYAK
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              updateStatus(s.id, "selesai_tidak_layak")
                            }
                          >
                            TIDAK LAYAK
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Modal Detail */}
      {selected && (
        <div
          className="modal show fade"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detail Pengajuan</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelected(null)}
                ></button>
              </div>

              <div className="modal-body">
                <p>
                  <strong>Tanggal:</strong>{" "}
                  {new Date(selected.created_at).toLocaleDateString()}
                </p>
                <p>
                  <strong>User:</strong> {selected.user_name}
                </p>
                <p>
                  <strong>Perusahaan:</strong> {selected.company_name}
                </p>
                <p>
                  <strong>Jenis Layanan:</strong> {selected.service_type}
                </p>

                <hr />

                <h6>Data Alat</h6>
                <p><strong>Jenis:</strong> {selected.alat_jenis}</p>
                <p><strong>Merk:</strong> {selected.alat_merk}</p>
                <p><strong>Tipe:</strong> {selected.alat_tipe}</p>
                <p><strong>No Seri:</strong> {selected.alat_serial}</p>
                <p><strong>Kapasitas:</strong> {selected.alat_kapasitas}</p>
                <p><strong>Lokasi:</strong> {selected.lokasi_pemeriksaan}</p>

                <hr />

                <h6>Detail Tambahan</h6>
                <p>{selected.details}</p>

                <hr />

                <h6>Dokumen</h6>
                {selected.dokumen_path ? (
                  <a
                    href={`${api.defaults.baseURL}/uploads/${selected.dokumen_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Dokumen
                  </a>
                ) : (
                  "-"
                )}
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelected(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
