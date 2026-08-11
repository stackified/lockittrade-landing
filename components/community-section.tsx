"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { AIGridBackground } from "@/components/ai-grid-background"
import { WaitlistModal } from "@/components/waitlist-modal"
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion"
import { Star, MessageCircle, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex M.",
    role: "Funded Trader",
    content: "LockItTrade completely changed my risk management. I used to blow accounts; now I've been consistently funded for 6 months.",
    initials: "AM",
    color: "bg-blue-500",
  },
  {
    name: "Sarah J.",
    role: "Swing Trader",
    content: "The AI Coach caught my revenge trading habit before I even realized I was doing it. Best investment for my trading career.",
    initials: "SJ",
    color: "bg-purple-500",
  },
  {
    name: "David K.",
    role: "Intraday Pro",
    content: "No more messy spreadsheets. The strategy compliance feature ensures every trade I take matches my rulebook exactly.",
    initials: "DK",
    color: "bg-green-500",
  },
  {
    name: "Elena R.",
    role: "Prop Firm Candidate",
    content: "Passed my evaluation thanks to the Readiness Score. It told me exactly when my stats were solid enough to take the test.",
    initials: "ER",
    color: "bg-orange-500",
  },
  {
    name: "Michael T.",
    role: "Full-time Trader",
    content: "The Discord community is top-tier. Real professionals sharing real insights, paired with the best journaling tech out there.",
    initials: "MT",
    color: "bg-red-500",
  },
  {
    name: "Sophie W.",
    role: "Scalper",
    content: "Lightning fast dashboard. I can review my trades instantly. The violation tracker has saved me thousands in potential drawdown.",
    initials: "SW",
    color: "bg-[#00A9E0]",
  },
]

export function CommunitySection() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  // Track whether the carousel is on-screen so we can pause the rAF loop.
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    // Only animate while visible, not hovered, and motion is allowed.
    if (!container || isHovered || !isVisible || reducedMotion) return

    let animationFrameId: number

    const scroll = () => {
      if (container) {
        container.scrollLeft += 0.1
        // Seamless loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered, isVisible, reducedMotion])

  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden bg-black">
        {/* Background Components */}
        <AIGridBackground />
        <ParticleBackground />

        {/* Huge Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[#00A9E0]/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div
            className="text-center mb-16 sm:mb-24 animate-fade-in-up"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A9E0]/10 border border-[#00A9E0]/20 text-[#00A9E0] text-sm font-medium mb-6">
              <MessageCircle size={16} />
              The Community
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Join a <span className="text-[#00A9E0]">Growing Community</span> of Traders.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              From journaling wins to learning from live calls and bootcamps, traders inside the LockItTrade Discord are scaling together.
            </p>
          </div>

          {/* Horizontally Scrollable Testimonials */}
          <div className="relative max-w-6xl mx-auto mb-20">
             {/* Left/Right Fade Masks */}
             <div className="absolute top-0 left-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
             <div className="absolute top-0 right-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

             {/* Scrollable Container */}
             <div 
               ref={scrollContainerRef}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               onTouchStart={() => setIsHovered(true)}
               onTouchEnd={() => setIsHovered(false)}
               className="flex gap-6 overflow-x-auto pb-6 pt-2 px-4 md:px-8 [&::-webkit-scrollbar]:hidden" 
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
                {[...testimonials, ...testimonials].map((testimonial, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[400px] glass-panel p-6 sm:p-8 rounded-[2rem] border border-white/5 bg-black/40 backdrop-blur-md relative group cursor-grab active:cursor-grabbing">
                    <Quote className="absolute top-6 right-6 text-white/5 w-8 h-8 group-hover:text-[#00A9E0]/20 transition-colors duration-300" />
                    
                    <div className="flex items-center gap-4 mb-6">
                       <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}>
                         {testimonial.initials}
                       </div>
                       <div>
                         <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                         <p className="text-[#00A9E0] text-sm">{testimonial.role}</p>
                       </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                         <Star key={i} className="w-4 h-4 fill-[#00A9E0] text-[#00A9E0]" />
                      ))}
                    </div>

                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                ))}
             </div>
          </div>

          {/* Metrics Row */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
             {[
               { number: "75K+", label: "Trades Analyzed" },
               { number: "500+", label: "Active Traders" },
               { number: "$100K+", label: "Capital Protected" }
             ].map((metric, i) => (
               <div key={i} className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-8 rounded-[2rem] text-center hover:bg-white/[0.04] transition-colors">
                 <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-2">{metric.number}</div>
                 <div className="text-zinc-400 font-medium">{metric.label}</div>
               </div>
             ))}
          </div>

          <div
            className="text-center animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button
              size="lg"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_30px_rgba(88,101,242,0.3)] hover:scale-105 transition-all"
              onClick={() => window.open("https://discord.gg/n4bpHRwaMF", "_blank")}
            >
              Join the Discord
            </Button>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}

export default CommunitySection

