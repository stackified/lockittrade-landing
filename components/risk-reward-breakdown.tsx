"use client"

import { useState, useEffect } from "react"

interface Trade {
  id: string
  pair: string
  type: "buy" | "sell"
  entryPrice: number
  stopLoss: number
  takeProfit: number
  rrRatio: number
  outcome: "win" | "loss"
}

interface RiskRewardBreakdownProps {
  isActive?: boolean
}

export function RiskRewardBreakdown({ isActive = false }: RiskRewardBreakdownProps) {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})

  const trades: Trade[] = [
    {
      id: "trade-1",
      pair: "EUR/USD",
      type: "buy",
      entryPrice: 1.085,
      stopLoss: 1.08,
      takeProfit: 1.095,
      rrRatio: 2.0,
      outcome: "win",
    },
    {
      id: "trade-2",
      pair: "GBP/JPY",
      type: "sell",
      entryPrice: 185.5,
      stopLoss: 186.0,
      takeProfit: 184.25,
      rrRatio: 2.5,
      outcome: "loss",
    },
  ]

  // Animate R:R ratios when component mounts (always animate)
  useEffect(() => {
    trades.forEach((trade, index) => {
      setTimeout(() => {
        let currentRatio = 0
        const targetRatio = trade.rrRatio
        const duration = 1500
        const steps = 30
        const increment = targetRatio / steps
        const stepDuration = duration / steps

        const timer = setInterval(() => {
          currentRatio = Math.min(currentRatio + increment, targetRatio)
          setAnimatedValues((prev) => ({
            ...prev,
            [trade.id]: Number(currentRatio.toFixed(1)),
          }))

          if (currentRatio >= targetRatio) {
            clearInterval(timer)
          }
        }, stepDuration)
      }, index * 300)
    })
  }, []) // Removed isActive dependency

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case "win":
        return "#22c55e" // Green
      case "loss":
        return "#ef4444" // Red
      default:
        return "#6b7280" // Gray
    }
  }

  const averageRR = trades.reduce((sum, trade) => sum + trade.rrRatio, 0) / trades.length

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-4xl mx-auto">
      {/* Simple Header */}
      <div className="w-full mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Risk:Reward Breakdown</h3>
        <p className="text-slate-400 text-sm">Every trade&apos;s risk and reward clearly laid out</p>
      </div>

      {/* Trade Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
        {trades.map((trade, index) => (
          <div
            key={trade.id}
            className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Trade Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h4 className="text-white font-semibold text-xl">{trade.pair}</h4>
                <div
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    trade.type === "buy" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {trade.type.toUpperCase()}
                </div>
              </div>

              {/* Outcome Badge */}
              <div
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${getOutcomeColor(trade.outcome)}20`,
                  color: getOutcomeColor(trade.outcome),
                }}
              >
                {trade.outcome.toUpperCase()}
              </div>
            </div>

            {/* R:R Ratio - Main Focus */}
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-[#00A9E0] mb-2">
                {animatedValues[trade.id] || trade.rrRatio}:1
              </div>
              <div className="text-slate-400 text-sm">Risk:Reward Ratio</div>
            </div>

            {/* Simple Price Info */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-slate-400 text-xs mb-1">Entry</div>
                <div className="text-white text-sm font-medium">{trade.entryPrice}</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1">Stop</div>
                <div className="text-red-400 text-sm font-medium">{trade.stopLoss}</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1">Target</div>
                <div className="text-green-400 text-sm font-medium">{trade.takeProfit}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Summary */}
      <div className="text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
        <div className="bg-zinc-900/50 rounded-lg px-6 py-3 inline-block">
          <span className="text-slate-400 text-sm mr-2">Average R:R:</span>
          <span className="text-[#00A9E0] font-bold text-lg">{averageRR.toFixed(1)}:1</span>
        </div>
      </div>
    </div>
  )
}
