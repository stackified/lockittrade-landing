"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Info } from "lucide-react"

interface AIReadinessGaugeProps {
  isActive?: boolean
  targetScore?: number
}

export function AIReadinessGauge({ isActive = false, targetScore = 98 }: AIReadinessGaugeProps) {
  const [currentScore, setCurrentScore] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  // Animate the score when component becomes active
  useEffect(() => {
    if (!isActive) {
      // Reset when not active
      setCurrentScore(0)
      setShowMessage(false)
      return
    }

    const duration = 3000 // 3 seconds
    const steps = 60 // 60 steps for smooth animation
    const increment = targetScore / steps
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const newScore = Math.min(Math.round(step * increment), targetScore)
      setCurrentScore(newScore)

      if (newScore >= targetScore) {
        clearInterval(timer)
        // Show the "prop firm ready" message after a short delay
        setTimeout(() => setShowMessage(true), 500)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isActive, targetScore])

  // Calculate color based on score
  const getColor = (score: number) => {
    if (score <= 30) return "#ef4444" // Red
    if (score <= 70) return "#f59e0b" // Orange/Yellow
    if (score <= 89) return "#84cc16" // Light Green
    return "#22c55e" // Bright Green
  }

  // Calculate stroke dash array for the progress ring
  const radius = 120
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (currentScore / 100) * circumference

  const currentColor = getColor(currentScore)

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Title - Static, no animation */}
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center px-4">
        AI Readiness Score
      </h3>

      {/* Gauge Container - Static container */}
      <div className="relative">
        {/* SVG Ring - Only the progress animates */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 280 280"
          className="transform -rotate-90 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
        >
          {/* Background Circle - Static */}
          <circle cx="140" cy="140" r={radius} fill="none" stroke="#374151" strokeWidth="20" className="opacity-30" />

          {/* Progress Circle - Only this animates */}
          <motion.circle
            cx="140"
            cy="140"
            r={radius}
            fill="none"
            stroke={currentColor}
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: strokeDasharray }}
            animate={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 8px ${currentColor}40)`,
            }}
          />

          {/* Glow Effect - Only this animates */}
          <motion.circle
            cx="140"
            cy="140"
            r={radius}
            fill="none"
            stroke={currentColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: strokeDasharray }}
            animate={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="opacity-60"
            style={{
              filter: `blur(4px)`,
            }}
          />
        </svg>

        {/* Center Content - Static positioning */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Score Number - Static, only number changes */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-1 sm:mb-2">
            {currentScore}
          </div>

          {/* Subtitle - Static */}
          <div className="text-slate-400 text-sm sm:text-base md:text-lg font-medium text-center">Readiness Score</div>
        </div>

        {/* Info Icon - Static */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-700 rounded-full flex items-center justify-center">
            <Info className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Prop Firm Ready Message - Only shows when score reaches target */}
      <AnimatePresence>
        {showMessage && currentScore >= targetScore && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.8 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="mt-4 md:mt-6 w-full max-w-[80%]"
          >
            <motion.div
              className="px-4 py-2 sm:py-3 rounded-full font-semibold text-white text-xs sm:text-sm md:text-base text-center w-full"
              style={{
                backgroundColor: currentColor,
                boxShadow: `0 0 20px ${currentColor}40`,
              }}
              animate={{
                boxShadow: [`0 0 20px ${currentColor}40`, `0 0 30px ${currentColor}60`, `0 0 20px ${currentColor}40`],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🎉 You&apos;re Prop Firm Ready!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Additional Stats - Static positioning */}
      <div className="flex justify-between gap-4 mt-6 w-full max-w-[95%] md:max-w-md px-2">
        <div className="text-center flex-1">
          <div className="text-base sm:text-xl font-bold text-[#00A9E0]">95%</div>
          <div className="text-[10px] sm:text-xs text-zinc-400 whitespace-nowrap">Risk Control</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-base sm:text-xl font-bold text-green-400">89%</div>
          <div className="text-[10px] sm:text-xs text-zinc-400 whitespace-nowrap">Consistency</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-base sm:text-xl font-bold text-purple-400">92%</div>
          <div className="text-[10px] sm:text-xs text-zinc-400 whitespace-nowrap">Discipline</div>
        </div>
      </div>
    </div>
  )
}
