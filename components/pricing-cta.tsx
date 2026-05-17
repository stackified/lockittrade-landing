"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"

export function PricingCTA() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  const guarantees = ["14-day free trial", "30-day money-back guarantee", "Cancel anytime", "No setup fees"]

  return (
    <>
      <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
        <ParticleBackground />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Trading?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join thousands of traders who are already using Lock It Trade to improve their performance and get prop
              firm ready.
            </motion.p>

            {/* Guarantees */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-zinc-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-[#00A9E0] flex-shrink-0" />
                  <span className="text-sm">{guarantee}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-[#00A9E0] hover:bg-[#00A9E0] text-white font-bold text-lg py-7 px-10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,169,224,0.6)] group"
                onClick={() => (window.location.href = "https://app.lockittrade.com/signup")}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-800 font-medium text-lg py-7 px-10 bg-transparent"
                onClick={() => window.open("mailto:lockittrade@gmail.com", "_blank")}
              >
                Contact Sales
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-12 pt-8 border-t border-zinc-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#00A9E0] mb-2">10,000+</div>
                  <div className="text-zinc-400 text-sm">Active Traders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00A9E0] mb-2">2,000+</div>
                  <div className="text-zinc-400 text-sm">Funded Traders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00A9E0] mb-2">4.9/5</div>
                  <div className="text-zinc-400 text-sm">User Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Removed WaitlistModal as it's no longer needed */}
    </>
  )
}
