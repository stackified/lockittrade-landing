"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  /** YouTube video id */
  videoId: string
}

export function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
        >
          Close <X className="w-5 h-5" />
        </button>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-[#00A9E0]/20">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="LockItTrade Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
