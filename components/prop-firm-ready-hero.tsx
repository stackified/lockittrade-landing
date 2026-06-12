"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, XCircle, TrendingUp, ChevronRight } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { ParticleBackground } from "@/components/particle-background"
import { AIGridBackground } from "@/components/ai-grid-background"

export function PropFirmReadyHero() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  // Sample readiness score - this would come from user data
  const readinessScore = 73

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#10b981" // Green
    if (score >= 70) return "#eab308" // Yellow
    if (score >= 50) return "#f59e0b" // Orange
    return "#ef4444" // Red
  }

  const getScoreStatus = (score: number) => {
    if (score >= 80) return { text: "Prop Firm Ready", icon: CheckCircle, color: "text-emerald-400" }
    if (score >= 70) return { text: "Almost Ready", icon: AlertTriangle, color: "text-yellow-400" }
    if (score >= 50) return { text: "Making Progress", icon: TrendingUp, color: "text-orange-400" }
    return { text: "Getting Started", icon: XCircle, color: "text-red-400" }
  }

  const status = getScoreStatus(readinessScore)
  const StatusIcon = status.icon

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-black">
        {/* Background Components */}
        <AIGridBackground />
        <ParticleBackground />

        {/* Huge Ambient Glow in Center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-[#00A9E0]/[0.12] blur-[150px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left side - Content */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Pill badge */}
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 hover:bg-white/[0.05] transition-colors cursor-pointer justify-center lg:justify-start"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                <span className="flex h-2 w-2 rounded-full bg-[#00A9E0] shadow-[0_0_8px_#00A9E0]"></span>
                <span className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">Live Readiness Assessment</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] mb-6">
                Are You <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.35)]">
                  Prop Firm Ready?
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get a personalized assessment of your trading performance against prop firm evaluation criteria. Know
                exactly where you stand and what to improve to get funded.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Button
                  size="lg"
                  className="bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white font-bold text-base h-14 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,169,224,0.5)]"
                  onClick={() => setIsWaitlistModalOpen(true)}
                >
                  Get Your Score
                </Button>
                <Button
                  size="lg"
                  className="border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 bg-transparent font-semibold text-base h-14 px-8 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                {[
                  "Real-time readiness scoring",
                  "Trading style adaptation",
                  "Prop firm requirements matching",
                  "Personalized improvement plan",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-zinc-300 justify-center lg:justify-start"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Score Display */}
            <motion.div
              className="lg:w-1/2 flex justify-center w-full"
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md rounded-3xl border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-xl p-8 shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/10 overflow-hidden">
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                {/* Header bar of the mock window */}
                <div className="absolute top-0 left-0 right-0 h-11 bg-black/40 border-b border-white/[0.05] flex items-center px-6 z-20">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
                    <span className="text-[9px] text-white/50 font-bold tracking-widest uppercase">Readiness Assessment</span>
                  </div>
                </div>

                <div className="text-center pt-8">
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider opacity-90">Sample Readiness Score</h3>

                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-8">
                    <svg className="overflow-visible w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                      {/* Background circle */}
                      <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="7" />
                      {/* Progress circle */}
                      <motion.circle
                        cx="70"
                        cy="70"
                        r="60"
                        fill="none"
                        stroke={getScoreColor(readinessScore)}
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray="377"
                        initial={{ strokeDashoffset: 377 }}
                        animate={{ strokeDashoffset: 377 * (1 - readinessScore / 100) }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        style={{
                          filter: `drop-shadow(0 0 8px ${getScoreColor(readinessScore)})`,
                        }}
                      />
                    </svg>

                    {/* Score text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        className="text-5xl font-black text-white tracking-tight mb-1"
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        {readinessScore}%
                      </motion.div>
                      <div className={`flex items-center gap-1.5 ${status.color}`}>
                        <StatusIcon className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">{status.text}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick metrics */}
                  <div className="grid grid-cols-2 gap-3.5 text-sm">
                    {[
                      { label: "Win Rate", value: "68%" },
                      { label: "Max Drawdown", value: "-8.2%" },
                      { label: "Risk:Reward", value: "1:2.1" },
                      { label: "Consistency", value: "82%" }
                    ].map((metric, i) => (
                      <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-3.5 text-left transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                        <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{metric.label}</div>
                        <div className="text-white font-extrabold text-lg mt-1 tracking-tight">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
