"use client"

import { useEffect, useState, type ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, type LucideIcon } from "lucide-react"

export interface LegalSection {
  id: string
  title: string
  content: ReactNode
}

interface LegalLayoutProps {
  title: string
  subtitle: string
  lastUpdated: string
  icon: LucideIcon
  sections: LegalSection[]
}

export function LegalLayout({ title, subtitle, lastUpdated, icon: Icon, sections }: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "")

  // Scroll-spy to highlight the active section in the table of contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-16 border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00A9E0]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-start animate-fade-in-up">
            <div className="w-14 h-14 rounded-2xl bg-[#00A9E0]/10 border border-[#00A9E0]/20 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-[#00A9E0]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">{title}</h1>
            <p className="text-lg text-zinc-400 max-w-2xl mb-5">{subtitle}</p>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A9E0]" />
              Last updated: {lastUpdated}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 space-y-1">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 px-3">On this page</p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => handleClick(e, s.id)}
                  className={`block text-sm py-2 px-3 rounded-lg border-l-2 transition-all duration-200 ${
                    activeId === s.id
                      ? "text-[#00A9E0] border-[#00A9E0] bg-[#00A9E0]/5 font-medium"
                      : "text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-white/[0.03]"
                  }`}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-5 min-w-0">
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                style={{ animationDelay: `${Math.min(i * 30, 200)}ms` }}
                className="scroll-mt-28 bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors animate-fade-in-up"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <span className="text-sm font-mono text-[#00A9E0]/70">{String(i + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                <div className="text-zinc-300 space-y-3 leading-relaxed text-[15px]">{section.content}</div>
              </section>
            ))}

            {/* Contact footer card */}
            <div className="bg-gradient-to-br from-[#00A9E0]/10 to-transparent border border-[#00A9E0]/20 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Questions?</h3>
                <p className="text-zinc-400 text-sm">We aim to respond to all inquiries within five business days.</p>
              </div>
              <a
                href="mailto:legal@lockittrade.com"
                className="inline-flex items-center gap-2 bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                legal@lockittrade.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
