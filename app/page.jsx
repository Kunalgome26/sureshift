"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ================= DATA ================= */

const SERVICES = [
  { icon: "🏠", title: "Home Relocation", desc: "Careful packing and safe delivery of household goods." },
  { icon: "🏢", title: "Office Shifting", desc: "Planned office relocation with minimal downtime." },
  { icon: "🚚", title: "Goods Transport", desc: "Reliable transport solutions across cities and regions." },
  { icon: "📦", title: "Secure Packing", desc: "Professional packing using quality materials." },
];

const STEPS = [
  { num: "01", title: "Send Request", desc: "Share pickup, drop and service details." },
  { num: "02", title: "We Coordinate", desc: "Our team plans packing and transport." },
  { num: "03", title: "Safe Delivery", desc: "On-time and damage-free delivery." },
];

const STATS = [
  { value: "10K+", label: "Successful Moves" },
  { value: "300+", label: "Cities Served" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "24/7", label: "Support" },
];

const FEATURES = [
  { icon: "👷", text: "Trained & Verified Staff" },
  { icon: "🛡️", text: "End-to-End Insurance" },
  { icon: "💰", text: "No Hidden Charges" },
  { icon: "📍", text: "Dedicated Move Manager" },
  { icon: "🇮🇳", text: "Pan-India Network" },
  { icon: "📦", text: "Quality Packing Materials" },
];

const FAQS = [
  { q: "How early should I book my move?", a: "We recommend booking at least 5–7 days in advance." },
  { q: "Do you provide packing materials?", a: "Yes, we use high-quality packing materials." },
  { q: "Is insurance mandatory?", a: "Insurance is optional but recommended." },
  { q: "Can I reschedule my move?", a: "Yes, subject to availability." },
];

/* ================= ANIMATION ================= */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Animated({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ================= PAGE ================= */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#0a0e1a", color: "#fff", minHeight: "100vh" }}>

      {/* ============ NAVBAR ============ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled ? "rgba(10,14,26,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          zIndex: 100,
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700 }}>
          Sure<span style={{ color: "#f59e0b" }}>Shift</span>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {/* ADMIN BUTTON */}
          <Link
            href="/admin/login"
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              color: "#f59e0b",
              border: "1px solid rgba(245,158,11,0.6)",
              textDecoration: "none",
            }}
          >
            Admin
          </Link>

          {/* REQUEST BUTTON */}
          <Link
            href="/request"
            style={{
              padding: "10px 22px",
              borderRadius: 8,
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              background: "linear-gradient(135deg,#f59e0b,#ef4444)",
            }}
          >
            Send Request
          </Link>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section style={{ minHeight: "100vh", paddingTop: 120, textAlign: "center" }}>
        <Animated>
          <h1
            style={{
              fontSize: "clamp(40px,7vw,72px)",
              fontWeight: 800,
              background: "linear-gradient(135deg,#fff,#f59e0b,#ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Move Smarter.<br />Move Safer.
          </h1>
        </Animated>

        <Animated delay={0.2}>
          <p style={{ maxWidth: 520, margin: "30px auto", color: "rgba(255,255,255,0.5)" }}>
            Professional packing, relocation, and transport services
            focused on safety, precision, and on-time delivery.
          </p>
        </Animated>

        <Animated delay={0.3}>
          <Link
            href="/request"
            style={{
              padding: "14px 34px",
              borderRadius: 10,
              background: "linear-gradient(135deg,#f59e0b,#ef4444)",
              color: "#fff",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Request a Free Quote →
          </Link>
        </Animated>
      </section>

      {/* ============ STATS ============ */}
      <section style={{ padding: "60px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
          {STATS.map((s, i) => (
            <Animated key={i} delay={i * 0.1}>
              <div>
                <div style={{
                  fontSize: 36,
                  fontWeight: 800,
                  background: "linear-gradient(135deg,#f59e0b,#ef4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {s.value}
                </div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
                  {s.label}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <Animated>
          <h2 style={{ textAlign: "center", fontSize: 42, fontWeight: 700 }}>Our Services</h2>
        </Animated>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20, marginTop: 60 }}>
          {SERVICES.map((s, i) => (
            <Animated key={i} delay={i * 0.1}>
              <div style={{
                background: "rgba(30,35,55,0.8)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 32,
              }}>
                <div style={{ fontSize: 28 }}>{s.icon}</div>
                <h3 style={{ marginTop: 16, fontSize: 18 }}>{s.title}</h3>
                <p style={{ marginTop: 8, color: "rgba(255,255,255,0.45)", fontSize: 14 }}>
                  {s.desc}
                </p>
              </div>
            </Animated>
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <Animated>
          <h2 style={{ textAlign: "center", fontSize: 42, fontWeight: 700 }}>How It Works</h2>
        </Animated>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 32, marginTop: 60, textAlign: "center" }}>
          {STEPS.map((s, i) => (
            <Animated key={i} delay={i * 0.12}>
              <div>
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                  border: "2px solid rgba(245,158,11,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#f59e0b",
                }}>
                  {s.num}
                </div>
                <h3>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>{s.desc}</p>
              </div>
            </Animated>
          ))}
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <Animated>
          <h2 style={{ textAlign: "center", fontSize: 42, fontWeight: 700 }}>Why Choose SureShift</h2>
        </Animated>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24, marginTop: 60 }}>
          {FEATURES.map((f, i) => (
            <Animated key={i} delay={i * 0.08}>
              <div style={{
                background: "linear-gradient(145deg, rgba(30,35,55,0.9), rgba(20,25,40,0.7))",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 28,
                textAlign: "center",
              }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{f.text}</div>
              </div>
            </Animated>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}>
        <Animated>
          <h2 style={{ textAlign: "center", fontSize: 42, fontWeight: 700 }}>FAQs</h2>
        </Animated>

        <div style={{ marginTop: 50 }}>
          {FAQS.map((f, i) => (
            <div
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                padding: "22px 26px",
                marginBottom: 16,
                cursor: "pointer",
                background: "rgba(30,35,55,0.7)",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{f.q}</strong>
                <span>{openFaq === i ? "−" : "+"}</span>
              </div>
              {openFaq === i && (
                <p style={{ marginTop: 12, color: "rgba(255,255,255,0.5)" }}>
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <Animated>
          <div style={{
            maxWidth: 700,
            margin: "0 auto",
            background: "linear-gradient(145deg, rgba(30,35,55,0.9), rgba(20,25,40,0.7))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: "60px 40px",
          }}>
            <h2 style={{ fontSize: 42, fontWeight: 700 }}>Contact SureShift</h2>
            <p style={{ marginTop: 20, color: "rgba(255,255,255,0.5)" }}>
              📞 +91 98765 43210 <br />
              ✉️ support@sureshift.in
            </p>
            <Link
              href="/request"
              style={{
                display: "inline-block",
                marginTop: 30,
                padding: "14px 36px",
                borderRadius: 10,
                background: "linear-gradient(135deg,#f59e0b,#ef4444)",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Get a Free Quote →
            </Link>
          </div>
        </Animated>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "40px 24px",
        textAlign: "center",
        color: "rgba(255,255,255,0.35)",
      }}>
        © {new Date().getFullYear()} SureShift · Packers & Transport Services
      </footer>
    </div>
  );
}
