"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const faqs: FAQItem[] = [
    {
      question: "Is there a free trial?",
      answer:
        "Yes! All plans come with a 14-day free trial. No credit card required to start. You can explore all features and see if Lock It Trade is right for your trading journey.",
    },
    {
      question: "Can I change plans anytime?",
      answer:
        "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe.",
    },
    {
      question: "Is my trading data secure?",
      answer:
        "Security is our top priority. We use bank-level encryption, secure cloud storage, and never share your trading data with third parties. Your data is yours, always.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with Lock It Trade for any reason, contact us within 30 days for a full refund.",
    },
    {
      question: "Can I use Lock It Trade with any broker?",
      answer:
        "Yes! Lock It Trade works with any broker. You can manually input trades or connect via our API integrations with popular platforms like MetaTrader, TradingView, and more.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-16 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#9C5FFF]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00A9E0] to-[#007ba3] filter drop-shadow-[0_0_30px_rgba(0,169,224,0.3)]">Questions</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to reach out to our
            support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isExpanded = openIndex === index

            return (
              <div
                key={index}
                className="mb-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? "bg-[#0c0c0c]/80 border-[#00A9E0]/40 shadow-[0_0_30px_rgba(0,169,224,0.08)] ring-1 ring-[#00A9E0]/20" 
                      : "bg-[#0a0a0a]/60 border-white/[0.08] hover:border-white/20 hover:bg-white/[0.02]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between transition-colors duration-200"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-white pr-4 tracking-tight">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-[#00A9E0]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-zinc-400" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="overflow-hidden animate-fade-in">
                      <div className="px-6 pb-6 border-t border-white/[0.05]">
                        <p className="text-zinc-300 leading-relaxed pt-4 text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Support */}
        <div
          className="text-center mt-12 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <p className="text-zinc-500 text-sm mb-3 font-semibold uppercase tracking-wider">Still have questions?</p>
          <a
            href="mailto:lockittrade@gmail.com"
            className="inline-flex items-center gap-1.5 text-[#00A9E0] hover:text-blue-300 font-bold transition-all duration-200 hover:scale-105 hover:underline"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  )
}
