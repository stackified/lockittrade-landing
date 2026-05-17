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
    <section className="relative py-8 md:py-16 overflow-hidden">
      {/* Background effects */}
      <AIGridBackground />
      <ParticleBackground />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple, Transparent <span className="text-[#00A9E0]">Pricing</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose the plan that fits your trading journey. From beginners to prop firm professionals, we have the right
            tools to help you succeed.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-zinc-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <CheckCircle className="h-5 w-5 text-[#00A9E0] flex-shrink-0" />
                <span className="text-sm md:text-base">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
