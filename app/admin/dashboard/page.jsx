"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

/* ================= PAGE ================= */

export default function AdminDashboard() {
  const router = useRouter();

  const [activeModule, setActiveModule] = useState("overview");
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  /* 🔐 AUTH PROTECTION */
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/admin/login");
      }
    });
  }, [router]);

  /* ===== FETCH FROM SUPABASE API ===== */
  const fetchRequests = async () => {
    try {
      const res = await fetch("/api/requests");
      const result = await res.json();
      setRequests(result.data || []);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  /* ===== UPDATE STATUS (APPROVE / REJECT) ===== */
  const updateStatus = async (id, status) => {
    try {
      await fetch(`/api/requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status } : r))
      );
    } catch (err) {
      console.error("UPDATE ERROR:", err);
    }
  };

  /* 🚪 LOGOUT */
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <div style={page}>
      {/* SIDEBAR */}
      <aside style={sidebar}>
        <h2 style={logo}>
          Sure<span style={{ color: "#f59e0b" }}>Shift</span>
        </h2>

        <NavItem
          label="Overview"
          active={activeModule === "overview"}
          onClick={() => setActiveModule("overview")}
        />
        <NavItem
          label="Requests"
          active={activeModule === "requests"}
          onClick={() => setActiveModule("requests")}
        />

        <div style={{ marginTop: "auto" }}>
          <button onClick={handleLogout} style={logoutBtn}>
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={content}>
        {loading ? (
          <div style={empty}>Loading dashboard...</div>
        ) : (
          <>
            {activeModule === "overview" && (
              <Overview
                requests={requests}
                goToRequests={() => setActiveModule("requests")}
              />
            )}

            {activeModule === "requests" && (
              <Requests
                data={requests}
                updateStatus={updateStatus}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

/* ================= MODULES ================= */

function Overview({ requests, goToRequests }) {
  const total = requests.length;
  const pending = requests.filter(r => r.status === "Pending").length;
  const approved = requests.filter(r => r.status === "Approved").length;
  const rejected = requests.filter(r => r.status === "Rejected").length;

  const recent = [...requests].slice(0, 5);

  return (
    <>
      <h1 style={heading}>Dashboard Overview</h1>

      <div style={cardGrid}>
        <StatCard title="Total Requests" value={total} />
        <StatCard title="Pending Requests" value={pending} />
        <StatCard title="Approved Requests" value={approved} />
        <StatCard title="Rejected Requests" value={rejected} />
      </div>

      <div style={lowerGrid}>
        <div style={panel}>
          <h3 style={panelTitle}>Recent Requests</h3>

          {recent.length === 0 && (
            <div style={muted}>No recent activity</div>
          )}

          {recent.map((r) => (
            <div key={r.id} style={activityRow}>
              <div>
                <b>{r.name}</b>
                <div style={muted}>{r.service}</div>
              </div>
              <span style={statusBadge(r.status)}>{r.status}</span>
            </div>
          ))}
        </div>

        <div style={panel}>
          <h3 style={panelTitle}>Quick Actions</h3>

          <button style={primaryAction} onClick={goToRequests}>
            View All Requests →
          </button>

          <button style={secondaryAction} onClick={() => location.reload()}>
            Refresh Dashboard
          </button>
        </div>
      </div>
    </>
  );
}

function Requests({ data, updateStatus }) {
  return (
    <>
      <h1 style={heading}>Client Requests</h1>

      {data.length === 0 ? (
        <div style={empty}>No requests found</div>
      ) : (
        <div style={table}>
          <div style={{ ...row, ...tableHeader }}>
            <div>Name</div>
            <div>Service</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {data.map((r) => (
            <div key={r.id} style={row}>
              <div>{r.name}</div>
              <div>{r.service}</div>
              <div>
                <span style={statusBadge(r.status)}>{r.status}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {r.status === "Pending" && (
                  <>
                    <button
                      style={approve}
                      onClick={() => updateStatus(r.id, "Approved")}
                    >
                      Approve
                    </button>
                    <button
                      style={reject}
                      onClick={() => updateStatus(r.id, "Rejected")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ================= SMALL COMPONENTS ================= */

function NavItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "12px 16px",
        borderRadius: 10,
        cursor: "pointer",
        marginBottom: 8,
        fontWeight: 600,
        background: active ? "rgba(245,158,11,0.15)" : "transparent",
        color: active ? "#f59e0b" : "#fff",
      }}
    >
      {label}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div style={statCard}>
      <div style={muted}>{title}</div>
      <div style={statValue}>{value}</div>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  background: "#0a0e1a",
  display: "flex",
  color: "#fff",
};

const sidebar = {
  width: 240,
  padding: "24px 20px",
  borderRight: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  flexDirection: "column",
};

const logo = {
  fontSize: 22,
  fontWeight: 800,
  marginBottom: 30,
};

const logoutBtn = {
  background: "none",
  border: "none",
  color: "#f59e0b",
  fontWeight: 600,
  cursor: "pointer",
};

const content = {
  flex: 1,
  padding: "32px",
};

const heading = {
  fontSize: 26,
  fontWeight: 800,
  marginBottom: 24,
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 20,
  marginBottom: 32,
};

const statCard = {
  background: "rgba(30,35,55,0.8)",
  borderRadius: 16,
  padding: 24,
  border: "1px solid rgba(255,255,255,0.1)",
};

const statValue = {
  fontSize: 30,
  fontWeight: 800,
  marginTop: 6,
};

const lowerGrid = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: 24,
};

const panel = {
  background: "rgba(30,35,55,0.8)",
  borderRadius: 16,
  padding: 24,
  border: "1px solid rgba(255,255,255,0.1)",
};

const panelTitle = {
  fontSize: 16,
  fontWeight: 700,
  marginBottom: 16,
};

const activityRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const muted = {
  fontSize: 13,
  opacity: 0.6,
};

const table = {
  marginTop: 20,
  borderRadius: 16,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.1)",
};

const row = {
  display: "grid",
  gridTemplateColumns: "2fr 2fr 1.5fr 2fr",
  padding: "14px 18px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  alignItems: "center",
};

const tableHeader = {
  fontWeight: 700,
  opacity: 0.6,
};

const empty = {
  padding: 40,
  textAlign: "center",
  opacity: 0.6,
};

const statusBadge = (status) => ({
  padding: "6px 12px",
  borderRadius: 20,
  fontSize: 12,
  fontWeight: 700,
  background:
    status === "Approved"
      ? "rgba(34,197,94,0.2)"
      : status === "Rejected"
      ? "rgba(239,68,68,0.2)"
      : "rgba(245,158,11,0.2)",
  color:
    status === "Approved"
      ? "#4ade80"
      : status === "Rejected"
      ? "#f87171"
      : "#fbbf24",
});

const approve = {
  padding: "6px 12px",
  borderRadius: 8,
  border: "none",
  background: "rgba(34,197,94,0.2)",
  color: "#4ade80",
  fontWeight: 600,
  cursor: "pointer",
};

const reject = {
  padding: "6px 12px",
  borderRadius: 8,
  border: "none",
  background: "rgba(239,68,68,0.2)",
  color: "#f87171",
  fontWeight: 600,
  cursor: "pointer",
};

const primaryAction = {
  width: "100%",
  padding: "12px",
  borderRadius: 10,
  border: "none",
  background: "linear-gradient(135deg,#f59e0b,#ef4444)",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
  marginBottom: 12,
};

const secondaryAction = {
  width: "100%",
  padding: "12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.25)",
  background: "transparent",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};
