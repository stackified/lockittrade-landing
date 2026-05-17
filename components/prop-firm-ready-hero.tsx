"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle, TrendingUp } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"

export function PropFirmReadyHero() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  // Sample readiness score - this would come from user data
  const readinessScore = 73

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#22c55e" // Green
    if (score >= 70) return "#eab308" // Yellow
    if (score >= 50) return "#f59e0b" // Orange
    return "#ef4444" // Red
  }

  const getScoreStatus = (score: number) => {
    if (score >= 80) return { text: "Prop Firm Ready", icon: CheckCircle, color: "text-green-400" }
    if (score >= 70) return { text: "Almost Ready", icon: AlertTriangle, color: "text-yellow-400" }
    if (score >= 50) return { text: "Making Progress", icon: TrendingUp, color: "text-orange-400" }
    return { text: "Getting Started", icon: XCircle, color: "text-red-400" }
  }

  const status = getScoreStatus(readinessScore)
  const StatusIcon = status.icon

  return (
    <>
      <section className="relative py-8 md:py-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-[#00A9E0]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-[#00A9E0]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Content */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Are You <span className="text-[#00A9E0]">Prop Firm Ready?</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl">
                Get a personalized assessment of your trading performance against prop firm evaluation criteria. Know
                exactly where you stand and what to improve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  className="bg-[#00A9E0] hover:bg-[#00A9E0]/80 text-white font-bold text-lg py-7 px-10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,169,224,0.6)]"
                  onClick={() => setIsWaitlistModalOpen(true)}
                >
                  Get Your Score
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 text-white hover:bg-zinc-800 font-medium text-lg py-7 px-10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                {[
                  "Real-time readiness scoring",
                  "Trading style adaptation",
                  "Prop firm requirements matching",
                  "Personalized improvement plan",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-zinc-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle className="h-4 w-4 text-[#00A9E0] flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Score Display */}
            <motion.div
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 p-8 max-w-md w-full">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-6">Sample Readiness Score</h3>

                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="8" />
                      {/* Progress circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={getScoreColor(readinessScore)}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: 251.2 * (1 - readinessScore / 100) }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        style={{
                          filter: `drop-shadow(0 0 8px ${getScoreColor(readinessScore)}40)`,
                        }}
                      />
                    </svg>

                    {/* Score text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        className="text-4xl font-bold text-white mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                      >
                        {readinessScore}%
                      </motion.div>
                      <div className={`flex items-center gap-1 ${status.color}`}>
                        <StatusIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">{status.text}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick metrics */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-zinc-800/50 rounded-lg p-3">
                      <div className="text-zinc-400">Win Rate</div>
                      <div className="text-white font-semibold">68%</div>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-3">
                      <div className="text-zinc-400">Max Drawdown</div>
                      <div className="text-white font-semibold">-8.2%</div>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-3">
                      <div className="text-zinc-400">Risk:Reward</div>
                      <div className="text-white font-semibold">1:2.1</div>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-3">
                      <div className="text-zinc-400">Consistency</div>
                      <div className="text-white font-semibold">82%</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
