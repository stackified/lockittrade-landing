"use client"
import Image from "next/image"

interface PoweredByOpenAIProps {
  lightMode?: boolean
}

export function PoweredByOpenAI({ lightMode = false }: PoweredByOpenAIProps) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
        lightMode ? "bg-gray-100 border border-gray-200" : "bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"
      }`}
    >
      <span className={`text-xs ${lightMode ? "text-zinc-600" : "text-zinc-400"}`}>Powered by</span>
      <div className="relative h-4 w-20">
        <Image
          src={lightMode ? "/openai-logo-dark.svg" : "/openai-white-lockup.png"}
          alt="OpenAI Logo"
          fill
          className="object-contain"
          priority
          sizes="80px"
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement
            target.style.display = "none"
          }}
        />
      </div>
    </div>
  )
}
