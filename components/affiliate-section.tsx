"use client"

import { Button } from "@/components/ui/button"
import { Handshake, DollarSign, Users, MousePointerClick, ArrowRight, Link2 } from "lucide-react"

const stats = [
  { icon: DollarSign, label: "Total Earnings", value: "$2,847", accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Users, label: "Referrals", value: "28", accent: "text-[#00A9E0]", bg: "bg-[#00A9E0]/10" },
  { icon: MousePointerClick, label: "Link Clicks", value: "156", accent: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Handshake, label: "Conversion", value: "42%", accent: "text-amber-400", bg: "bg-amber-500/10" },
]

export function AffiliateSection() {
  return (
    <section className="relative bg-gradient-to-b from-black to-zinc-900 py-16 md:py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portal preview card */}
          <div
            className="order-2 lg:order-1 glass-panel rounded-[2rem] p-6 sm:p-8 relative overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Affiliate Dashboard</p>
                  <p className="text-white font-semibold">Welcome back, Partner</p>
                </div>
                <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  20% Commission
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 animate-fade-in"
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                  >
                    <div className={`w-9 h-9 rounded-lg ${stat.bg} flex items-center justify-center mb-3`}>
                      <stat.icon className={`w-4 h-4 ${stat.accent}`} />
                    </div>
                    <p className="text-2xl font-bold text-white tabular-nums">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Referral link */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-black/40 border border-white/10">
                <Link2 className="w-4 h-4 text-[#00A9E0] shrink-0" />
                <span className="text-xs text-zinc-400 font-mono truncate flex-1">lockittrade.com?ref=YOUR_CODE</span>
                <button className="text-[11px] font-semibold text-[#00A9E0] hover:text-white transition-colors shrink-0">Copy</button>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Handshake size={16} />
              Affiliate Program
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Earn while the community <span className="text-[#00A9E0]">grows</span>.
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg">
              Share LockItTrade and get paid for every trader you bring in. A dedicated promoter portal tracks
              your referrals, commissions and payouts in real time — with an industry-leading 180-day cookie.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "20% recurring commission on every referral",
                "180-day cookie window — get credit even for late sign-ups",
                "Real-time stats: clicks, conversions, and payouts",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white font-bold h-14 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,169,224,0.4)] group"
              asChild
            >
              <a href="https://affiliates.lockittrade.com" target="_blank" rel="noopener noreferrer">
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AffiliateSection

