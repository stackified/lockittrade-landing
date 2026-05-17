"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
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
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />
      case "fail":
        return <XCircle className="h-5 w-5 text-red-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pass":
        return "border-green-500/20 bg-green-500/5"
      case "warning":
        return "border-yellow-500/20 bg-yellow-500/5"
      case "fail":
        return "border-red-500/20 bg-red-500/5"
      default:
        return "border-zinc-800/50 bg-zinc-900/50"
    }
  }

  const passCount = requirements.filter((r) => r.status === "pass").length
  const totalCount = requirements.length

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container max-w-screen-xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prop Firm Requirements</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
              Check how you measure against typical prop firm evaluation criteria.
            </p>

            {/* Progress indicator */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/50 rounded-full px-4 py-2">
              <span className="text-zinc-400 text-sm">Progress:</span>
              <span className="text-[#00A9E0] font-semibold">
                {passCount}/{totalCount}
              </span>
              <span className="text-zinc-400 text-sm">requirements met</span>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4 mb-8">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-6 ${getStatusColor(req.status)} border backdrop-blur-sm`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">{getStatusIcon(req.status)}</div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-lg mb-2">{req.title}</h3>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-zinc-400 text-sm">Current:</span>
                              <span className="text-white text-sm">{req.current}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-zinc-400 text-sm">Target:</span>
                              <span className="text-[#00A9E0] text-sm">{req.target}</span>
                            </div>
                          </div>
                          <p className="text-zinc-300 text-sm mt-3">{req.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Improve Your Score?</h3>
              <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                Get personalized recommendations and track your progress with Lock It Trade&apos;s comprehensive prop firm
                readiness system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#00A9E0] hover:bg-[#00A9E0]/80 text-white font-medium px-8 py-6 text-lg"
                  onClick={() => (window.location.href = "https://app.lockittrade.com/signup")}
                >
                  Start for free
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 text-white hover:bg-zinc-800 font-medium px-8 py-6 text-lg bg-transparent"
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
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Prop Firm Requirements</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowModal(false)}>
                ✕
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-zinc-400 text-sm mb-4">
                You&apos;re making good progress! Here&apos;s what you still need to improve to be ready for prop firm evaluation:
              </p>

              {requirements.map((req) => (
                <div key={req.id} className={`p-4 rounded-lg border ${getStatusColor(req.status)}`}>
                  <div className="flex items-center gap-3 mb-2">
                    {getStatusIcon(req.status)}
                    <h4 className="text-white font-medium">{req.title}</h4>
                  </div>
                  <div className="ml-8 space-y-1">
                    <div className="text-sm">
                      <span className="text-zinc-400">Current:</span>
                      <span className="text-white ml-2">{req.current}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-zinc-400">Target:</span>
                      <span className="text-[#00A9E0] ml-2">{req.target}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-zinc-800/30 rounded-lg">
                <p className="text-zinc-300 text-sm">
                  Focus on these areas to improve your readiness score. Check the Trading Health recommendations for
                  specific actions.
                </p>
              </div>
            </div>

            <Button
              className="w-full mt-6 bg-zinc-800 hover:bg-zinc-700 text-white"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
