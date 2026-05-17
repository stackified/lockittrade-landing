"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Zap } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"

interface PricingPlan {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  icon: any
  features: string[]
  limitations?: string[]
  popular?: boolean
  free?: boolean
}

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false)
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  const plans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for new traders getting started with journaling",
      price: {
        monthly: 0,
        yearly: 0,
      },
      icon: Zap,
      free: true,
      features: [
        "Up to 100 trades per month",
        "MT4/MT5 broker sync",
        "Trading Plan Builder",
        "Strategy Builder",
        "Compliance Tracker",
        "Basic performance analytics",
        "Win rate tracking",
        "Simple risk metrics",
        "Mobile app access",
        "Email support",
      ],
      limitations: [
        "No Prop Firm Ready Score",
        "No AI Chat & Strategy Insights",
        "No unlimited trades (100 trade limit)",
        "Basic reporting only",
      ],
    },
    {
      id: "professional",
      name: "Trader+",
      description: "For serious traders ready to level up their game",
      price: {
        monthly: 39,
        yearly: 29, // $349/year = ~$29/month
      },
      icon: Star,
      popular: true,
      features: [
        "Unlimited trades (no monthly limit)",
        "AI Chat & Strategy Insights",
        "MT4/MT5 broker sync",
        "Prop Firm Ready Score",
        "Trading Plan Builder",
        "Strategy Builder",
        "Compliance Tracker",
        "Advanced performance analytics",
        "Priority support",
        "All future premium features",
      ],
      limitations: ["None — full access to all features"],
    },
  ]

  const getYearlySavings = (plan: PricingPlan) => {
    if (plan.id === "professional") {
      const monthlyCost = plan.price.monthly * 12 // $39 * 12 = $468
      const yearlyCost = 349
      return monthlyCost - yearlyCost
    }
    const monthlyCost = plan.price.monthly * 12
    const yearlyCost = plan.price.yearly * 12
    return monthlyCost - yearlyCost
  }

  const getStripeLink = (planId: string) => {
    if (planId === "starter") {
      return "https://app.lockittrade.com/signup"
    }
    if (planId === "professional") {
      return isYearly
        ? "https://buy.stripe.com/7sYeVe70x2Hw8fGdY41Jm01" // Yearly link
        : "https://buy.stripe.com/7sYaEY4Spa9YcvW5ry1Jm00" // Monthly link
    }
    return "https://app.lockittrade.com/signup"
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* Billing Toggle */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-full p-1 flex items-center">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isYearly ? "bg-[#00A9E0] text-white shadow-lg" : "text-zinc-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  isYearly ? "bg-[#00A9E0] text-white shadow-lg" : "text-zinc-400 hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards - Normal padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              const currentPrice = isYearly ? plan.price.yearly : plan.price.monthly
              const savings = getYearlySavings(plan)

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card
                    className={`h-full p-8 relative overflow-hidden transition-all duration-300 ${
                      plan.popular
                        ? "bg-zinc-900/90 border-[#00A9E0]/50 shadow-[0_0_30px_rgba(0,169,224,0.15)] scale-105"
                        : "bg-zinc-900/90 border-zinc-800/50 hover:border-zinc-700"
                    }`}
                  >
                    {/* Header - Simplified without badge */}
                    <div className="text-center mb-8">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                          plan.popular ? "bg-[#00A9E0]/20 text-[#00A9E0]" : "bg-zinc-800/50 text-white"
                        }`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>

                      {/* Pricing */}
                      <div className="mb-6">
                        {plan.free ? (
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-white">Free</span>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-4xl font-bold text-white">${currentPrice}</span>
                              <span className="text-zinc-400">/month</span>
                            </div>
                            {isYearly && savings > 0 && (
                              <p className="text-green-400 text-sm mt-2">Save ${savings}/year</p>
                            )}
                            {!isYearly && (
                              <p className="text-zinc-500 text-sm mt-2">
                                or $349/year (save ${getYearlySavings(plan)}/year)
                              </p>
                            )}
                          </>
                        )}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-6 text-lg font-medium transition-all duration-300 ${
                          plan.popular
                            ? "bg-[#00A9E0] hover:bg-[#00A9E0] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(0,169,224,0.5)]"
                            : plan.free
                              ? "bg-green-600 hover:bg-green-700 text-white hover:scale-105"
                              : "bg-zinc-800 hover:bg-zinc-700 text-white"
                        }`}
                        onClick={() => (window.location.href = getStripeLink(plan.id))}
                      >
                        {plan.free ? "Start for free" : "Get Started"}
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">What&apos;s included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#00A9E0] flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Limitations */}
                      {plan.limitations && (
                        <div className="pt-4 border-t border-zinc-800/50">
                          <h5 className="font-medium text-zinc-400 text-sm mb-2">Limitations:</h5>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="flex items-start gap-3">
                                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                                </div>
                                <span className="text-zinc-500 text-sm">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Enterprise CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
              <p className="text-zinc-400 mb-6">
                Prop firms, brokers, and trading organizations can get custom pricing and features.
              </p>
              <Button
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
                onClick={() => window.open("/enterprise", "_blank")}
              >
                Contact Enterprise Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
