"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, TrendingUp, Shield, Target, BarChart3, CheckSquare, Clock } from "lucide-react"

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
        return "text-green-400"
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
        return "#22c55e"
      case "warning":
        return "#eab308"
      case "danger":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Score Breakdown</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 overflow-hidden">
                  <div
                    className="p-6 cursor-pointer hover:bg-zinc-800/30 transition-colors duration-200"
                    onClick={() => setExpandedMetric(isExpanded ? null : metric.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-zinc-800/50 rounded-lg">
                          <IconComponent className="h-5 w-5 text-[#00A9E0]" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{metric.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
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
                          <div className="text-white font-semibold">
                            {metric.id === "riskreward"
                              ? `1:${metric.current}`
                              : metric.id === "frequency"
                                ? `${metric.current} days/week`
                                : `${metric.current}%`}
                          </div>
                          <div className="text-zinc-400 text-sm">
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
                    <div className="mt-4">
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: getProgressColor(metric.status),
                            width: `${Math.min((metric.current / metric.target) * 100, 100)}%`,
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
                  {isExpanded && (
                    <motion.div
                      className="px-6 pb-6 border-t border-zinc-800/50"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-4 space-y-3">
                        <p className="text-zinc-300">{metric.description}</p>
                        <div className="bg-zinc-800/30 rounded-lg p-3">
                          <div className="text-sm text-zinc-400 mb-1">Benchmark:</div>
                          <div className="text-white text-sm">{metric.benchmark}</div>
                        </div>
                        {metric.status === "warning" && (
                          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                            <div className="text-yellow-400 text-sm font-medium mb-1">Improvement Needed</div>
                            <div className="text-yellow-300 text-sm">
                              Focus on this area to improve your overall readiness score.
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
