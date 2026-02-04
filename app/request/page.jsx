"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RequestPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    fromCity: "",
    fromAddress: "",
    toCity: "",
    toAddress: "",
    service: "Home Relocation",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/request/success");
  };

  return (
    <div style={page}>
      <div style={card}>
        <Link href="/" style={back}>← Back to Home</Link>

        <h1 style={title}>Moving Request</h1>
        <p style={subtitle}>
          Please provide complete pickup and drop details so we can plan your move properly.
        </p>

        <form onSubmit={handleSubmit}>

          <Field label="Full Name">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={input}
              required
            />
          </Field>

          <Field label="Phone Number">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              style={input}
              required
            />
          </Field>

          <h3 style={section}>Pickup Details</h3>

          <Field label="Pickup City">
            <input
              name="fromCity"
              value={form.fromCity}
              onChange={handleChange}
              placeholder="Enter pickup city"
              style={input}
              required
            />
          </Field>

          <Field label="Pickup Full Address">
            <textarea
              name="fromAddress"
              value={form.fromAddress}
              onChange={handleChange}
              placeholder="House no, building, street, area, landmark, pincode"
              rows={3}
              style={textarea}
              required
            />
          </Field>

          <h3 style={section}>Drop Details</h3>

          <Field label="Drop City">
            <input
              name="toCity"
              value={form.toCity}
              onChange={handleChange}
              placeholder="Enter drop city"
              style={input}
              required
            />
          </Field>

          <Field label="Drop Full Address">
            <textarea
              name="toAddress"
              value={form.toAddress}
              onChange={handleChange}
              placeholder="House no, building, street, area, landmark, pincode"
              rows={3}
              style={textarea}
              required
            />
          </Field>

          {/* ✅ FIXED SERVICE TYPE */}
          <Field label="Service Type">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              style={select}
            >
              <option value="Home Relocation">Home Relocation</option>
              <option value="Office Shifting">Office Shifting</option>
              <option value="Goods Transport">Goods Transport</option>
              <option value="Secure Packing">Secure Packing</option>
            </select>
          </Field>

          <Field label="Preferred Moving Date">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              style={{ ...input, colorScheme: "dark" }}
              required
            />
          </Field>

          <Field label="Additional Message (Optional)">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any special instructions, floor number, lift availability, etc."
              rows={4}
              style={textarea}
            />
          </Field>

          <button type="submit" style={btn}>
            Submit Request →
          </button>
        </form>
      </div>
    </div>
  );
}

/* ========== FIELD ========== */

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={fieldLabel}>{label}</div>
      {children}
    </div>
  );
}

/* ========== STYLES ========== */

const page = {
  minHeight: "100vh",
  background: "#0a0e1a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 30,
};

const card = {
  maxWidth: 660,
  width: "100%",
  background: "linear-gradient(145deg, rgba(30,35,55,0.96), rgba(20,25,40,0.8))",
  borderRadius: 26,
  padding: "56px 50px",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "#fff",
};

const back = {
  color: "#f59e0b",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 13,
};

const title = {
  fontSize: 36,
  fontWeight: 800,
  marginTop: 14,
  background: "linear-gradient(135deg,#fff,#f59e0b,#ef4444)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitle = {
  color: "rgba(255,255,255,0.65)",
  fontSize: 14,
  marginBottom: 36,
};

const section = {
  marginTop: 34,
  marginBottom: 16,
  fontSize: 16,
  fontWeight: 800,
  color: "#f59e0b",
};

const fieldLabel = {
  color: "#ffffff",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginBottom: 8,
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.25)",
  color: "#fff",
  fontSize: 14,
  outline: "none",
};

const select = {
  ...input,
  backgroundColor: "#ffffff",   // 👈 KEY FIX
  color: "#000000",             // 👈 KEY FIX
};

const textarea = {
  ...input,
  resize: "none",
  lineHeight: 1.6,
};

const btn = {
  width: "100%",
  marginTop: 38,
  padding: 16,
  borderRadius: 12,
  border: "none",
  fontWeight: 800,
  fontSize: 16,
  background: "linear-gradient(135deg,#f59e0b,#ef4444)",
  color: "#fff",
  cursor: "pointer",
};
