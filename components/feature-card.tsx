"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  Icon: LucideIcon
  title: string
  description: string
  index: number
  lightMode?: boolean
  semiTransparent?: boolean
}

export function FeatureCard({
  Icon,
  title,
  description,
  index,
  lightMode = false,
  semiTransparent = false,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Different animation delays based on index for staggered entrance
  const delay = 0.1 + index * 0.1

  const itemVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut" as const,
      },
    },
  }

  // Define colors as constants to avoid dynamic class issues
  const brandBlue = "#00A9E0"
  const hoverShadow = "0_0_20px_rgba(0,169,224,0.15)"
  const iconShadow = "0_0_15px_rgba(0,169,224,0.5)"
  const iconShadowSubtle = "0_0_15px_rgba(0,169,224,0.3)"

  return (
    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full">
      <Card
        className={`relative h-full p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-300 ${
          lightMode
            ? semiTransparent
              ? `bg-white/70 backdrop-blur-sm border-zinc-700/20 ${isHovered ? "shadow-lg" : "shadow-md"}`
              : `bg-white border-gray-200 ${isHovered ? "shadow-lg" : "shadow-md"}`
            : `bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50`
        }`}
        style={{
          borderColor: isHovered ? (lightMode ? `${brandBlue}50` : `${brandBlue}50`) : undefined,
          boxShadow: isHovered && !lightMode ? `0 0 20px rgba(0,169,224,0.15)` : undefined,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            backgroundColor: `${brandBlue}05`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Icon with glow effect */}
        <div className="relative mb-5">
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
              lightMode
                ? `${isHovered ? "text-white" : "bg-zinc-800/10"}`
                : `bg-zinc-800/50 ${isHovered ? "" : "text-white"}`
            }`}
            style={{
              backgroundColor: isHovered
                ? lightMode
                  ? brandBlue
                  : "rgb(39 39 42 / 0.5)"
                : lightMode
                  ? "rgb(39 39 42 / 0.1)"
                  : "rgb(39 39 42 / 0.5)",
              color: isHovered ? (lightMode ? "white" : brandBlue) : lightMode ? brandBlue : "white",
              boxShadow: isHovered
                ? lightMode
                  ? `0 0 15px rgba(0,169,224,0.5)`
                  : `0 0 15px rgba(0,169,224,0.3)`
                : undefined,
            }}
          >
            <Icon size={24} strokeWidth={isHovered ? 2.5 : 2} className="transition-all duration-300" />
          </div>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-xl blur-md"
              style={{ backgroundColor: `${brandBlue}20` }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>

        {/* Content */}
        <h3
          className="text-xl md:text-2xl font-semibold mb-3 transition-colors duration-300"
          style={{
            color: isHovered ? brandBlue : lightMode ? "rgb(39 39 42)" : "white",
          }}
        >
          {title}
        </h3>

        <p className={`text-sm md:text-base ${lightMode ? "text-zinc-600" : "text-zinc-400"}`}>{description}</p>
      </Card>
    </motion.div>
  )
}
