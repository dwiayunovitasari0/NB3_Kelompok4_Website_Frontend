import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/" style={{ color: "white" }}>
          PT Geo Mandiri Kreasi
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto align-items-center">

            {/* Menu Umum */}
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "white" }}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "white" }}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services" style={{ color: "white" }}>
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: "white" }}>
                Contact
              </Link>
            </li>

            {/* Jika sudah login */}
            {user ? (
              <>
                {/* Panel Ahli (khusus role ahli) */}
                {user.role === "ahli" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/ahli-panel" style={{ color: "white" }}>
                      Panel Ahli
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  <Link className="nav-link" to="/test-service" style={{ color: "white" }}>
                    Ajukan Test
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/my-submissions" style={{ color: "white" }}>
                    My Submissions
                  </Link>
                </li>

                {/* Nama user */}
                <li className="nav-item nav-link fw-bold" style={{ color: "white" }}>
                  {user.name}
                </li>

                {/* Logout */}
                <li className="nav-item">
                  <button className="btn btn-light btn-sm" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Jika belum login
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" style={{ color: "white" }}>
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register" style={{ color: "white" }}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
