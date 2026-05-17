"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
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
        "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll prorate any billing differences.",
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
        "Yes, we offer a 30-day money-back guarantee. If you&apos;re not satisfied with Lock It Trade for any reason, contact us within 30 days for a full refund.",
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to reach out to our
            support team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Card className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-800/30 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-[#00A9E0]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-zinc-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-zinc-800/50">
                        <p className="text-zinc-300 leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 mb-4">Still have questions?</p>
          <a
            href="mailto:lockittrade@gmail.com"
            className="text-[#00A9E0] hover:text-blue-300 font-medium transition-colors duration-200"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
