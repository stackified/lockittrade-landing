"use client"

import { useEffect, useState } from "react"

// Self-contained diagnostics page. Uses ONLY inline styles so it renders even
// if the app's Tailwind CSS or animations are the problem. Share the URL
// (e.g. www.lockittrade.com/diag) with anyone seeing the blank-page issue and
// have them screenshot it or tap "Copy report".
export default function DiagPage() {
  const [report, setReport] = useState<Record<string, string>>({})
  const [animOpacity, setAnimOpacity] = useState("measuring…")
  const [cssOk, setCssOk] = useState("measuring…")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const nav = navigator as any
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection
    const mm = (q: string) => (window.matchMedia ? window.matchMedia(q).matches : "n/a")

    // CSS-loaded test: create a div with a Tailwind class and read computed style.
    const probe = document.createElement("div")
    probe.className = "bg-black text-white"
    probe.style.position = "absolute"
    probe.style.left = "-9999px"
    document.body.appendChild(probe)
    const bg = getComputedStyle(probe).backgroundColor
    setCssOk(bg === "rgb(0, 0, 0)" ? `YES (bg=${bg})` : `NO — Tailwind not applied (bg=${bg})`)
    document.body.removeChild(probe)

    // Animation test: an element using the site's fade class — after the
    // animation window, opacity must be 1. If it stays 0, animations are the bug.
    const a = document.createElement("div")
    a.className = "animate-fade-in-up"
    a.style.position = "absolute"
    a.style.left = "-9999px"
    document.body.appendChild(a)
    window.setTimeout(() => {
      const op = getComputedStyle(a).opacity
      setAnimOpacity(op === "1" ? "OK (opacity=1)" : `STUCK at opacity=${op} ← would be blank`)
      document.body.removeChild(a)
    }, 1600)

    // Failed / slow resources
    let failed = "none"
    let slow = "none"
    try {
      const res = performance.getEntriesByType("resource") as PerformanceResourceTiming[]
      const bad = res.filter((r) => r.transferSize === 0 && r.duration === 0).map((r) => r.name)
      const slowOnes = res
        .filter((r) => r.duration > 3000)
        .map((r) => `${r.name.split("/").pop()} (${Math.round(r.duration)}ms)`)
      if (bad.length) failed = bad.slice(0, 8).join(", ")
      if (slowOnes.length) slow = slowOnes.slice(0, 8).join(", ")
    } catch {}

    let sheets = "n/a"
    try {
      sheets = String(document.styleSheets.length)
    } catch {}

    const navTime = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined

    setReport({
      "Build time (this deploy)": process.env.NEXT_PUBLIC_BUILD_TIME || "unknown",
      "Page loaded at": new Date().toISOString(),
      "URL": window.location.href,
      "User agent": navigator.userAgent,
      "Platform": nav.platform || "n/a",
      "Viewport": `${window.innerWidth} x ${window.innerHeight} @ DPR ${window.devicePixelRatio}`,
      "Screen": `${screen.width} x ${screen.height}`,
      "prefers-reduced-motion: reduce": String(mm("(prefers-reduced-motion: reduce)")),
      "prefers-color-scheme dark": String(mm("(prefers-color-scheme: dark)")),
      "Low Data / saveData": conn ? String(!!conn.saveData) : "n/a",
      "Network type": conn ? `${conn.effectiveType || "?"} (${conn.downlink || "?"}Mbps)` : "n/a",
      "Cookies enabled": String(navigator.cookieEnabled),
      "localStorage": (() => { try { localStorage.setItem("_t", "1"); localStorage.removeItem("_t"); return "available" } catch { return "BLOCKED" } })(),
      "Stylesheets loaded": sheets,
      "Failed resources": failed,
      "Slow resources (>3s)": slow,
      "DOM interactive": navTime ? `${Math.round(navTime.domInteractive)}ms` : "n/a",
      "Load complete": navTime ? `${Math.round(navTime.loadEventEnd)}ms` : "n/a",
    })
  }, [])

  const full = [
    "=== LockItTrade Diagnostics ===",
    `Tailwind CSS applied: ${cssOk}`,
    `Fade animation: ${animOpacity}`,
    ...Object.entries(report).map(([k, v]) => `${k}: ${v}`),
  ].join("\n")

  const copy = () => {
    try {
      navigator.clipboard.writeText(full)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "20px", lineHeight: 1.5 }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ background: "#00A9E0", color: "#000", padding: "16px", borderRadius: 12, fontWeight: 800, fontSize: 18, textAlign: "center" }}>
          ✅ DIAGNOSTICS LOADED — JS &amp; this page rendered
        </div>

        <h2 style={{ marginTop: 24, fontSize: 16 }}>Key checks</h2>
        <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 10, padding: 14 }}>
          <Row k="Tailwind CSS applied" v={cssOk} />
          <Row k="Fade-in animation" v={animOpacity} />
        </div>

        <h2 style={{ marginTop: 24, fontSize: 16 }}>Device & build</h2>
        <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 10, padding: 14 }}>
          {Object.entries(report).map(([k, v]) => (
            <Row key={k} k={k} v={v} />
          ))}
        </div>

        <button
          onClick={copy}
          style={{ marginTop: 20, width: "100%", padding: "14px", borderRadius: 10, border: "none", background: "#00A9E0", color: "#000", fontWeight: 700, fontSize: 16 }}
        >
          {copied ? "Copied ✓" : "Copy report"}
        </button>

        <textarea
          readOnly
          value={full}
          style={{ marginTop: 16, width: "100%", height: 220, background: "#000", color: "#0f0", border: "1px solid #2a2a2a", borderRadius: 10, padding: 12, fontFamily: "monospace", fontSize: 12 }}
        />
        <p style={{ color: "#888", fontSize: 12, marginTop: 12 }}>
          Screenshot this page or tap “Copy report” and paste it back. The “Build
          time” line tells us if you’re on the latest deploy or a cached old one.
        </p>
      </div>
    </div>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "6px 0", borderBottom: "1px solid #222", fontSize: 13 }}>
      <span style={{ color: "#9aa", flexShrink: 0 }}>{k}</span>
      <span style={{ textAlign: "right", wordBreak: "break-word" }}>{v}</span>
    </div>
  )
}
