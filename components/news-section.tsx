"use client"

import { Newspaper, Bell, Clock } from "lucide-react"

const events = [
  {
    time: "14:00",
    title: "Federal Reserve Rate Decision",
    currency: "USD",
    impact: "High",
    forecast: "2.50%",
    previous: "2.75%",
  },
  {
    time: "12:30",
    title: "US Non-Farm Payrolls",
    currency: "USD",
    impact: "High",
    forecast: "150K",
    previous: "187K",
  },
  {
    time: "13:45",
    title: "ECB Monetary Policy Statement",
    currency: "EUR",
    impact: "High",
    forecast: "4.00%",
    previous: "4.25%",
  },
  {
    time: "09:00",
    title: "UK CPI (YoY)",
    currency: "GBP",
    impact: "Medium",
    forecast: "3.2%",
    previous: "3.4%",
  },
  {
    time: "23:50",
    title: "Japan GDP (QoQ)",
    currency: "JPY",
    impact: "Low",
    forecast: "0.3%",
    previous: "0.5%",
  },
]

const impactStyles: Record<string, string> = {
  High: "bg-red-500/10 text-red-400 border-red-500/20",
  Medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Low: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
}

export function NewsSection() {
  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00A9E0]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A9E0]/10 border border-[#00A9E0]/20 text-[#00A9E0] text-sm font-medium mb-6">
              <Newspaper size={16} />
              Economic Catalyst
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Never get caught off guard by <span className="text-[#00A9E0]">the news</span>.
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg">
              A live, institutional-grade economic calendar built right into your journal. Track high-impact
              events, get alerts before the market moves, and let the AI flag news-driven volatility on your trades.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Bell, text: "Real-time alerts before high-impact releases" },
                { icon: Clock, text: "Forecast vs. actual vs. previous, synced every 5 minutes" },
                { icon: Newspaper, text: "News-trading compliance so you never breach a rule" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <span className="w-9 h-9 rounded-lg bg-[#00A9E0]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[#00A9E0]" />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Calendar card */}
          <div
            className="glass-panel rounded-[2rem] p-5 sm:p-6 relative overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00A9E0] shadow-[0_0_8px_#00A9E0] animate-pulse" />
                  <span className="text-white font-semibold">Today&apos;s Economic Calendar</span>
                </div>
                <span className="text-xs text-zinc-500">Live</span>
              </div>

              <div className="space-y-2">
                {events.map((event, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#00A9E0]/30 hover:bg-white/[0.05] transition-colors animate-fade-in-left"
                    style={{ animationDelay: `${300 + i * 80}ms` }}
                  >
                    <div className="text-xs font-mono text-zinc-500 w-12 shrink-0">{event.time}</div>
                    <div className="w-10 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[11px] font-bold text-zinc-300 shrink-0">
                      {event.currency}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white font-medium truncate">{event.title}</p>
                      <p className="text-[11px] text-zinc-500">
                        Forecast {event.forecast} · Prev {event.previous}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2 py-1 rounded-full border shrink-0 ${impactStyles[event.impact]}`}
                    >
                      {event.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection

