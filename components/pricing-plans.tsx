"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Zap } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { getAssetPath } from "@/lib/utils"

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
      <section className="py-12 md:py-16 bg-black relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#00A9E0]/[0.04] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#9C5FFF]/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-16 animate-fade-in-up">
            <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-full p-1.5 flex items-center shadow-[0_4px_24px_rgba(0,0,0,0.5)] relative">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold relative z-10 transition-colors duration-300 ${
                  !isYearly ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                Monthly
                {!isYearly && (
                  <div className="absolute inset-0 bg-[#00A9E0] rounded-full -z-10 shadow-[0_0_15px_rgba(0,169,224,0.4)]" />
                )}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold relative z-10 transition-colors duration-300 ${
                  isYearly ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                Yearly
                {isYearly && (
                  <div className="absolute inset-0 bg-[#00A9E0] rounded-full -z-10 shadow-[0_0_15px_rgba(0,169,224,0.4)]" />
                )}
                <span className="absolute -top-3.5 -right-3 px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] font-black text-black uppercase tracking-wider scale-90 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  Save
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              const currentPrice = isYearly ? plan.price.yearly : plan.price.monthly
              const savings = getYearlySavings(plan)

              return (
                <div
                  key={plan.id}
                  className="relative flex animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-full rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden backdrop-blur-xl ${
                      plan.popular
                        ? "bg-[#0c0c0c]/85 border-[#00A9E0]/50 shadow-[0_30px_100px_-20px_rgba(0,169,224,0.15)] ring-1 ring-[#00A9E0]/20 md:scale-[1.03] z-10"
                        : "bg-[#0a0a0a]/60 border-white/[0.08] hover:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
                    }`}
                  >
                    {/* Corner ambient glow inside the popular card */}
                    {plan.popular && (
                      <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#00A9E0]/15 blur-[30px] rounded-full pointer-events-none" />
                    )}

                    <div>
                      {/* Header */}
                      <div className="text-center mb-8">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 border transition-all duration-300 ${
                            plan.popular 
                              ? "bg-[#00A9E0]/10 border-[#00A9E0]/30 text-[#00A9E0] shadow-[0_0_15px_rgba(0,169,224,0.15)]" 
                              : "bg-white/[0.02] border-white/10 text-white"
                          }`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{plan.name}</h3>
                        <p className="text-zinc-400 text-xs md:text-sm mb-6 max-w-[250px] mx-auto leading-relaxed">{plan.description}</p>

                        {/* Pricing */}
                        <div className="mb-6">
                          {plan.free ? (
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-5xl font-black text-white tracking-tight">Free</span>
                            </div>
                          ) : (
                            <>
                              <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl font-black text-white tracking-tight">${currentPrice}</span>
                                <span className="text-zinc-500 font-semibold text-sm">/month</span>
                              </div>
                              {isYearly && savings > 0 && (
                                <p className="text-emerald-400 text-xs font-bold mt-2.5">Save ${savings}/year</p>
                              )}
                              {!isYearly && (
                                <p className="text-zinc-500 text-xs font-semibold mt-2.5">
                                  or $349/year (save ${getYearlySavings(plan)}/year)
                                </p>
                              )}
                            </>
                          )}
                        </div>

                        {/* CTA Button */}
                        <Button
                          className={`w-full py-6 text-base font-bold transition-all duration-300 rounded-full h-12 ${
                            plan.popular
                              ? "bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white hover:scale-102 hover:shadow-[0_0_30px_rgba(0,169,224,0.4)]"
                              : plan.free
                                ? "bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-102 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                                : "bg-white/10 hover:bg-white/15 text-white"
                          }`}
                          onClick={() => (window.location.href = getStripeLink(plan.id))}
                        >
                          {plan.free ? "Start for free" : "Get Started"}
                        </Button>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider opacity-60">What&apos;s included:</h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3 text-sm">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5">
                                <CheckCircle className="h-3 w-3 text-emerald-400" />
                              </div>
                              <span className="text-zinc-300 font-medium leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Limitations */}
                        {plan.limitations && (
                          <div className="pt-5 mt-5 border-t border-white/[0.08]">
                            <h5 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Limitations:</h5>
                            <ul className="space-y-2.5">
                              {plan.limitations.map((limitation, limitIndex) => (
                                <li key={limitIndex} className="flex items-start gap-3 text-sm">
                                  {plan.popular ? (
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5">
                                      <CheckCircle className="h-3 w-3 text-emerald-400" />
                                    </div>
                                  ) : (
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                                    </div>
                                  )}
                                  <span className={plan.popular ? "text-zinc-300 font-medium" : "text-zinc-500 font-medium leading-tight"}>
                                    {limitation}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enterprise CTA */}
          <div
            className="text-center mt-20 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative rounded-3xl border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-xl p-8 md:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/10 max-w-2xl mx-auto overflow-hidden">
              {/* Background ambient glow inside CTA card */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/5 h-20 bg-[#9C5FFF]/10 blur-[40px] rounded-[100%] pointer-events-none" />

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">Need Something Custom?</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed max-w-lg mx-auto">
                Prop firms, brokers, and trading organizations can get custom pricing and features.
              </p>
              <Button
                className="border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 bg-transparent rounded-full h-12 px-6 font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open("/enterprise", "_blank")}
              >
                Contact Enterprise Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
