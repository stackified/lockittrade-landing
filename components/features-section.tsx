"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FeatureCard } from "@/components/feature-card"
import { PoweredByOpenAI } from "@/components/powered-by-openai"
import { AlertTriangle, Scale, Brain, Clock, ClipboardCheck, Flame } from "lucide-react"

// Feature data with Lucide icons
const features = [
  {
    id: 1,
    icon: AlertTriangle,
    title: "Violation Tracker",
    description: "Automatically flags rule breaches so you don&apos;t lose your prop firm challenge.",
  },
  {
    id: 2,
    icon: Scale,
    title: "Risk:Reward Analyzer",
    description: "Breaks down each trade&apos;s R:R so you can adjust before it costs you.",
  },
  {
    id: 3,
    icon: Brain,
    title: "AI Readiness Score",
    description: "Shows how close you are to getting funded — live and automated.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Session Filters",
    description: "View win rates across NY, London, and Asian sessions.",
  },
  {
    id: 5,
    icon: ClipboardCheck,
    title: "Strategy Compliance",
    description: "Check if you&apos;re actually following your plan or winging it.",
  },
  {
    id: 6,
    icon: Flame,
    title: "Trade Streak Insights",
    description: "Visualize win/loss streaks and manage your trading psychology.",
  },
]

export function FeaturesSection() {
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

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section
      id="features"
      className="relative bg-gradient-to-b from-zinc-900 to-[#0a0e17] py-16 md:py-24 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-[#00A9E0]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-[#00A9E0]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle geometric elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 border border-[#00A9E0]/30 rounded-full"></div>
        <div className="absolute top-40 left-[15%] w-32 h-32 border border-[#00A9E0]/20 rounded-full"></div>
        <div className="absolute bottom-40 right-[15%] w-80 h-80 border border-[#00A9E0]/20 rounded-full"></div>
        <div className="absolute top-60 right-[20%] w-40 h-40 border border-[#00A9E0]/30 rounded-full"></div>

        {/* Circuit-like lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 Q250,150 500,100 T1000,100"
            stroke="#00A9E0"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            fill="none"
          />
          <path
            d="M100,0 Q150,250 100,500 T100,1000"
            stroke="#00A9E0"
            strokeWidth="0.5"
            strokeOpacity="0.15"
            fill="none"
          />
          <path
            d="M1000,200 Q750,250 500,200 T0,200"
            stroke="#00A9E0"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Powerful Features for Serious Traders
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Lock It Trade provides the tools you need to analyze your performance, identify strengths, and get ready for
            funding.
          </p>
        </motion.div>

        {/* OpenAI Badge */}
        <PoweredByOpenAI />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
