"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Target, TrendingUp, PieChart } from "lucide-react"

type CategoryKey = "consistency" | "winRate" | "rMultiple"

const categories: { key: CategoryKey; label: string; icon: typeof Target; suffix: string }[] = [
  { key: "consistency", label: "Consistency", icon: Target, suffix: "%" },
  { key: "winRate", label: "Win Rate", icon: PieChart, suffix: "%" },
  { key: "rMultiple", label: "R-Multiple", icon: TrendingUp, suffix: "R" },
]

interface Trader {
  name: string
  handle: string
  color: string
  trades: number
  scores: Record<CategoryKey, string>
  you?: boolean
}

const traders: Trader[] = [
  { name: "Marcus Vale", handle: "@precision_fx", color: "bg-amber-500", trades: 142, scores: { consistency: "94.3", winRate: "68.9", rMultiple: "2.85" } },
  { name: "Lena Ortiz", handle: "@steady_wins", color: "bg-zinc-300", trades: 128, scores: { consistency: "91.7", winRate: "65.2", rMultiple: "2.64" } },
  { name: "Dev Patel", handle: "@swing_dev", color: "bg-orange-600", trades: 119, scores: { consistency: "89.2", winRate: "63.1", rMultiple: "2.41" } },
  { name: "Sofia Khan", handle: "@riskmgmt_sk", color: "bg-purple-500", trades: 104, scores: { consistency: "86.5", winRate: "61.4", rMultiple: "2.27" } },
  { name: "Jordan Lee", handle: "@scalp_jl", color: "bg-blue-500", trades: 97, scores: { consistency: "83.8", winRate: "59.7", rMultiple: "2.12" } },
  { name: "You", handle: "@your_edge", color: "bg-[#00A9E0]", trades: 76, scores: { consistency: "76.5", winRate: "57.3", rMultiple: "1.94" }, you: true },
]

const rankBadge = (rank: number) => {
  if (rank === 1) return "🏆"
  if (rank === 2) return "🥈"
  if (rank === 3) return "🥉"
  return null
}

export function LeaderboardSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [active, setActive] = useState<CategoryKey>("consistency")

  const activeCategory = categories.find((c) => c.key === active)!
  const sorted = [...traders].sort(
    (a, b) => parseFloat(b.scores[active]) - parseFloat(a.scores[active])
  )

  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A9E0]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          initial={{ y: 20 }}
          animate={inView ? { y: 0 } : { y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A9E0]/10 border border-[#00A9E0]/20 text-[#00A9E0] text-sm font-medium mb-6">
            <Trophy size={16} />
            Community Leaderboard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Compete. Climb. <span className="text-[#00A9E0]">Get Recognized.</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Ranked by the metrics that actually matter — not just P&L. See where you stand against the
            community and turn discipline into bragging rights.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto glass-panel rounded-[2rem] p-5 sm:p-8 relative overflow-hidden"
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : { y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A9E0]/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Category tabs */}
          <div className="relative z-10 flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => {
              const isActive = cat.key === active
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#00A9E0] text-white shadow-[0_0_20px_rgba(0,169,224,0.3)]"
                      : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Header row */}
          <div className="relative z-10 hidden sm:grid grid-cols-[40px_1fr_auto_auto] gap-4 px-4 pb-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
            <span>#</span>
            <span>Trader</span>
            <span className="text-right">Trades</span>
            <span className="text-right w-20">{activeCategory.label}</span>
          </div>

          {/* Rows */}
          <div className="relative z-10 space-y-2">
            {sorted.map((trader, i) => {
              const rank = i + 1
              const badge = rankBadge(rank)
              return (
                <motion.div
                  key={trader.handle}
                  layout
                  transition={{ duration: 0.4, type: "spring", damping: 22 }}
                  className={`grid grid-cols-[40px_1fr_auto] sm:grid-cols-[40px_1fr_auto_auto] gap-3 sm:gap-4 items-center px-4 py-3 rounded-xl border transition-colors ${
                    trader.you
                      ? "bg-[#00A9E0]/10 border-[#00A9E0]/30"
                      : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="text-center font-bold text-zinc-400">
                    {badge ? <span className="text-lg">{badge}</span> : rank}
                  </div>
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-full ${trader.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                      {trader.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate flex items-center gap-2">
                        {trader.name}
                        {trader.you && (
                          <span className="text-[10px] font-bold text-[#00A9E0] bg-[#00A9E0]/10 px-1.5 py-0.5 rounded">YOU</span>
                        )}
                      </p>
                      <p className="text-xs text-zinc-500 truncate">{trader.handle}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right text-sm text-zinc-400 tabular-nums">{trader.trades}</div>
                  <div className="text-right w-16 sm:w-20">
                    <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                      {trader.scores[active]}
                    </span>
                    <span className="text-xs text-zinc-500 ml-0.5">{activeCategory.suffix}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <p className="relative z-10 text-center text-xs text-zinc-600 mt-6">
            Sample standings · Updated weekly · Anonymous mode available
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default LeaderboardSection

