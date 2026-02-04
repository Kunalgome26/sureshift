"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP frontend auth
    if (credentials.email && credentials.password) {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div style={page}>
      <div style={card}>
        <h1 style={title}>Admin Login</h1>
        <p style={sub}>SureShift Admin Panel</p>

        <form onSubmit={handleLogin}>
          <label style={label}>Email</label>
          <input
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="admin@sureshift.in"
            style={input}
            required
          />

          <label style={label}>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="••••••••"
            style={input}
            required
          />

          <button type="submit" style={btn}>
            Login →
          </button>
        </form>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const page = {
  minHeight: "100vh",
  background: "#0a0e1a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  width: "100%",
  maxWidth: 420,
  background: "linear-gradient(145deg, rgba(30,35,55,0.95), rgba(20,25,40,0.8))",
  padding: "48px 40px",
  borderRadius: 24,
  border: "1px solid rgba(255,255,255,0.14)",
  color: "#fff",
};

const title = {
  fontSize: 32,
  fontWeight: 800,
  marginBottom: 6,
};

const sub = {
  color: "rgba(255,255,255,0.6)",
  fontSize: 14,
  marginBottom: 30,
};

const label = {
  display: "block",
  marginBottom: 6,
  marginTop: 16,
  fontSize: 13,
  fontWeight: 600,
};

const input = {
  width: "100%",
  padding: "13px 14px",
  borderRadius: 10,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
};

const btn = {
  width: "100%",
  marginTop: 30,
  padding: "14px",
  borderRadius: 10,
  border: "none",
  fontWeight: 700,
  background: "linear-gradient(135deg,#f59e0b,#ef4444)",
  color: "#fff",
  cursor: "pointer",
};
