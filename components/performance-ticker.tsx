"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp, ArrowDown } from "lucide-react"

// Sample performance data for the cards
const performanceCards = [
  {
    id: 1,
    title: "Readiness Score Ring UI",
    stats: {
      winRate: { value: 84, trend: "up" },
      riskReward: { value: 2.3, trend: "up" },
      drawdown: { value: -3.2, trend: "down" },
      propFirmScore: { value: 92, trend: "up" },
    },
  },
  {
    id: 2,
    title: "Violation Table UI",
    stats: {
      winRate: { value: 76, trend: "up" },
      riskReward: { value: 1.8, trend: "down" },
      drawdown: { value: -2.7, trend: "up" },
      propFirmScore: { value: 85, trend: "up" },
    },
  },
  {
    id: 3,
    title: "Strategy Compliance Dashboard",
    stats: {
      winRate: { value: 91, trend: "up" },
      riskReward: { value: 2.7, trend: "up" },
      drawdown: { value: -4.1, trend: "down" },
      propFirmScore: { value: 88, trend: "up" },
    },
  },
  {
    id: 4,
    title: "Performance Graphs",
    stats: {
      winRate: { value: 79, trend: "down" },
      riskReward: { value: 2.1, trend: "up" },
      drawdown: { value: -2.9, trend: "up" },
      propFirmScore: { value: 83, trend: "up" },
    },
  },
  {
    id: 5,
    title: "Journal Notes Section",
    stats: {
      winRate: { value: 82, trend: "up" },
      riskReward: { value: 2.5, trend: "up" },
      drawdown: { value: -3.5, trend: "down" },
      propFirmScore: { value: 90, trend: "up" },
    },
  },
  {
    id: 6,
    title: "Trade Log Breakdown",
    stats: {
      winRate: { value: 88, trend: "up" },
      riskReward: { value: 2.9, trend: "up" },
      drawdown: { value: -3.8, trend: "down" },
      propFirmScore: { value: 94, trend: "up" },
    },
  },
]

export function PerformanceTicker() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame
    const containerWidth = scrollContainer.scrollWidth
    const viewportWidth = scrollContainer.clientWidth

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed
      // Reset scroll position when we've scrolled through all cards
      if (scrollPosition >= containerWidth - viewportWidth) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll)

    // Pause scrolling when user interacts
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId)
    }

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)
    scrollContainer.addEventListener("touchstart", handleMouseEnter)
    scrollContainer.addEventListener("touchend", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
        scrollContainer.removeEventListener("touchstart", handleMouseEnter)
        scrollContainer.removeEventListener("touchend", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-zinc-900 to-[#0a0e17]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-[#00A9E0]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-[#00A9E0]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 mb-12">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Real Traders. Real Data. Real Results.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg">
            These are the kind of metrics Lock It Trade helps you achieve. Scroll through to see examples of what our
            users see inside their dashboard.
          </p>
        </motion.div>
      </div>

      {/* Scrolling ticker container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex space-x-6 px-4">
          {performanceCards.map((card, index) => (
            <PerformanceCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PerformanceCardProps {
  card: {
    id: number
    title: string
    stats: {
      winRate: { value: number; trend: string }
      riskReward: { value: number; trend: string }
      drawdown: { value: number; trend: string }
      propFirmScore: { value: number; trend: string }
    }
  }
  index: number
}

function PerformanceCard({ card, index }: PerformanceCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 snap-center min-w-[280px] md:min-w-[340px] bg-white/5 backdrop-blur-sm border border-zinc-800/50 rounded-xl overflow-hidden hover:border-[#00A9E0]/30 transition-all duration-300"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.05, borderColor: "rgba(0, 169, 224, 0.5)" }}
    >
      {/* Top half - UI placeholder */}
      <div className="p-4">
        <div className="relative group">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-[160px] w-full rounded-xl flex items-center justify-center overflow-hidden">
            {/* Animated glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A9E0]/0 via-[#00A9E0]/20 to-[#00A9E0]/0 animate-glow-slide" />
            </div>
            <p className="text-slate-500 text-sm font-medium">{card.title}</p>
          </div>
          <div className="mt-2 text-center">
            <p className="text-slate-400 text-xs">Dashboard Screenshot Placeholder</p>
          </div>
        </div>
      </div>

      {/* Bottom half - Stats */}
      <div className="bg-black/20 p-4 border-t border-zinc-800/50">
        <div className="grid grid-cols-2 gap-3">
          <StatItem label="Win Rate" value={`${card.stats.winRate.value}%`} trend={card.stats.winRate.trend} />
          <StatItem
            label="Risk/Reward"
            value={card.stats.riskReward.value.toFixed(1)}
            trend={card.stats.riskReward.trend}
          />
          <StatItem
            label="Drawdown"
            value={`${card.stats.drawdown.value}%`}
            trend={card.stats.drawdown.trend === "up" ? "down" : "up"} // Inverse for drawdown (down is good)
          />
          <StatItem
            label="Prop Firm Score"
            value={`${card.stats.propFirmScore.value}%`}
            trend={card.stats.propFirmScore.trend}
          />
        </div>
      </div>
    </motion.div>
  )
}

interface StatItemProps {
  label: string
  value: string
  trend: string
}

function StatItem({ label, value, trend }: StatItemProps) {
  return (
    <div className="flex flex-col">
      <span className="text-slate-400 text-xs mb-1">{label}</span>
      <div className="flex items-center">
        <span className="text-white font-semibold mr-1">{value}</span>
        {trend === "up" ? (
          <ArrowUp className="h-3 w-3 text-green-400" />
        ) : (
          <ArrowDown className="h-3 w-3 text-red-400" />
        )}
      </div>
    </div>
  )
}
