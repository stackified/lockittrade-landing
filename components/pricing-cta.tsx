"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"

export function PricingCTA() {
  const guarantees = ["14-day free trial", "30-day money-back guarantee", "Cancel anytime", "No setup fees"]

  return (
    <>
      <section className="relative py-12 md:py-16 overflow-hidden bg-black border-t border-white/[0.05]">
        <ParticleBackground />

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00A9E0]/[0.05] blur-[140px] rounded-full pointer-events-none" />

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2
              className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight animate-fade-in-down"
              style={{ animationDelay: "200ms" }}
            >
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.3)]">Trading?</span>
            </h2>

            <p
              className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-down"
              style={{ animationDelay: "400ms" }}
            >
              Join thousands of traders who are already using Lock It Trade to improve their performance and get prop
              firm ready.
            </p>

            {/* Guarantees */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-zinc-300 justify-center bg-white/[0.02] border border-white/[0.05] p-3 rounded-2xl backdrop-blur-sm animate-fade-in-left"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="h-2.5 w-2.5 text-emerald-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-tight">{guarantee}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "1000ms" }}
            >
              <Button
                size="lg"
                className="bg-[#00A9E0] hover:bg-[#00A9E0]/90 text-white font-bold text-base h-14 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,169,224,0.5)] group"
                onClick={() => (window.location.href = "https://app.lockittrade.com/signup")}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                size="lg"
                className="border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 font-semibold text-base h-14 px-8 bg-transparent rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => window.open("mailto:lockittrade@gmail.com", "_blank")}
              >
                Contact Sales
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-16 pt-10 border-t border-white/[0.05] animate-fade-in-up"
              style={{ animationDelay: "1200ms" }}
            >
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                <div className="bg-white/[0.01] border border-white/[0.04] p-4 rounded-2xl backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-[#00A9E0] mb-1 tracking-tight">10,000+</div>
                  <div className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Active Users</div>
                </div>
                <div className="bg-white/[0.01] border border-white/[0.04] p-4 rounded-2xl backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-[#00A9E0] mb-1 tracking-tight">2,000+</div>
                  <div className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Funded Pros</div>
                </div>
                <div className="bg-white/[0.01] border border-white/[0.04] p-4 rounded-2xl backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-[#00A9E0] mb-1 tracking-tight">4.9/5</div>
                  <div className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
