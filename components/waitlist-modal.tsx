"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, User, CheckCircle, AlertCircle } from "lucide-react"
import { addToWaitlist } from "@/app/actions/waitlist"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
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
      const result = await addToWaitlist({
        name: formData.name.trim(),
        email: formData.email.trim(),
      })

      if (result.success) {
        setIsSuccess(true)
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: "", email: "" })
          setIsSuccess(false)
          onClose()
        }, 3000)
      } else {
        setSubmitError(result.error || "Failed to join waitlist. Please try again.")
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
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError(null)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: "", email: "" })
      setErrors({})
      setIsSuccess(false)
      setSubmitError(null)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors duration-200 z-10"
          disabled={isSubmitting}
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8">
          {isSuccess ? (
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">You&apos;re In!</h2>
              <p className="text-zinc-400 mb-4">
                Thanks for joining the waitlist. We&apos;ll notify you as soon as Lock It Trade is ready.
              </p>
              <div className="text-sm text-zinc-500">This window will close automatically...</div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                <p className="text-zinc-400">
                  Be the first to know when Lock It Trade launches. Get early access and exclusive updates.
                </p>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 animate-fade-in">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-red-400 text-sm">{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Your name"
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
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <Input
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

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#00A9E0] hover:bg-[#00A9E0]/80 text-white font-medium py-3 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,169,224,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Joining...
                    </div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-zinc-500">
                  We respect your privacy. No spam, just updates about Lock It Trade.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00A9E0]/5 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
