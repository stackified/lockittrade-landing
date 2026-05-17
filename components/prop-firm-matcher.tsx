"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, ExternalLink, Star } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { getAssetPath } from "@/lib/utils"

interface PropFirm {
  id: string
  name: string
  logo: string
  compatibility: number
  requirements: {
    maxDrawdown: number
    minWinRate: number
    maxDailyLoss: number
    tradingDays: number
  }
  features: string[]
  challenge: {
    price: number
    accountSize: number
    profitTarget: number
  }
  status: "excellent" | "good" | "fair" | "poor"
}

export function PropFirmMatcher() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  const propFirms: PropFirm[] = [
    {
      id: "ftmo",
      name: "FTMO",
      logo: getAssetPath("/logos/ftmo.png"),
      compatibility: 85,
      requirements: {
        maxDrawdown: 10,
        minWinRate: 0,
        maxDailyLoss: 5,
        tradingDays: 10,
      },
      features: ["Bi-weekly payouts", "Up to 90% profit split", "Free retries"],
      challenge: {
        price: 155,
        accountSize: 10000,
        profitTarget: 10,
      },
      status: "excellent",
    },
    {
      id: "topstep",
      name: "TopStep",
      logo: getAssetPath("/logos/topstep.png"),
      compatibility: 75,
      requirements: {
        maxDrawdown: 6,
        minWinRate: 0,
        maxDailyLoss: 3,
        tradingDays: 8,
      },
      features: ["Futures trading", "Up to 90% profit split", "Express evaluation"],
      challenge: {
        price: 165,
        accountSize: 50000,
        profitTarget: 6,
      },
      status: "good",
    },
    {
      id: "the5ers",
      name: "The5%ers",
      logo: getAssetPath("/logos/the5%25ers.png"),
      compatibility: 65,
      requirements: {
        maxDrawdown: 6,
        minWinRate: 50,
        maxDailyLoss: 3,
        tradingDays: 15,
      },
      features: ["Aggressive scaling", "Up to 100% profit split", "Bootcamp included"],
      challenge: {
        price: 230,
        accountSize: 20000,
        profitTarget: 12,
      },
      status: "fair",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]"
      case "good":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.15)]"
      case "fair":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.15)]"
      case "poor":
        return "bg-red-500/10 text-red-400 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.15)]"
      default:
        return "bg-white/5 text-zinc-400 border-white/10"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "excellent":
        return "Excellent Match"
      case "good":
        return "Good Match"
      case "fair":
        return "Fair Match"
      case "poor":
        return "Poor Match"
      default:
        return "Unknown"
    }
  }

  return (
    <>
      <section className="py-12 md:py-16 bg-black relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#9C5FFF]/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Prop Firm <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.3)]">Matcher</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Based on your trading performance, here are the prop firms that best match your profile.
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-6xl mx-auto mb-16">
            {propFirms.map((firm, index) => (
              <motion.div
                key={firm.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-3xl border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 overflow-hidden group">
                  {/* Glass sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

                  <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                    {/* Left side - Firm info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="p-1 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center h-14 w-32 overflow-hidden backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                          <img 
                            src={firm.logo || getAssetPath("/placeholder.svg")} 
                            alt={`${firm.name} logo`} 
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                          />
                        </div>
                        <div>
                          <h3 className="text-white font-extrabold text-xl tracking-tight mb-1">{firm.name}</h3>
                          <Badge className={`${getStatusColor(firm.status)} border rounded-full text-xs font-semibold px-2.5 py-0.5 pointer-events-none`}>
                            {getStatusText(firm.status)}
                          </Badge>
                        </div>
                      </div>

                      {/* Compatibility score */}
                      <div className="mb-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Compatibility</span>
                          <span className="text-[#00A9E0] font-extrabold text-sm tracking-tight">{firm.compatibility}%</span>
                        </div>
                        <div className="w-full bg-white/[0.03] border border-white/[0.05] rounded-full h-2">
                          <motion.div
                            className="bg-[#00A9E0] h-2 rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${firm.compatibility}%`,
                              boxShadow: "0 0 10px rgba(0,169,224,0.6)"
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${firm.compatibility}%` }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Challenge info */}
                      <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4">
                        <div className="text-xs space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-zinc-500 font-semibold uppercase text-[10px] tracking-wider">Challenge Price:</span>
                            <span className="text-white font-bold">${firm.challenge.price}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-zinc-500 font-semibold uppercase text-[10px] tracking-wider">Account Size:</span>
                            <span className="text-white font-bold">${firm.challenge.accountSize.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-zinc-500 font-semibold uppercase text-[10px] tracking-wider">Profit Target:</span>
                            <span className="text-white font-bold">{firm.challenge.profitTarget}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle - Requirements */}
                    <div className="lg:w-1/3 flex flex-col justify-center">
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 opacity-80">Requirements Match</h4>
                      <div className="space-y-3.5 bg-white/[0.01] border border-white/[0.03] rounded-2xl p-4.5">
                        {[
                          { label: "Max Drawdown", value: `${firm.requirements.maxDrawdown}%`, ok: 8.5 <= firm.requirements.maxDrawdown },
                          { label: "Min Win Rate", value: `${firm.requirements.minWinRate}%`, ok: 68 >= firm.requirements.minWinRate },
                          { label: "Max Daily Loss", value: `${firm.requirements.maxDailyLoss}%`, ok: 3.2 <= firm.requirements.maxDailyLoss },
                          { label: "Min Trading Days", value: `${firm.requirements.tradingDays}`, ok: 12 >= firm.requirements.tradingDays }
                        ].map((req, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-zinc-400 font-medium">{req.label}:</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold">{req.value}</span>
                              {req.ok ? (
                                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                              ) : (
                                <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right side - Features & CTA */}
                    <div className="lg:w-1/3 flex flex-col justify-between">
                      <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 opacity-80">Key Features</h4>
                        <ul className="space-y-2.5 mb-6">
                          {firm.features.map((feature, idx) => (
                            <li key={idx} className="text-zinc-300 text-sm flex items-center gap-2.5">
                              <Star className="h-3.5 w-3.5 text-[#00A9E0] flex-shrink-0" />
                              <span className="font-semibold">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-white/[0.03] border border-white/10 text-zinc-500 cursor-not-allowed rounded-full h-11 text-xs font-bold uppercase tracking-wider" size="sm" disabled>
                          <ExternalLink className="h-3.5 w-3.5 mr-2" />
                          Visit {firm.name}
                        </Button>
                        <Button
                          className="w-full border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 bg-transparent rounded-full h-11 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                          size="sm"
                        >
                          Compare Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-xl p-8 md:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/10 max-w-3xl mx-auto overflow-hidden">
              {/* Background ambient glow inside CTA card */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/5 h-20 bg-[#00A9E0]/15 blur-[40px] rounded-[100%] pointer-events-none" />

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">Get Personalized Recommendations</h3>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Join Lock It Trade to get real-time prop firm matching based on your actual trading performance.
              </p>
              <Button
                size="lg"
                className="bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white font-bold text-base h-14 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,169,224,0.5)]"
                onClick={() => (window.location.href = "https://app.lockittrade.com/signup")}
              >
                Start for free
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
