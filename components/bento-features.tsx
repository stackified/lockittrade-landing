"use client"

import { useState } from "react"
import { AIReadinessGauge } from "@/components/ai-readiness-gauge"
import { ViolationsTracker } from "@/components/violations-tracker"
import { StrategyComplianceMonitor } from "@/components/strategy-compliance-monitor"
import { Brain, Sparkles, Target, Shield, Zap, ArrowUp } from "lucide-react"

export function BentoFeatures() {
  const [chatLogs, setChatLogs] = useState<{text: string, sender: "ai"|"user"}[]>([
    {text: "Analyzing your psychological patterns...", sender: "ai"},
    {text: "Warning: Detected potential revenge trading behavior.", sender: "ai"},
    {text: "Insight: Your win rate drops 30% after 2 consecutive losses.", sender: "ai"},
  ])
  const [inputValue, setInputValue] = useState("")
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleAiClick = (clickedText: string) => {
    if (hasInteracted) return
    setHasInteracted(true)
    
    // Clear initial logs and make the clicked text look like the user asked about it
    setChatLogs([{ text: clickedText, sender: "user" }])
    
    let response = ""
    if (clickedText.includes("Analyzing")) {
      response = "I noticed you took 4 trades in the last 10 minutes. This deviates from your standard strategy pattern."
    } else if (clickedText.includes("revenge")) {
      response = "You just experienced a loss. Take a 15-minute break to reset your mindset before continuing."
    } else if (clickedText.includes("win rate")) {
      response = "I recommend stopping for the day to protect your capital. Preserving capital is rule #1."
    }

    if (response) {
      setTimeout(() => {
        setChatLogs(prev => [...prev, { text: response, sender: "ai" }])
      }, 600)
    }
  }

  const handleUserSubmit = (input: string) => {
    if (!input.trim()) return
    
    if (!hasInteracted) {
      setHasInteracted(true)
      setChatLogs([{ text: input, sender: "user" }])
    } else {
      setChatLogs(prev => [...prev, { text: input, sender: "user" }])
    }
    setInputValue("")

    const lowerInput = input.toLowerCase()
    let response = "Please login to gain access to personalized insights and further features."
    
    if (lowerInput.includes("hi") || lowerInput.includes("hey") || lowerInput.includes("hello")) {
      response = "Hello! I am your AI Trading Coach. I monitor your trades to help you stick to your strategy."
    }

    setTimeout(() => {
      setChatLogs(prev => [...prev, { text: response, sender: "ai" }])
    }, 600)
  }

  return (
    <section id="features" className="relative bg-black pt-12 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00A9E0]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#00A9E0]/5 blur-[120px] rounded-full" />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-fade-in-up"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A9E0]/10 border border-[#00A9E0]/20 text-[#00A9E0] text-sm font-medium mb-6">
            <Sparkles size={16} />
            The Ultimate Toolkit
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Everything you need to <span className="text-[#00A9E0]">stay funded</span>.
          </h2>
          <p className="text-lg text-zinc-400">
            Ditch the spreadsheets. Our AI-powered suite gives you the edge institutional traders use, all inside a beautifully simple dashboard.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Box 1: AI Coach (Large, spans 2 columns) */}
          <div
            className="col-span-1 md:col-span-2 lg:col-span-2 glass-panel p-8 sm:p-10 rounded-[2rem] relative overflow-hidden group flex flex-col gap-8 h-full animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#00A9E0]/10 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-[#00A9E0]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">AI Trading Coach</h3>
              <p className="text-zinc-400 max-w-md">Your personal mentor analyzing your psychological patterns and stopping you from over-trading in real-time.</p>
            </div>
            
            <div className="relative z-10 bg-black/40 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-md flex-1 min-h-[260px] max-h-[600px] w-full flex flex-col overflow-hidden group-hover:border-[#00A9E0]/30 transition-colors">
              <div className="space-y-3 mb-4 overflow-y-auto flex-1 pr-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {chatLogs.map((log, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-3 md:p-4 text-xs md:text-sm text-zinc-300 border flex items-start gap-3 w-fit max-w-[90%] md:max-w-[80%] animate-fade-in-up ${log.sender === "user" ? "ml-auto bg-[#00A9E0]/10 border-[#00A9E0]/20 text-white" : "mr-auto bg-white/5 border-white/5 hover:bg-white/10 transition-colors"} ${log.sender === "ai" && !hasInteracted ? "cursor-pointer hover:scale-[1.02] transition-transform" : ""}`}
                    onClick={() => log.sender === "ai" && !hasInteracted && handleAiClick(log.text)}
                  >
                    {log.sender === "ai" && <div className="w-2 h-2 rounded-full bg-[#00A9E0] mt-1.5 shadow-[0_0_8px_#00A9E0] shrink-0" />}
                    {log.text}
                  </div>
                ))}
              </div>
              {/* Interactive input */}
              <form onSubmit={(e) => { e.preventDefault(); handleUserSubmit(inputValue); }} className="flex gap-2 mt-auto pt-4 border-t border-white/5 shrink-0">
                 <input 
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   placeholder="Ask your AI Coach..."
                   className="h-10 bg-black/50 rounded-lg flex-1 border border-white/10 px-4 text-sm text-white focus:outline-none focus:border-[#00A9E0]/50 transition-colors"
                 />
                 <button type="submit" className="h-10 w-10 bg-[#00A9E0] hover:bg-[#00A9E0]/80 transition-colors rounded-lg flex items-center justify-center cursor-pointer shrink-0">
                   <ArrowUp className="w-5 h-5 text-white" />
                 </button>
              </form>
            </div>
          </div>

          {/* Box 2: Readiness Score (Tall, spans 1 col) */}
          <div
            className="col-span-1 glass-panel p-8 sm:p-10 rounded-[2rem] relative overflow-hidden group flex flex-col items-center gap-8 text-center h-full animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A9E0]/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="relative z-10 w-full mb-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#00A9E0]/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#00A9E0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Prop Firm Ready?</h3>
              <p className="text-zinc-400 text-sm">Know exactly when you&apos;re ready to get funded.</p>
            </div>
            
            <div className="w-full scale-90 sm:scale-100 origin-center">
              <AIReadinessGauge isActive={true} targetScore={92} />
            </div>
          </div>

          {/* Box 3: Violations Tracker */}
          <div
            className="col-span-1 glass-panel p-8 sm:p-10 rounded-[2rem] relative overflow-hidden group flex flex-col justify-start h-full animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative z-10 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Violation Tracker</h3>
              <p className="text-zinc-400 text-sm">Real-time alerts before you break the rules.</p>
            </div>
            <div className="relative z-10 w-full">
              <div className="w-full transform scale-95 sm:scale-100 origin-top">
                 <ViolationsTracker isActive={true} />
              </div>
            </div>
          </div>

          {/* Box 4: Strategy Compliance */}
          <div
            className="col-span-1 md:col-span-2 lg:col-span-2 glass-panel p-8 sm:p-10 rounded-[2rem] relative overflow-hidden group flex flex-col justify-start h-full animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative z-10 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Strategy Compliance</h3>
              <p className="text-zinc-400 text-sm">Ensure you only take trades that fit your rulebook perfectly.</p>
            </div>
            <div className="relative z-10 w-full">
               <div className="w-full">
                 <StrategyComplianceMonitor isActive={true} />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
