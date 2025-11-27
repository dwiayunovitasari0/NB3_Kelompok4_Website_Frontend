import React, { useEffect, useState } from "react";
import api from "../api";

export default function AdminSubmissions() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const fetchSubs = async () => {
      const res = await api.get("/api/test/all");
      setSubs(res.data);
    };
    fetchSubs();
  }, []);

  // Update status pengajuan
  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/api/test/update-status/${id}`, { status });
      alert("Status berhasil diperbarui");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Gagal memperbarui status");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Data Pengajuan User</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nama User</th>
            <th>Perusahaan</th>
            <th>Jenis Layanan</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {subs.map((s) => (
            <tr key={s.id}>
              <td>{s.user_name}</td>
              <td>{s.company_name}</td>
              <td>{s.service_type}</td>
              <td>{s.status}</td>

              <td>
                {/* BUTTON APPROVE */}
                {s.status === "pending" && (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => updateStatus(s.id, "approved_admin")}
                  >
                    Approve Administrasi
                  </button>
                )}

                {/* BUTTON MENUNGGU JADWAL */}
                {s.status === "approved_admin" && (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => updateStatus(s.id, "menunggu_jadwal")}
                  >
                    Set Menunggu Jadwal
                  </button>
                )}

                {/* BUTTON TERJADWAL */}
                {s.status === "menunggu_jadwal" && (
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => updateStatus(s.id, "terjadwal")}
                  >
                    Tandai Terjadwal
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
