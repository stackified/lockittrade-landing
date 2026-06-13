"use client"

import { useState, useEffect, useMemo } from "react"

// Generate deterministic particle data using a seed
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297
  return x - Math.floor(x)
}

interface Particle {
  width: number
  height: number
  top: string
  left: string
  opacity: number
  duration: number
  delay: number
}

// Trimmed from 40 → 16: fewer infinitely-animating nodes = less main-thread work.
const PARTICLE_COUNT = 16

export function ParticleBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate particles only once using deterministic seed
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      width: seededRandom(i * 4 + 1) * 3 + 1,
      height: seededRandom(i * 4 + 2) * 3 + 1,
      top: `${seededRandom(i * 4 + 3) * 100}%`,
      left: `${seededRandom(i * 4 + 4) * 100}%`,
      opacity: seededRandom(i * 4 + 5) * 0.3 + 0.05,
      duration: seededRandom(i * 4 + 6) * 4 + 3,
      delay: seededRandom(i * 4 + 7) * 5,
    }))
  }, [])

  // Don't render particles on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-900" />
      </div>
    )
  }

  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-900" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00A9E0]/[0.03] blur-[150px] rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#9C5FFF]/[0.02] blur-[120px] rounded-full" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00A9E0]"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Glowing network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <path
          d="M0,80 Q250,30 500,80 T1000,80"
          stroke="url(#particleGrad)"
          strokeWidth="0.5"
          fill="none"
          opacity={0.4}
        />
        <path
          d="M0,200 Q350,140 700,200 T1400,200"
          stroke="url(#particleGrad)"
          strokeWidth="0.5"
          fill="none"
          opacity={0.3}
        />
        <defs>
          <linearGradient id="particleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00A9E0" stopOpacity="0" />
            <stop offset="50%" stopColor="#00A9E0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00A9E0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
