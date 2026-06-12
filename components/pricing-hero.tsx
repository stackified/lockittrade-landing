"use client"

import { motion } from "framer-motion"
import { ParticleBackground } from "@/components/particle-background"
import { AIGridBackground } from "@/components/ai-grid-background"
import { CheckCircle } from "lucide-react"

export function PricingHero() {
  const benefits = [
    "No setup fees or hidden costs",
    "Cancel anytime, no questions asked",
    "14-day free trial for all plans",
    "24/7 priority support included",
  ]

  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-black">
      {/* Background effects */}
      <AIGridBackground />
      <ParticleBackground />

      {/* Hero ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-[#00A9E0]/[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pill badge */}
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 hover:bg-white/[0.05] transition-colors cursor-pointer justify-center"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#00A9E0] shadow-[0_0_8px_#00A9E0]"></span>
            <span className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">Flexible Pricing Plans</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.05]"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple, Transparent <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.35)]">Pricing</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose the plan that fits your trading journey. From beginners to prop firm professionals, we have the right
            tools to help you succeed.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-zinc-300 bg-white/[0.02] border border-white/[0.05] p-4.5 rounded-2xl backdrop-blur-sm"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-emerald-400" />
                </div>
                <span className="text-sm md:text-base font-semibold tracking-tight">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
