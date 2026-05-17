"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, TrendingDown, Clock, AlertTriangle, ShieldAlert } from "lucide-react"

interface ViolationItem {
  id: string
  title: string
  description: string
  count: number
  trend: "up" | "down" | "stable"
  severity: "critical" | "warning" | "safe"
  proximityToLimit: number // 0-100 percentage
  lastOccurrence?: string
  limitValue: string
  currentValue: string
  triggerTrade?: string
}

interface ViolationsTrackerProps {
  isActive?: boolean
}

const SegmentedPulseBar = ({ proximity, color }: { proximity: number; color: string }) => {
  const segments = 12;
  const activeSegments = Math.ceil((proximity / 100) * segments);

  return (
    <div className="flex gap-1 w-full mt-2">
      {Array.from({ length: segments }).map((_, i) => (
        <motion.div
          key={i}
          className="h-1.5 flex-1 rounded-sm"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ 
            opacity: i < activeSegments ? 1 : 0.2,
            scaleY: 1
          }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          style={{
            backgroundColor: i < activeSegments ? color : "#3f3f46",
            boxShadow: i < activeSegments ? `0 0 8px ${color}60` : "none",
          }}
        />
      ))}
    </div>
  );
};

export function ViolationsTracker({ isActive = false }: ViolationsTrackerProps) {
  const [selectedFilter, setSelectedFilter] = useState<"today" | "week" | "month">("week")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const violationsData: Record<"today" | "week" | "month", ViolationItem[]> = {
    today: [
      {
        id: "max-drawdown",
        title: "Max Drawdown",
        description: "Approaching hard breach limit",
        count: 1,
        trend: "up",
        severity: "critical",
        proximityToLimit: 92,
        lastOccurrence: "2 mins ago",
        limitValue: "5.0%",
        currentValue: "4.6%",
        triggerTrade: "XAUUSD - Sell 2.0 Lots",
      },
      {
        id: "daily-loss",
        title: "Daily Loss Limit",
        description: "Within safe operational parameters",
        count: 0,
        trend: "stable",
        severity: "safe",
        proximityToLimit: 35,
        limitValue: "$2,500",
        currentValue: "$875",
      },
      {
        id: "position-sizing",
        title: "Position Sizing",
        description: "No violations today",
        count: 0,
        trend: "stable",
        severity: "safe",
        proximityToLimit: 20,
        limitValue: "3.0 Lots",
        currentValue: "1.5 Lots",
      },
    ],
    week: [
      {
        id: "max-drawdown",
        title: "Max Drawdown",
        description: "Approaching hard breach limit",
        count: 1,
        trend: "up",
        severity: "critical",
        proximityToLimit: 92,
        lastOccurrence: "2 mins ago",
        limitValue: "5.0%",
        currentValue: "4.6%",
        triggerTrade: "XAUUSD - Sell 2.0 Lots",
      },
      {
        id: "daily-loss",
        title: "Daily Loss Limit",
        description: "Warning threshold reached yesterday",
        count: 1,
        trend: "up",
        severity: "warning",
        proximityToLimit: 75,
        lastOccurrence: "1 day ago",
        limitValue: "$2,500",
        currentValue: "$1,875",
      },
      {
        id: "position-sizing",
        title: "Position Sizing",
        description: "Exceeded max lot size twice",
        count: 2,
        trend: "up",
        severity: "warning",
        proximityToLimit: 75,
        lastOccurrence: "1 day ago",
        limitValue: "3.0 Lots",
        currentValue: "4.5 Lots",
        triggerTrade: "GBPUSD - Buy 4.5 Lots",
      },
    ],
    month: [
      {
        id: "max-drawdown",
        title: "Max Drawdown",
        description: "Approaching hard breach limit",
        count: 3,
        trend: "up",
        severity: "critical",
        proximityToLimit: 92,
        lastOccurrence: "2 mins ago",
        limitValue: "5.0%",
        currentValue: "4.6%",
        triggerTrade: "XAUUSD - Sell 2.0 Lots",
      },
      {
        id: "daily-loss",
        title: "Daily Loss Limit",
        description: "Breached twice this month",
        count: 2,
        trend: "down",
        severity: "critical",
        proximityToLimit: 100,
        lastOccurrence: "2 weeks ago",
        limitValue: "$2,500",
        currentValue: "$2,600",
        triggerTrade: "BTCUSD - Buy 1.0 Lots",
      },
      {
        id: "position-sizing",
        title: "Position Sizing",
        description: "Exceeded max lot size frequently",
        count: 8,
        trend: "up",
        severity: "critical",
        proximityToLimit: 100,
        lastOccurrence: "1 day ago",
        limitValue: "3.0 Lots",
        currentValue: "4.5 Lots",
        triggerTrade: "GBPUSD - Buy 4.5 Lots",
      },
    ]
  }

  const violations = violationsData[selectedFilter]

  const totalViolations = violations.reduce((sum, v) => sum + v.count, 0)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "#ef4444" // Red
      case "warning": return "#f59e0b" // Orange
      case "safe": return "#22c55e" // Green
      default: return "#6b7280" // Gray
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Controls */}
      <div className="w-full mb-6">
        <div className="flex flex-col items-start gap-3 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#00A9E0]" />
              Active Alerts
            </span>
            <motion.div
              className="flex items-center justify-center w-6 h-6 rounded-md bg-[#00A9E0]/20 border border-[#00A9E0]/50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <span className="text-[#00A9E0] font-bold text-xs">{totalViolations}</span>
            </motion.div>
          </div>

          {/* Time Filter */}
          <div className="flex items-center gap-1 bg-black/40 border border-white/5 rounded-lg p-1 backdrop-blur-md">
            {["today", "week", "month"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-[#00A9E0] text-white shadow-[0_0_10px_rgba(0,169,224,0.3)]"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Violations Stack */}
      <div className="w-full flex flex-col gap-4">
        {violations.map((violation, index) => {
          const color = getSeverityColor(violation.severity)
          const isHovered = hoveredId === violation.id

          return (
            <motion.div
              key={violation.id}
              className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border transition-all duration-500 cursor-default"
              style={{
                borderColor: violation.severity === "critical" ? `${color}40` : "rgba(255,255,255,0.05)",
                boxShadow: violation.severity === "critical" ? `0 0 20px ${color}10, inset 0 0 20px ${color}05` : "none",
              }}
              onMouseEnter={() => setHoveredId(violation.id)}
              onMouseLeave={() => setHoveredId(null)}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Critical Pulse Effect */}
              {violation.severity === "critical" && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[40px] rounded-full pointer-events-none animate-pulse" />
              )}

              <div className="p-4 sm:p-5 relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full shadow-lg"
                      style={{ 
                        backgroundColor: color,
                        boxShadow: `0 0 8px ${color}`
                      }}
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide">{violation.title}</h4>
                      <p className="text-zinc-500 text-xs mt-0.5">{violation.description}</p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div 
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] font-bold tracking-wider uppercase"
                    style={{
                      backgroundColor: `${color}10`,
                      borderColor: `${color}30`,
                      color: color
                    }}
                  >
                    {violation.severity === "critical" && <AlertTriangle className="w-3 h-3" />}
                    {violation.proximityToLimit}% RISK
                  </div>
                </div>

                {/* Data Stats */}
                <div className="flex justify-between items-end mt-4 mb-2">
                  <div className="flex gap-4">
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase font-semibold mb-1">Limit</div>
                      <div className="text-sm font-mono text-zinc-300">{violation.limitValue}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase font-semibold mb-1">Current</div>
                      <div className="text-sm font-mono text-white font-bold">{violation.currentValue}</div>
                    </div>
                  </div>
                  
                  {violation.count > 0 && (
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <Clock className="w-3 h-3" />
                      <span className="text-[10px]">{violation.lastOccurrence}</span>
                    </div>
                  )}
                </div>

                {/* Segmented Pulse Bar */}
                <SegmentedPulseBar proximity={violation.proximityToLimit} color={color} />

                {/* Expanded Details on Hover */}
                <AnimatePresence>
                  {isHovered && violation.triggerTrade && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="pt-3 border-t border-white/5 overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Trigger Source</span>
                        <span className="text-xs text-[#00A9E0] font-mono bg-[#00A9E0]/10 px-2 py-0.5 rounded border border-[#00A9E0]/20">
                          {violation.triggerTrade}
                        </span>
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
  )
}
