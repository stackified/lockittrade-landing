"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TradingCards } from "@/components/trading-cards"
import { ParticleBackground } from "@/components/particle-background"
import { AIGridBackground } from "@/components/ai-grid-background"
import { PoweredByOpenAI } from "@/components/powered-by-openai"
import { WaitlistModal } from "@/components/waitlist-modal"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <>
      <section className="relative overflow-hidden bg-black min-h-[100vh] flex items-center pt-32 pb-20">
        {/* Background Components */}
        <AIGridBackground />
        <ParticleBackground />

        {/* Huge Ambient Glow in Center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-[#00A9E0]/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-2xl mx-auto px-4 relative z-10">
          <motion.div 
            className="flex flex-col items-center text-center max-w-6xl mx-auto"
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 sm:mb-12 hover:bg-white/[0.05] transition-colors cursor-pointer"
              onClick={() => setIsWaitlistModalOpen(true)}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#00A9E0] shadow-[0_0_8px_#00A9E0]"></span>
              <span className="text-zinc-300 text-sm font-medium">LockItTrade Enterprise is Now Live</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </motion.div>

            {/* Main Typography */}
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Smartest <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.4)]">
                AI Trading Journal
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Built for prop firm traders and serious professionals. Master your edge with an AI Trading Coach that automatically journals, analyzes, and protects your capital.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16 md:mb-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white font-bold text-lg h-14 px-10 w-full sm:w-auto rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,169,224,0.5)]"
                onClick={() => (window.location.href = "https://app.lockittrade.com/signup")}
              >
                START FOR FREE
              </Button>
            </motion.div>

            {/* 3D Dashboard Mockup Presentation */}
            <motion.div
              className="w-full max-w-6xl mx-auto relative perspective-1000"
              initial={{ opacity: 0, y: 100, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.8, type: "spring", damping: 20 }}
            >
              {/* Container for the UI representation */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/10] rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-xl overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/10 group">
                
                {/* Header bar of the mock window */}
                <div className="absolute top-0 left-0 right-0 h-10 md:h-12 bg-black/40 border-b border-white/[0.05] flex items-center px-4 md:px-6 z-20">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
                     <span className="text-[10px] md:text-xs text-white/50 font-medium tracking-widest uppercase">LockItTrade Dashboard Overview</span>
                  </div>
                </div>

                {/* Content Area - Rendering the Trading Cards slightly scaled */}
                <div className="absolute inset-0 pt-12 md:pt-16 pb-4 px-4 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full transform scale-90 sm:scale-95 md:scale-100 origin-center transition-transform duration-700 group-hover:scale-105">
                      <TradingCards />
                    </div>
                </div>
                
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Epic Ground shadow */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-[#00A9E0]/30 blur-[80px] rounded-[100%] pointer-events-none" />
            </motion.div>
            
            <motion.div
              className="mt-8 md:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <PoweredByOpenAI />
            </motion.div>

          </motion.div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
