"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Brain, TrendingUp } from "lucide-react"

export function WhyLockItTradeSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const benefits = [
    {
      icon: CheckCircle,
      title: "Stay Funded",
      description: "Catch violations before they cost your challenge. Our AI monitors your trades in real-time.",
    },
    {
      icon: TrendingUp,
      title: "Trade Smarter",
      description: "Visualize your performance and identify patterns that lead to consistent profitability.",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "No more spreadsheets. Let AI do the journaling while you focus on what matters—trading.",
    },
    {
      icon: Brain,
      title: "Trade with Confidence",
      description: "You&apos;ll always know if you&apos;re following your plan with our Strategy Compliance Monitor.",
    },
  ]

  return (
    <>
      <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-b from-black to-zinc-900">
        {/* Background glow effects */}
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-[#00A9E0]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-[#00A9E0]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            {/* Section Title */}
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white text-center" variants={itemVariants}>
              Why Lock It Trade?
            </motion.h2>

            <motion.p
              className="text-slate-400 max-w-xl mx-auto text-center text-md md:text-lg mt-4 mb-12"
              variants={itemVariants}
            >
              Because traders who follow their edge, win. Lock It Trade helps you master yours.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 hover:border-[#00A9E0]/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, borderColor: "rgba(0, 169, 224, 0.5)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-[#00A9E0]/10 rounded-lg">
                        <benefit.icon className="h-6 w-6 text-[#00A9E0]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-slate-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Final CTA */}
            <motion.div className="text-center" variants={itemVariants}>
              <Button
                size="lg"
                className="bg-[#00A9E0] hover:bg-[#00A9E0]/80 text-white font-semibold px-8 py-7 text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,169,224,0.5)] hover:scale-105"
                asChild
              >
                <a href="https://app.lockittrade.com/signup">Start Free – Get Funded Smarter</a>
              </Button>

              <p className="text-slate-400 text-sm mt-4 max-w-lg mx-auto">
                Join thousands of traders using Lock It Trade to pass challenges, scale accounts, and win with clarity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
