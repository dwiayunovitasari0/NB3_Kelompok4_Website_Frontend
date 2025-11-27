import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { email, password });

      const { token, user } = res.data;

      // ✅ Simpan token & user ke localStorage
      localStorage.setItem("jwt_token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ Arahkan berdasarkan role
      if (user.role === "ahli") {
        navigate("/ahli-panel"); // kalau ahli, langsung ke panel ahli
      } else {
        navigate("/"); // kalau user biasa, ke beranda
      }
    } catch (err) {
      console.error("Login error:", err);
      setMsg(err.response?.data?.message || "Email atau password salah");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 420 }}>
      <h3 className="mb-3">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Masuk
        </button>
      </form>

      {msg && <div className="text-danger mt-3">{msg}</div>}
    </div>
  );
}
