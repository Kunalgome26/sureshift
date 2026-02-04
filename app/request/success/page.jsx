"use client";

import Link from "next/link";

export default function RequestSuccess() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0e1a",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: 520,
          background: "linear-gradient(145deg, rgba(30,35,55,0.95), rgba(20,25,40,0.75))",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 26,
          padding: "60px 44px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>

        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            marginBottom: 12,
            background: "linear-gradient(135deg,#fff,#f59e0b,#ef4444)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Request Received!
        </h1>

        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.6 }}>
          Thank you for contacting <strong>SureShift</strong>.  
          Our team has received your moving request and will reach out to you shortly.
        </p>

        <div style={{ marginTop: 36, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={primaryBtn}>
            Back to Home
          </Link>
          <Link href="/request" style={secondaryBtn}>
            Submit Another Request
          </Link>
        </div>
      </div>
    </div>
  );
}

const primaryBtn = {
  padding: "14px 28px",
  borderRadius: 10,
  background: "linear-gradient(135deg,#f59e0b,#ef4444)",
  color: "#fff",
  fontWeight: 700,
  textDecoration: "none",
};

const secondaryBtn = {
  padding: "14px 28px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.25)",
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
};
