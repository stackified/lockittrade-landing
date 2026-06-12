"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TradingCards } from "@/components/trading-cards"
import { ParticleBackground } from "@/components/particle-background"
import { AIGridBackground } from "@/components/ai-grid-background"
import dynamic from "next/dynamic"
import { PoweredByOpenAI } from "@/components/powered-by-openai"
import { ChevronRight, Play, Star, Users, TrendingUp, Sparkles } from "lucide-react"

// Modals are hidden by default — load their code only when first opened.
const WaitlistModal = dynamic(
  () => import("@/components/waitlist-modal").then((m) => m.WaitlistModal),
  { ssr: false }
)
const VideoModal = dynamic(
  () => import("@/components/video-modal").then((m) => m.VideoModal),
  { ssr: false }
)

export function HeroSection() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
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
          <div 
            className="flex flex-col items-center text-center max-w-6xl mx-auto"
          >
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 sm:mb-12 hover:bg-white/[0.05] transition-colors cursor-pointer animate-fade-in-down"
              style={{ animationDelay: "100ms" }}
              onClick={() => setIsWaitlistModalOpen(true)}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#00A9E0] shadow-[0_0_8px_#00A9E0]"></span>
              <span className="text-zinc-300 text-sm font-medium">LockItTrade Enterprise is Now Live</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </div>
 
            {/* Main Typography */}
            <h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[1.05] mb-8 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              The Smartest <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.4)]">
                AI Trading Journal
              </span>
            </h1>
 
            <p
              className="text-lg md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              Built for prop firm traders and serious professionals. Master your edge with an AI Trading Coach that automatically journals, analyzes, and protects your capital.
            </p>
 
            {/* CTA Group */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-8 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <Button
                size="lg"
                className="bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white font-bold text-lg h-14 px-10 w-full sm:w-auto rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,169,224,0.5)]"
                onClick={() => (window.location.href = "https://app.lockittrade.com/signup")}
              >
                START FOR FREE
              </Button>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center justify-center gap-3 text-zinc-300 hover:text-white font-semibold transition-colors duration-300 h-14 px-4"
              >
                <span className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00A9E0]/20 group-hover:border-[#00A9E0]/40 transition-all duration-300">
                  <Play className="w-4 h-4 text-[#00A9E0] ml-0.5 fill-[#00A9E0]" />
                </span>
                Watch Demo
              </button>
            </div>
 
            {/* Social proof: rating + trader count */}
            <div
              className="flex items-center justify-center mb-16 md:mb-24 animate-fade-in-up"
              style={{ animationDelay: "750ms" }}
            >
              <div className="flex items-center gap-3 sm:gap-4 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i === 4 ? "text-amber-400/80 fill-amber-400/80" : "text-amber-400 fill-amber-400"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-base sm:text-lg">4.8</span>
                  <span className="text-zinc-500 text-sm">/5</span>
                </div>
                <div className="w-px h-5 bg-white/15" />
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A9E0]" />
                  <span className="font-semibold text-zinc-300 text-sm sm:text-base">500+ traders</span>
                </div>
              </div>
            </div>
 
            {/* Dashboard Mockup Presentation */}
            <div
              className="w-full max-w-6xl mx-auto relative animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
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
 
                {/* Content Area - Rendering the Trading Cards scaled down on mobile to prevent clipping */}
                <div className="absolute inset-0 pt-12 md:pt-16 pb-4 px-4 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full transform scale-[0.75] sm:scale-95 md:scale-100 origin-center transition-transform duration-700 group-hover:scale-105">
                      <TradingCards />
                    </div>
                </div>
                
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Widget: AI Rating (top-right) */}
              <motion.div
                className="absolute -top-5 -right-4 lg:-right-10 z-20 hidden md:block"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="px-5 py-4 rounded-2xl backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_50px_rgba(0,169,224,0.15)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00A9E0]/15 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#00A9E0]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500 mb-1">AI Performance Score</p>
                      <p className="text-2xl font-bold text-white">
                        92<span className="text-base text-zinc-500">/100</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Widget: Win-rate analysis (bottom-left) */}
              <motion.div
                className="absolute bottom-16 -left-4 lg:-left-12 z-20 hidden md:block"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="px-5 py-4 rounded-2xl backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#00A9E0"
                          strokeWidth="3"
                          strokeDasharray="88"
                          strokeDashoffset="28"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">68%</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500 mb-1">Win Rate Analysis</p>
                      <p className="text-2xl font-bold text-white">68.4%</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Widget: Summary (bottom-right) */}
              <motion.div
                className="absolute bottom-24 -right-2 lg:-right-8 z-20 hidden md:block"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="px-5 py-4 rounded-2xl backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_50px_rgba(16,185,129,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500 mb-1">Monthly Summary</p>
                      <p className="text-2xl font-bold text-emerald-500">+$12,480</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Epic Ground shadow */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-[#00A9E0]/30 blur-[80px] rounded-[100%] pointer-events-none" />
            </div>
            
            <motion.div
              className="mt-8 md:mt-12"
              animate={{}}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <PoweredByOpenAI />
            </motion.div>

          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoId="TWfEwQGkVJ4" />
    </>
  )
}
