"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { getAssetPath } from "@/lib/utils"

const brokers = [
  { name: "MetaTrader 4", logo: getAssetPath("/logos/mt4.png") },
  { name: "MetaTrader 5", logo: getAssetPath("/logos/mt5.png") },
  { name: "TradeLocker", logo: getAssetPath("/logos/tradelocker.png") },
  { name: "NinjaTrader", logo: getAssetPath("/logos/ninjatrader.png") },
  { name: "Tradovate", logo: getAssetPath("/logos/tradovate.png") },
]

export function BrokerLogos() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="relative pt-12 pb-4 md:pt-16 md:pb-8 bg-black overflow-hidden">
      {/* Seamless Top Gradient Blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
      {/* Soft Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#00A9E0]/[0.02] blur-[40px] pointer-events-none" />
      
      {/* Bottom border only */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <motion.div
        className="container max-w-screen-xl mx-auto px-4 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-zinc-500 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-center">
          Seamless Integration with Your Favorite Platforms
        </p>
      </motion.div>
      
      {/* Marquee container with edge fades */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-x-hidden">
          <div className="flex animate-marquee py-4 whitespace-nowrap">
            {[...brokers, ...brokers, ...brokers].map((broker, i) => (
              <div
                key={i}
                className="mx-6 sm:mx-10 md:mx-14 flex items-center gap-3 md:gap-4 group cursor-default shrink-0"
              >
                <img 
                  src={broker.logo} 
                  alt={broker.name} 
                  className="object-contain h-8 sm:h-12 w-auto rounded-xl opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-zinc-400/60 group-hover:text-white font-bold text-base sm:text-lg tracking-tight transition-colors duration-500">
                  {broker.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
