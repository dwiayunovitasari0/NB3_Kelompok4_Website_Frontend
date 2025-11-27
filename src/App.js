import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestServiceForm from "./pages/TestServiceForm";
import MySubmissions from "./pages/MySubmissions";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminSubmissions from "./pages/AdminSubmissions";
import AhliPanel from "./pages/AhliPanel";

function App() {
  return (
    // 🔥 Tambahkan future flags di sini
    <BrowserRouter future={{ 
      v7_startTransition: true, 
      v7_relativeSplatPath: true 
    }}>
      <div className="d-flex flex-column min-vh-100">
        
        {/* Navbar */}
        <Navbar />

        {/* Konten utama */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminSubmissions />} />
            <Route path="/ahli-panel" element={<AhliPanel />} />

            <Route
              path="/test-service"
              element={
                <ProtectedRoute>
                  <TestServiceForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/my-submissions"
              element={
                <ProtectedRoute>
                  <MySubmissions />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-light py-3 mt-auto">
          <div className="container text-center" style={{ fontSize: "14px" }}>
            &copy; {new Date().getFullYear()} PT Geo Mandiri Kreasi. All Rights Reserved.
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
