"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, User, MessageSquare, CheckCircle, AlertCircle, ExternalLink } from "lucide-react"
import { sendContactEmail } from "@/app/actions/contact"

interface ContactFormProps {
  title?: string
  description?: string
  subject?: string
}

export function ContactForm({
  title = "Get in Touch",
  description = "Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.",
  subject = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: subject,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const result = await sendContactEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      })

      if (result.success) {
        setIsSuccess(true)
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: "", email: "", subject: "", message: "" })
          setIsSuccess(false)
        }, 5000)
      } else {
        setSubmitError(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError(null)
    }
  }

  // Generate mailto link for fallback
  const generateMailtoLink = () => {
    const emailSubject = encodeURIComponent(`[Lock It Trade Contact] ${formData.subject || subject}`)
    const emailBody = encodeURIComponent(
      `
From: ${formData.name} (${formData.email})

Message:
${formData.message}

---
Sent from Lock It Trade Contact Form
    `.trim(),
    )

    return `mailto:support@lockittrade.com?subject=${emailSubject}&body=${emailBody}`
  }

  if (isSuccess) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
        <p className="text-zinc-400 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <Button
          variant="outline"
          className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-zinc-400 text-lg">{description}</p>
      </div>

      {/* Error Message with Mailto Fallback */}
      {submitError && (
        <motion.div
          className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-3 mb-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <span className="text-red-400 text-sm">{submitError}</span>
          </div>

          {/* Direct Email Fallback */}
          <div className="mt-3 pt-3 border-t border-red-500/20">
            <p className="text-zinc-300 text-sm mb-2">Alternative: Send us an email directly</p>
            <a
              href={generateMailtoLink()}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              support@lockittrade.com
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-400 focus:border-[#00A9E0] focus:ring-[#00A9E0] ${
                errors.name ? "border-red-500" : ""
              }`}
              disabled={isSubmitting}
            />
          </div>
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-400 focus:border-[#00A9E0] focus:ring-[#00A9E0] ${
                errors.email ? "border-red-500" : ""
              }`}
              disabled={isSubmitting}
            />
          </div>
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-white font-medium mb-2">
            Subject *
          </label>
          <Input
            id="subject"
            type="text"
            placeholder="What&apos;s this about?"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            className={`bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-400 focus:border-[#00A9E0] focus:ring-[#00A9E0] ${
              errors.subject ? "border-red-500" : ""
            }`}
            disabled={isSubmitting}
          />
          {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-zinc-400 w-5 h-5" />
            <Textarea
              id="message"
              placeholder="Tell us more about your inquiry..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`pl-10 pt-3 bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-400 focus:border-[#00A9E0] focus:ring-[#00A9E0] min-h-[120px] resize-none ${
                errors.message ? "border-red-500" : ""
              }`}
              disabled={isSubmitting}
            />
          </div>
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#00A9E0] hover:bg-[#00A9E0]/80 text-white font-medium py-6 text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,169,224,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending Message...
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {/* Direct Contact Info */}
      <div className="mt-8 pt-6 border-t border-zinc-800/50 text-center">
        <p className="text-zinc-400 text-sm mb-3">Or contact us directly:</p>
        <a
          href="mailto:support@lockittrade.com"
          className="inline-flex items-center gap-2 text-[#00A9E0] hover:text-blue-300 transition-colors duration-200"
        >
          <Mail className="w-4 h-4" />
          support@lockittrade.com
        </a>
      </div>
    </div>
  )
}
