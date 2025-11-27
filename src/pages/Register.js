import React, { useState } from "react";
import api from "../api"; // pastikan ini sudah dikonfigurasi benar
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // kirim data ke backend
      await api.post("/api/auth/register", form, { withCredentials: true });
      navigate("/login");
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.message || "Gagal registrasi");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 480 }}>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Nama"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-success w-100">
          Daftar
        </button>
      </form>
      {msg && <div className="text-danger mt-2">{msg}</div>}
    </div>
  );
}
