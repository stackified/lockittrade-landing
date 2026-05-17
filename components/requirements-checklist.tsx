"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, XCircle, Eye } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"

interface Requirement {
  id: string
  title: string
  current: string
  target: string
  status: "pass" | "warning" | "fail"
  description: string
}

export function RequirementsChecklist() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const requirements: Requirement[] = [
    {
      id: "drawdown",
      title: "Drawdown Management",
      current: "8.5% max drawdown",
      target: "Under 10% max drawdown",
      status: "pass",
      description: "Your maximum drawdown is within acceptable limits for most prop firms.",
    },
    {
      id: "winrate",
      title: "Win Rate Consistency",
      current: "Varies 50-75% weekly",
      target: "Varies less than 20% weekly",
      status: "warning",
      description: "Your win rate shows some volatility. Work on maintaining more consistent performance.",
    },
    {
      id: "risk",
      title: "Risk Per Trade",
      current: "1.8% average risk",
      target: "1% average risk per trade",
      status: "warning",
      description: "Consider reducing your risk per trade to meet stricter prop firm requirements.",
    },
    {
      id: "compliance",
      title: "Plan Compliance",
      current: "77% compliant",
      target: "85% plan compliance",
      status: "warning",
      description: "Improve adherence to your trading plan for better consistency and discipline.",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return (
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
          </div>
        )
      case "warning":
        return (
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
            <AlertTriangle className="h-3.5 w-3.5 text-yellow-400" />
          </div>
        )
      case "fail":
        return (
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <XCircle className="h-3.5 w-3.5 text-red-400" />
          </div>
        )
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pass":
        return "bg-emerald-500/[0.02] border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/[0.04] shadow-[0_0_20px_rgba(16,185,129,0.015)]"
      case "warning":
        return "bg-yellow-500/[0.02] border-yellow-500/20 hover:border-yellow-500/40 hover:bg-yellow-500/[0.04] shadow-[0_0_20px_rgba(234,179,8,0.015)]"
      case "fail":
        return "bg-red-500/[0.02] border-red-500/20 hover:border-red-500/40 hover:bg-red-500/[0.04] shadow-[0_0_20px_rgba(239,68,68,0.015)]"
      default:
        return "bg-white/[0.02] border-white/[0.08]"
    }
  }

  const passCount = requirements.filter((r) => r.status === "pass").length
  const totalCount = requirements.length

  return (
    <>
      <section className="py-12 md:py-16 bg-black relative overflow-hidden">
        {/* Ambient glow wrapper */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#00A9E0]/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Prop Firm <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.3)]">Requirements</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
              Check how you measure against typical prop firm evaluation criteria.
            </p>

            {/* Progress indicator */}
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Progress:</span>
              <span className="text-[#00A9E0] font-extrabold text-xs tracking-tight bg-[#00A9E0]/10 border border-[#00A9E0]/20 rounded-md px-2 py-0.5 shadow-[0_0_8px_rgba(0,169,224,0.15)]">
                {passCount}/{totalCount}
              </span>
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">requirements met</span>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4.5 mb-12">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${getStatusColor(req.status)}`}>
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5">{getStatusIcon(req.status)}</div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg tracking-tight mb-2.5">{req.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 mb-3 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-zinc-500 font-semibold uppercase text-[10px] tracking-wider">Current:</span>
                            <span className="text-white font-medium">{req.current}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-zinc-500 font-semibold uppercase text-[10px] tracking-wider">Target:</span>
                            <span className="text-[#00A9E0] font-medium">{req.target}</span>
                          </div>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">{req.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center relative rounded-3xl border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-xl p-8 md:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background ambient glow inside CTA card */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/5 h-20 bg-[#00A9E0]/15 blur-[40px] rounded-[100%] pointer-events-none" />

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">Ready to Improve Your Score?</h3>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Get personalized recommendations and track your progress with Lock It Trade&apos;s comprehensive prop firm readiness system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Button
                  size="lg"
                  className="bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white font-bold text-base h-14 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,169,224,0.5)]"
                  onClick={() => (window.location.href = "https://app.lockittrade.com/signup")}
                >
                  Start for free
                </Button>
                <Button
                  size="lg"
                  className="border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 font-semibold text-base h-14 px-8 rounded-full bg-transparent transition-all duration-300 hover:scale-105"
                  onClick={() => setShowModal(true)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Full Requirements
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-black/75 backdrop-blur-md" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)} 
            />
            <motion.div 
              className="relative bg-[#0d0d0d]/90 border border-white/[0.08] backdrop-blur-2xl rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/10 z-10"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Prop Firm Requirements</h3>
                <button 
                  className="text-zinc-500 hover:text-white transition-colors duration-200 p-1.5 hover:bg-white/5 rounded-full"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-lg">✕</span>
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
                  You&apos;re making good progress! Here&apos;s what you still need to improve to be ready for prop firm evaluation:
                </p>

                {requirements.map((req) => (
                  <div key={req.id} className={`p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${getStatusColor(req.status)}`}>
                    <div className="flex items-center gap-3 mb-3">
                      {getStatusIcon(req.status)}
                      <h4 className="text-white font-bold text-base tracking-tight">{req.title}</h4>
                    </div>
                    <div className="ml-9 flex flex-wrap items-center gap-x-6 gap-y-1.5 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 font-semibold uppercase text-[10px] tracking-wider">Current:</span>
                        <span className="text-white font-medium">{req.current}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 font-semibold uppercase text-[10px] tracking-wider">Target:</span>
                        <span className="text-[#00A9E0] font-medium">{req.target}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Focus on these areas to improve your readiness score. Check the Trading Health recommendations for specific actions.
                  </p>
                </div>
              </div>

              <Button
                className="w-full mt-6 bg-white hover:bg-zinc-200 text-black font-semibold rounded-full h-12 transition-all duration-300"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
