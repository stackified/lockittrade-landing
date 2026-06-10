"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { LineChart, Clock, Sparkles } from "lucide-react"

// Points for a stylised, upward-trending equity curve (0-100 viewBox)
const equityPath = "M0,90 L12,82 L24,86 L36,68 L48,72 L60,52 L72,58 L84,34 L100,20"

const metrics = [
  { label: "Net Profit", value: "+$8,745", accent: "text-emerald-400" },
  { label: "Win Rate", value: "61.2%", accent: "text-white" },
  { label: "Profit Factor", value: "2.47", accent: "text-white" },
  { label: "Total Trades", value: "342", accent: "text-white" },
]

export function BacktestingComingSoon() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.06] via-transparent to-[#00A9E0]/[0.06] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                <Clock size={16} />
                Coming Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Backtesting, <span className="text-[#00A9E0]">reimagined</span>.
              </h2>
              <p className="text-zinc-400 mb-6 max-w-md">
                Simulate any strategy against historical data, visualise your equity curve, and validate your
                edge before you risk a cent. Full session tracking with win rate, profit factor and drawdown
                analysis — arriving soon.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Be the first to know when it drops
              </div>
            </div>

            {/* Mock backtest panel */}
            <div className="relative">
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <LineChart className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-white">EURUSD Breakout</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Completed
                  </span>
                </div>

                {/* Equity curve */}
                <div className="relative h-28 mb-4">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <defs>
                      <linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00A9E0" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00A9E0" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d={`${equityPath} L100,100 L0,100 Z`}
                      fill="url(#equityFill)"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.path
                      d={equityPath}
                      fill="none"
                      stroke="#00A9E0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                    />
                  </svg>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-2">
                  {metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <p className={`text-sm sm:text-base font-bold tabular-nums ${m.accent}`}>{m.value}</p>
                      <p className="text-[10px] text-zinc-500 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coming soon shimmer overlay badge */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-purple-500 text-white text-[11px] font-bold shadow-[0_0_20px_rgba(168,85,247,0.5)] rotate-3">
                PRO
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
