"use client"

import { useState } from "react"
import { Zap, Clock, Brain, Sparkles } from "lucide-react"

const traderTypes = {
  scalper: {
    id: "scalper",
    icon: Zap,
    title: "Scalper",
    description: "Quick entries. Quick exits. Speed is your edge.",
    feature: "You'll love our Risk:Reward Analyzer to pinpoint micro-edges.",
    stats: { risk: 85, patience: 40, consistency: 75, rrPreference: 90, tradeDuration: 30 },
    color: "#00A9E0",
  },
  intraday: {
    id: "intraday",
    icon: Clock,
    title: "Intraday",
    description: "You ride trends within the day with precision.",
    feature: "You'll benefit most from our Session Filters to avoid chop.",
    stats: { risk: 65, patience: 60, consistency: 80, rrPreference: 70, tradeDuration: 60 },
    color: "#9C5FFF",
  },
  swing: {
    id: "swing",
    icon: Brain,
    title: "Swing",
    description: "You wait patiently. You trade time for clarity.",
    feature: "Your edge is Discipline. Our Strategy Compliance tool is made for you.",
    stats: { risk: 50, patience: 90, consistency: 70, rrPreference: 75, tradeDuration: 85 },
    color: "#10b981",
  },
}

type TraderTypeKey = keyof typeof traderTypes

// Simple Radar Chart Component
function RadarChart({ stats, color }: { stats: any; color: string }) {
  const categories = ["Risk Appetite", "Patience", "Consistency", "R:R Focus", "Duration"]
  const values = [stats.risk, stats.patience, stats.consistency, stats.rrPreference, stats.tradeDuration]
  const size = 300
  const center = size / 2
  const radius = size * 0.4

  const points = values.map((val, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
    const distance = (val / 100) * radius
    return `${center + distance * Math.cos(angle)},${center + distance * Math.sin(angle)}`
  })

  const pentagonLevels = [0.2, 0.4, 0.6, 0.8, 1.0].map((level) => {
    return Array.from({ length: 5 }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
      const distance = level * radius
      return `${center + distance * Math.cos(angle)},${center + distance * Math.sin(angle)}`
    }).join(" ")
  })

  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible w-full h-full max-w-[300px]">
        {/* Web grid */}
        {pentagonLevels.map((points, i) => (
          <polygon key={i} points={points} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
          return (
            <line
              key={i}
              x1={center} y1={center}
              x2={center + radius * Math.cos(angle)} y2={center + radius * Math.sin(angle)}
              stroke="rgba(255,255,255,0.1)" strokeWidth="1"
            />
          )
        })}

        {/* Data polygon — points set statically so it always renders valid
            coordinates (animating the points string crashed on some browsers
            with "Expected number, undefined"). The CSS transition smooths tab
            changes without framer-motion mutating the points attribute. */}
        <polygon
          points={points.join(" ")}
          fill={`${color}40`}
          stroke={color}
          strokeWidth="2"
          style={{ transition: "all 0.5s ease" }}
        />

        {/* Data points */}
        {values.map((val, i) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
          const x = center + (val / 100) * radius * Math.cos(angle)
          const y = center + (val / 100) * radius * Math.sin(angle)
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill={color}
              style={{ transition: "all 0.5s ease" }}
            />
          )
        })}
      </svg>
      
      {/* Labels positioned absolutely around the SVG */}
      <div className="absolute inset-0 max-w-[300px] max-h-[300px] m-auto pointer-events-none">
        {categories.map((cat, i) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
          // Push labels out further
          const distance = radius * 1.3 
          const x = 50 + (distance / size) * 100 * Math.cos(angle)
          const y = 50 + (distance / size) * 100 * Math.sin(angle)
          
          return (
            <div 
              key={cat} 
              className="absolute text-xs md:text-sm text-zinc-400 font-medium whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {cat}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TraderTypeSelector() {
  const [activeTab, setActiveTab] = useState<TraderTypeKey>("scalper")

  const activeData = traderTypes[activeTab]
  const Icon = activeData.icon

  return (
    <section className="py-24 sm:py-36 bg-black relative overflow-hidden">
      {/* Background glow matching active tab */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none transition-colors duration-1000">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full transition-colors duration-1000 opacity-20"
          style={{ backgroundColor: activeData.color }}
        />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Adaptive AI for <span style={{ color: activeData.color }} className="transition-colors duration-500">Every Style</span>.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            LockItTrade dynamically adjusts its insights and compliance monitoring based on how you trade.
          </p>
        </div>

        {/* Tab Selector */}
        <div
          className="flex justify-center mb-12 sm:mb-20 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 flex overflow-x-auto max-w-full">
            {(Object.keys(traderTypes) as TraderTypeKey[]).map((key) => {
              const isActive = activeTab === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? "text-white bg-white/10 border border-white/20 shadow-lg backdrop-blur-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {traderTypes[key].title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Interactive Radar Chart */}
          <div
            className="order-2 lg:order-1 glass-panel p-8 sm:p-12 rounded-[2.5rem] flex items-center justify-center relative animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <RadarChart stats={activeData.stats} color={activeData.color} />
          </div>

          {/* Right: Dynamic Content */}
          <div className="order-1 lg:order-2 h-[250px] relative">
            <div
              key={activeTab}
              className="absolute inset-0 flex flex-col justify-center animate-fade-in-left"
            >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: `${activeData.color}20`, border: `1px solid ${activeData.color}40` }}
                >
                  <Icon className="w-8 h-8" style={{ color: activeData.color }} />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">{activeData.title} Profile</h3>
                <p className="text-xl text-zinc-300 mb-6">{activeData.description}</p>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
                  <div className="mt-1">
                    <Sparkles className="w-5 h-5" style={{ color: activeData.color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">AI Recommendation</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{activeData.feature}</p>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TraderTypeSelector

