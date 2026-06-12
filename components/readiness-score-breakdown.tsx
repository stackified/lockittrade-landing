"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, TrendingUp, Shield, Target, BarChart3, CheckSquare, Clock, AlertTriangle } from "lucide-react"

interface MetricData {
  id: string
  name: string
  weight: number
  current: number
  target: number
  status: "good" | "warning" | "danger"
  icon: any
  description: string
  benchmark: string
}

export function ReadinessScoreBreakdown() {
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null)

  const metrics: MetricData[] = [
    {
      id: "drawdown",
      name: "Drawdown Management",
      weight: 25,
      current: 8.2,
      target: 10,
      status: "good",
      icon: Shield,
      description: "Maximum reduction in account value from peak to trough",
      benchmark: "Under 10% is typically preferred by prop firms",
    },
    {
      id: "winrate",
      name: "Win Rate",
      weight: 20,
      current: 68,
      target: 55,
      status: "good",
      icon: Target,
      description: "Percentage of profitable trades",
      benchmark: "50-60% is typically considered strong",
    },
    {
      id: "riskreward",
      name: "Risk-Reward Ratio",
      weight: 20,
      current: 2.1,
      target: 1.5,
      status: "good",
      icon: TrendingUp,
      description: "Average profit on winners compared to average loss on losers",
      benchmark: "1:1.5 or better is preferred by most firms",
    },
    {
      id: "consistency",
      name: "Consistency",
      weight: 15,
      current: 82,
      target: 75,
      status: "good",
      icon: BarChart3,
      description: "Stability of daily and weekly trading results",
      benchmark: "Low standard deviation in profit/loss",
    },
    {
      id: "adherence",
      name: "Plan Adherence",
      weight: 15,
      current: 77,
      target: 80,
      status: "warning",
      icon: CheckSquare,
      description: "How consistently you follow your documented trading plan",
      benchmark: "80%+ adherence rate is preferred",
    },
    {
      id: "frequency",
      name: "Trading Frequency",
      weight: 5,
      current: 4.2,
      target: 4,
      status: "good",
      icon: Clock,
      description: "Regularity of trading throughout the trading week",
      benchmark: "3-5 trading days per week",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-emerald-400"
      case "warning":
        return "text-yellow-400"
      case "danger":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case "good":
        return "#10b981"
      case "warning":
        return "#eab308"
      case "danger":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  return (
    <section className="py-12 md:py-16 bg-black relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#9C5FFF]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Score <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.3)]">Breakdown</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Your readiness score is calculated from 6 key metrics, each weighted by importance to prop firms.
          </p>
        </motion.div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            const isExpanded = expandedMetric === metric.id

            return (
              <motion.div
                key={metric.id}
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div
                  className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-[#0c0c0c]/80 border-[#00A9E0]/40 shadow-[0_0_30px_rgba(0,169,224,0.08)] ring-1 ring-[#00A9E0]/20"
                      : "bg-[#0a0a0a]/60 border-white/[0.08] hover:border-white/20 hover:bg-white/[0.02]"
                  }`}
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedMetric(isExpanded ? null : metric.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-[#00A9E0]" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg tracking-tight">{metric.name}</h3>
                          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-1">
                            <span>Weight: {metric.weight}%</span>
                            <span className={getStatusColor(metric.status)}>
                              •{" "}
                              {metric.status === "good"
                                ? "Good"
                                : metric.status === "warning"
                                  ? "Needs Attention"
                                  : "Critical"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-white font-extrabold text-lg tracking-tight">
                            {metric.id === "riskreward"
                              ? `1:${metric.current}`
                              : metric.id === "frequency"
                                ? `${metric.current} days/week`
                                : `${metric.current}%`}
                          </div>
                          <div className="text-zinc-500 text-xs font-bold uppercase mt-0.5">
                            Target:{" "}
                            {metric.id === "riskreward"
                              ? `1:${metric.target}`
                              : metric.id === "frequency"
                                ? `${metric.target} days/week`
                                : `${metric.target}%`}
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-zinc-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-zinc-400" />
                        )}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-5">
                      <div className="w-full bg-white/[0.03] border border-white/[0.05] rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: getProgressColor(metric.status),
                            width: `${Math.min((metric.current / metric.target) * 100, 100)}%`,
                            boxShadow: `0 0 12px ${getProgressColor(metric.status)}a0`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min((metric.current / metric.target) * 100, 100)}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className="px-6 pb-6 border-t border-white/[0.05]"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="pt-5 space-y-4">
                          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{metric.description}</p>
                          
                          <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4">
                            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Benchmark:</div>
                            <div className="text-white text-sm font-medium leading-relaxed">{metric.benchmark}</div>
                          </div>

                          {metric.status === "warning" && (
                            <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-4 flex items-start gap-3">
                              <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-yellow-400 text-xs font-extrabold uppercase tracking-wider mb-1">Improvement Needed</div>
                                <div className="text-zinc-300 text-sm leading-relaxed">
                                  Focus on this area to improve your overall readiness score.
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
