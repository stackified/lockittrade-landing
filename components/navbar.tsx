"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { WaitlistModal } from "@/components/waitlist-modal"
import { motion, AnimatePresence } from "framer-motion"
import { getAssetPath } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll listener for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4 transition-all duration-300">
        <nav 
          className={`w-full max-w-5xl mx-auto transition-all duration-500 rounded-full border flex items-center justify-between px-6 py-3 ${
            scrolled 
              ? "bg-black/60 backdrop-blur-2xl border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]" 
              : "bg-black/20 backdrop-blur-lg border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-10">
            <Image
              src={getAssetPath("/logo.png")}
              alt="LockItTrade"
              width={200}
              height={50}
              priority
              className="h-7 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide focus:outline-none">
                Community <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl min-w-[180px] p-2 animate-in fade-in-80 zoom-in-95 mt-2">
                <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer rounded-xl py-2.5 px-3 transition-colors duration-200 text-sm font-medium">
                  <Link href="https://discord.gg/VJJEwe3tU2" target="_blank" rel="noopener noreferrer">
                    Discord
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-white/10 focus:bg-white/10 cursor-pointer rounded-xl py-2.5 px-3 transition-colors duration-200 text-sm font-medium">
                  <Link href="https://help.lockittrade.com" target="_blank" rel="noopener noreferrer">
                    Help Center
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="#features"
              className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Pricing
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4 relative z-10">
            <Link
              href="https://app.lockittrade.com/login"
              className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Log in
            </Link>
            <Button
              className="bg-white text-black hover:bg-zinc-200 font-semibold text-sm h-9 px-5 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => (window.location.href = "https://app.lockittrade.com/signup")}
            >
              Start for free
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-zinc-400 hover:text-white transition-colors focus:outline-none p-1 relative z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[80px] left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 lg:hidden flex flex-col space-y-4"
            >
              <Link href="/" className="text-zinc-300 hover:text-white font-medium py-2 px-4 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="https://discord.gg/VJJEwe3tU2" target="_blank" className="text-zinc-300 hover:text-white font-medium py-2 px-4 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setIsOpen(false)}>
                Community (Discord)
              </Link>
              <Link href="#features" className="text-zinc-300 hover:text-white font-medium py-2 px-4 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setIsOpen(false)}>
                Features
              </Link>
              <Link href="#pricing" className="text-zinc-300 hover:text-white font-medium py-2 px-4 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              
              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Link href="https://app.lockittrade.com/login" className="w-full" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full bg-transparent border-white/10 text-white hover:bg-white/5 rounded-xl h-12 font-medium">
                    Log in
                  </Button>
                </Link>
                <Button 
                  className="w-full bg-white text-black hover:bg-zinc-200 rounded-xl h-12 font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "https://app.lockittrade.com/signup";
                  }}
                >
                  Start for free
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  )
}
