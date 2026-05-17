"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, ExternalLink, Star } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"

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
      logo: "/placeholder.svg?height=40&width=120",
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
      logo: "/placeholder.svg?height=40&width=120",
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
      logo: "/placeholder.svg?height=40&width=120",
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
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "good":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "fair":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "poor":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container max-w-screen-xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prop Firm Matcher</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Based on your trading performance, here are the prop firms that best match your profile.
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-6xl mx-auto">
            {propFirms.map((firm, index) => (
              <motion.div
                key={firm.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 p-6 hover:border-zinc-700 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left side - Firm info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <img src={firm.logo || "/placeholder.svg"} alt={`${firm.name} logo`} className="h-10 w-auto" />
                        <div>
                          <h3 className="text-white font-semibold text-lg">{firm.name}</h3>
                          <Badge className={`${getStatusColor(firm.status)} border`}>
                            {getStatusText(firm.status)}
                          </Badge>
                        </div>
                      </div>

                      {/* Compatibility score */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zinc-400 text-sm">Compatibility</span>
                          <span className="text-[#00A9E0] font-semibold">{firm.compatibility}%</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-2">
                          <div
                            className="bg-[#00A9E0] h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${firm.compatibility}%` }}
                          />
                        </div>
                      </div>

                      {/* Challenge info */}
                      <div className="bg-zinc-800/30 rounded-lg p-3">
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Challenge Price:</span>
                            <span className="text-white">${firm.challenge.price}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Account Size:</span>
                            <span className="text-white">${firm.challenge.accountSize.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Profit Target:</span>
                            <span className="text-white">{firm.challenge.profitTarget}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle - Requirements */}
                    <div className="lg:w-1/3">
                      <h4 className="text-white font-medium mb-3">Requirements</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zinc-400">Max Drawdown:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-white">{firm.requirements.maxDrawdown}%</span>
                            {8.5 <= firm.requirements.maxDrawdown ? (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-400" />
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zinc-400">Min Win Rate:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-white">{firm.requirements.minWinRate}%</span>
                            {68 >= firm.requirements.minWinRate ? (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-400" />
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zinc-400">Max Daily Loss:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-white">{firm.requirements.maxDailyLoss}%</span>
                            {3.2 <= firm.requirements.maxDailyLoss ? (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-400" />
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zinc-400">Min Trading Days:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-white">{firm.requirements.tradingDays}</span>
                            {12 >= firm.requirements.tradingDays ? (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Features & CTA */}
                    <div className="lg:w-1/3">
                      <h4 className="text-white font-medium mb-3">Key Features</h4>
                      <ul className="space-y-1 mb-4">
                        {firm.features.map((feature, idx) => (
                          <li key={idx} className="text-zinc-300 text-sm flex items-center gap-2">
                            <Star className="h-3 w-3 text-[#00A9E0] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-2">
                        <Button className="w-full bg-zinc-700 text-zinc-400 cursor-not-allowed" size="sm" disabled>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit {firm.name}
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                          size="sm"
                        >
                          Compare Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Get Personalized Recommendations</h3>
              <p className="text-zinc-400 mb-6">
                Join Lock It Trade to get real-time prop firm matching based on your actual trading performance.
              </p>
              <Button
                size="lg"
                className="bg-[#00A9E0] hover:bg-[#00A9E0]/80 text-white font-medium px-8 py-6 text-lg"
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
