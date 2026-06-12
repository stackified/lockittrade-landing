"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function TradingCards() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] w-full">
      <div
        className="absolute w-full h-full animate-fade-in-left"
        style={{ animationDelay: "400ms" }}
      >
        {/* Win Rate Card - Adjusted positioning for mobile */}
        <Card
          className={`absolute top-0 left-0 w-[90%] sm:w-[85%] md:w-[85%] lg:w-[80%] p-3 sm:p-4 md:p-6 bg-[#0d0d0f]/95 border-white/10 shadow-2xl transition-all duration-300 ${
            hovered === 0 ? "z-30 scale-[1.02]" : "z-10"
          }`}
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
          onTouchStart={() => setHovered(0)}
          onTouchEnd={() => setHovered(null)}
        >
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">Win Rate Analysis</h3>
              <span className="text-green-400 font-bold text-sm sm:text-base">72%</span>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-zinc-400">Monday</span>
                <span className="text-white">85%</span>
              </div>
              <Progress value={85} className="h-1.5 sm:h-2 bg-zinc-800" />

              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-zinc-400">Tuesday</span>
                <span className="text-white">62%</span>
              </div>
              <Progress value={62} className="h-1.5 sm:h-2 bg-zinc-800" />

              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-zinc-400">Wednesday</span>
                <span className="text-white">78%</span>
              </div>
              <Progress value={78} className="h-1.5 sm:h-2 bg-zinc-800" />
            </div>

            <div className="pt-1.5 sm:pt-2 border-t border-zinc-800">
              <p className="text-xs sm:text-sm text-zinc-400">
                <span className="text-green-400">↑ 12%</span> from last week
              </p>
            </div>
          </div>
        </Card>

        {/* Violations Card - Reduced mobile spacing */}
        <Card
          className={`absolute top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px] left-[15px] sm:left-[20px] md:left-[30px] lg:left-[80px] w-[90%] sm:w-[85%] md:w-[85%] lg:w-[80%] p-3 sm:p-4 md:p-6 bg-[#0d0d0f]/95 border-white/10 shadow-2xl transition-all duration-300 ${
            hovered === 1 ? "z-30" : "z-20"
          }`}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          onTouchStart={() => setHovered(1)}
          onTouchEnd={() => setHovered(null)}
        >
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">Violations Summary</h3>
              <span className="text-[#00A9E0] font-bold text-sm sm:text-base">3</span>
            </div>

            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white text-xs sm:text-sm">Max Drawdown</p>
                  <p className="text-xs text-zinc-500">Exceeded by 2.3%</p>
                </div>
                <span className="text-red-400 text-xs sm:text-sm">1</span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white text-xs sm:text-sm">Daily Loss Limit</p>
                  <p className="text-xs text-zinc-500">Within parameters</p>
                </div>
                <span className="text-green-400 text-xs sm:text-sm">0</span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white text-xs sm:text-sm">Position Sizing</p>
                  <p className="text-xs text-zinc-500">Exceeded twice</p>
                </div>
                <span className="text-red-400 text-xs sm:text-sm">2</span>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Score Card - Reduced mobile spacing */}
        <Card
          className={`absolute top-[120px] sm:top-[160px] md:top-[200px] lg:top-[240px] left-[30px] sm:left-[40px] md:left-[60px] lg:left-[160px] w-[90%] sm:w-[85%] md:w-[85%] lg:w-[80%] p-3 sm:p-4 md:p-6 bg-[#0d0d0f]/95 border-white/10 shadow-2xl transition-all duration-300 ${
            hovered === 2 ? "z-30 scale-[1.02]" : "z-30"
          }`}
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          onTouchStart={() => setHovered(2)}
          onTouchEnd={() => setHovered(null)}
        >
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">AI Readiness Score</h3>
            </div>

            <div className="flex justify-center py-1 sm:py-2">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#27272a" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#00A9E0"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    className="animate-fill-circle"
                    style={{ animationDelay: "500ms" }}
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#00A9E0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity={0.6}
                    strokeDasharray="283"
                    className="animate-fill-circle"
                    style={{ animationDelay: "500ms" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-sm sm:text-base md:text-lg lg:text-3xl font-bold text-white animate-fade-in"
                    style={{ animationDelay: "1500ms" }}
                  >
                    87%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-xs sm:text-sm">
              <div className="text-center">
                <p className="text-zinc-400">Risk</p>
                <p className="text-[#00A9E0] font-medium">92%</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-400">Consistency</p>
                <p className="text-[#00A9E0] font-medium">78%</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-400">Discipline</p>
                <p className="text-[#00A9E0] font-medium">85%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
