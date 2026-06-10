"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Trophy, Shield, Zap, Target, Star } from "lucide-react"
import { useInView } from "react-intersection-observer"

const journeySteps = [
  { id: 1, icon: Shield, title: "Risk Manager", description: "Consistently risk < 1% per trade for 20 days. Establish the baseline of survival.", color: "#10b981", active: true },
  { id: 2, icon: Target, title: "Precision Sniper", description: "Achieve an average R:R of > 2.5 over 50 trades. Stop guessing, start executing.", color: "#9C5FFF", active: true },
  { id: 3, icon: Zap, title: "Strike King", description: "Maintain a 5-day winning streak in live market conditions.", color: "#f59e0b", active: true },
  { id: 4, icon: Trophy, title: "Elite Funded Pro", description: "Pass your prop firm challenge and secure capital. The ultimate goal.", color: "#00A9E0", active: true },
]

export function GamificationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Map scroll progress to a percentage height for the line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-black via-[#050505] to-black">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#00A9E0]/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A9E0]/10 border border-[#00A9E0]/20 text-[#00A9E0] text-sm font-medium mb-6">
            <Star size={16} />
            The Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Level up your <span className="text-[#00A9E0]">Discipline</span>.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Trading is a game of psychology. LockItTrade gamifies your discipline, rewarding you for following your rules and keeping you engaged through the grind.
          </p>
        </motion.div>

        {/* Vertical Timeline Journey */}
        <div ref={containerRef} className="relative max-w-3xl mx-auto pt-10 pb-10">
          {/* Main vertical line */}
          <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-1 bg-white/[0.05] sm:-translate-x-1/2 rounded-full" />
          
          {/* Animated fill line linked to scroll */}
          <motion.div 
            className="absolute left-[28px] sm:left-1/2 top-0 w-1 bg-gradient-to-b from-[#10b981] via-[#9C5FFF] to-[#00A9E0] sm:-translate-x-1/2 rounded-full"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 sm:space-y-24 relative">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={step.id}
                  className={`relative flex items-center gap-6 sm:gap-12 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div 
                      className={`glass-panel p-6 sm:p-8 rounded-[2rem] border transition-colors duration-500`}
                      style={{ 
                        borderColor: step.active ? `${step.color}40` : 'rgba(255,255,255,0.05)',
                        backgroundColor: step.active ? `${step.color}05` : 'transparent',
                        opacity: step.active ? 1 : 0.5 
                      }}
                    >
                       <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                       <p className="text-zinc-400">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 w-14 h-14 rounded-full border-4 border-black bg-zinc-900 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                     <motion.div 
                       className="absolute inset-0 rounded-full opacity-50"
                       style={{ backgroundColor: step.active ? step.color : 'transparent' }}
                       animate={step.active ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : {}}
                       transition={{ duration: 2, repeat: Infinity }}
                     />
                     <step.icon size={24} style={{ color: step.active ? step.color : '#52525b' }} className="relative z-10" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default GamificationSection

