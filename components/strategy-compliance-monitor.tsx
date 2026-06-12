"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, XCircle, Activity, ShieldCheck, Target, Zap, Clock } from "lucide-react"

interface TradingRule {
  id: string
  name: string
  description: string
  isCompliant: boolean
  category: "risk" | "timing" | "setup" | "discipline"
  complianceRate: number
}

interface StrategyComplianceMonitorProps {
  isActive?: boolean
}

export function StrategyComplianceMonitor({ isActive = false }: StrategyComplianceMonitorProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "risk" | "timing" | "setup" | "discipline">("all")
  const [animatedScore, setAnimatedScore] = useState(0)

  const tradingRules: TradingRule[] = [
    {
      id: "risk-per-trade",
      name: "Max Risk Per Trade",
      description: "Never risk more than 2%",
      isCompliant: true,
      category: "risk",
      complianceRate: 95,
    },
    {
      id: "trading-hours",
      name: "Trading Hours",
      description: "Only trade 8AM - 5PM EST",
      isCompliant: false,
      category: "timing",
      complianceRate: 72,
    },
    {
      id: "confluence",
      name: "3+ Confluences",
      description: "Wait for multiple signals",
      isCompliant: true,
      category: "setup",
      complianceRate: 88,
    },
    {
      id: "daily-trades",
      name: "Max Daily Trades",
      description: "Stop after 3 trades",
      isCompliant: true,
      category: "discipline",
      complianceRate: 91,
    },
    {
      id: "stop-loss",
      name: "Hard Stop Loss",
      description: "Always use a SL",
      isCompliant: true,
      category: "risk",
      complianceRate: 100,
    },
  ]

  const overallCompliance = 85
  const compliantRules = tradingRules.filter((r) => r.isCompliant).length

  useEffect(() => {
    if (!isActive) return
    const timer = setInterval(() => {
      setAnimatedScore((prev) => {
        if (prev >= overallCompliance) {
          clearInterval(timer)
          return overallCompliance
        }
        return prev + 1
      })
    }, 20)
    return () => clearInterval(timer)
  }, [isActive, overallCompliance])

  const categories = [
    { id: "all", label: "All Rules", icon: Activity },
    { id: "risk", label: "Risk", icon: ShieldCheck },
    { id: "timing", label: "Timing", icon: Clock },
    { id: "setup", label: "Setup", icon: Target },
    { id: "discipline", label: "Discipline", icon: Zap },
  ]

  const filteredRules = activeCategory === "all" 
    ? tradingRules 
    : tradingRules.filter(r => r.category === activeCategory)

  // SVG Donut properties
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference

  return (
    <div className="flex flex-col w-full h-full">
      {/* Premium Top Section: Glowing SVG Donut + Core Stats */}
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-8 bg-black/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A9E0]/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-[#00A9E0]/10 transition-colors duration-500" />
        
        {/* SVG Circular Progress Ring */}
        <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              className="text-white/5 stroke-current"
              strokeWidth="8"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
            />
            {/* Animated Progress Circle */}
            <motion.circle
              className="text-[#00A9E0] stroke-current"
              strokeWidth="8"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ strokeDasharray: circumference }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-white">{animatedScore}<span className="text-lg text-[#00A9E0]">%</span></span>
          </div>
        </div>

        {/* Core Stats Text */}
        <div className="flex flex-col gap-2 relative z-10 w-full text-center sm:text-left">
          <h4 className="text-white font-bold text-lg tracking-wide">System Health</h4>
          <p className="text-zinc-400 text-sm">Your strategy execution is currently robust, though timing rules show deviation.</p>
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
            <div className="bg-[#00A9E0]/10 border border-[#00A9E0]/20 text-[#00A9E0] px-3 py-1 rounded-md text-xs font-bold tracking-wider">
              {compliantRules} / {tradingRules.length} ALIGNED
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
        {categories.map(cat => {
          const Icon = cat.icon
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Rules Glowing Pills */}
      <div className="flex flex-col gap-3 min-h-[250px]">
        <AnimatePresence mode="popLayout">
          {filteredRules.map((rule, i) => (
            <motion.div
              key={rule.id}
              layout
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group relative bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between overflow-hidden backdrop-blur-md hover:bg-white/5 transition-colors cursor-default"
            >
              {/* Dynamic Glow Line */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ 
                  backgroundColor: rule.isCompliant ? "#22c55e" : "#ef4444",
                  boxShadow: `0 0 10px ${rule.isCompliant ? "#22c55e" : "#ef4444"}`
                }}
              />

              <div className="flex items-center gap-4 pl-2">
                <div className={`p-2 rounded-full ${rule.isCompliant ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                  {rule.isCompliant ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm">{rule.name}</h5>
                  <span className="text-zinc-500 text-xs">{rule.description}</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Compliance</span>
                <span className={`text-sm font-mono font-bold ${rule.isCompliant ? "text-green-400" : "text-red-400"}`}>
                  {rule.complianceRate}%
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredRules.length === 0 && (
          <motion.div 
            animate={{}} 
            className="flex-1 flex items-center justify-center text-zinc-500 text-sm"
          >
            No rules found for this category.
          </motion.div>
        )}
      </div>
    </div>
  )
}
