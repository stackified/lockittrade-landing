"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Youtube, ArrowUp, Instagram } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black py-12 px-6 border-t border-white/10 relative">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Side - Brand Identity */}
          <div className="w-full md:w-auto">
            <div className="flex items-center">
              <Image src={getAssetPath("/logo.png")} alt="Lock It Trade" width={200} height={60} className="h-12 w-auto" />
            </div>
            <p className="text-slate-500 text-sm mt-4">© 2025 Lock It Trade. All rights reserved.</p>
            <p className="text-slate-600 text-xs mt-2">
              Trading involves risk. Results not guaranteed. Not financial advice.
            </p>
          </div>

          {/* Middle - Quick Nav Links */}
          <div className="w-full md:w-auto">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://affiliates.lockittrade.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
              >
                Affiliate Program
              </a>
              <a
                href="https://help.lockittrade.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
              >
                Help Center
              </a>
              <Link href="/terms" className="text-slate-400 text-sm hover:text-white transition-colors duration-200">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-slate-400 text-sm hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Lock It Trade for Prop Firms & Brokers */}
          <div className="w-full md:w-auto">
            <h3 className="text-white font-medium mb-4">For Prop Firms & Brokers</h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="/enterprise"
                className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
              >
                Enterprise Solutions
              </Link>
              <Link
                href="/partnerships"
                className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
              >
                Partnership Program
              </Link>
              <Link href="/api" className="text-slate-400 text-sm hover:text-white transition-colors duration-200">
                API Integration
              </Link>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="w-full md:w-auto">
            <h3 className="text-white font-medium mb-4">Connect With Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@LockItTrade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#00A9E0] transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/lockittrade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#00A9E0] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-slate-400 text-sm">Join our growing community of 500+ traders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 left-6 bg-[#00A9E0]/20 hover:bg-[#00A9E0]/40 text-[#00A9E0] p-3 rounded-full shadow-[0_0_15px_rgba(0,169,224,0.3)] hover:shadow-[0_0_20px_rgba(0,169,224,0.5)] transition-all duration-300 z-50"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </footer>
  )
}
