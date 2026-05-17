// Client-safe contact form submission handler

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactResponse {
  success: boolean
  message?: string
  error?: string
}

export async function sendContactEmail(data: ContactFormData): Promise<ContactResponse> {
  const { name, email, subject, message } = data

  // Validate input data
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return {
      success: false,
      error: "All fields are required.",
    }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    }
  }

  try {
    // Get Formspree endpoint from environment variable (supports public and build-time variables)
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || process.env.FORMSPREE_ENDPOINT
    if (!formspreeEndpoint) {
      console.error("Formspree endpoint environment variable is not set")
      return {
        success: false,
        error: "Server configuration error. Please try the direct email option below.",
      }
    }

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        subject: `[Lock It Trade Contact] ${subject.trim()}`,
        message: `
From: ${name.trim()} (${email.trim()})
Subject: ${subject.trim()}

Message:
${message.trim()}

---
Sent from Lock It Trade Contact Form
Timestamp: ${new Date().toLocaleString()}
        `.trim(),
        _replyto: email.trim(), // This tells Formspree to set the reply-to address
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("Formspree error:", response.status, errorData)

      // Handle specific error cases
      if (response.status === 422) {
        return {
          success: false,
          error: "Invalid form data. Please check your inputs and try again.",
        }
      }

      if (response.status === 429) {
        return {
          success: false,
          error: "Too many requests. Please wait a moment and try again.",
        }
      }

      if (response.status >= 500) {
        return {
          success: false,
          error: "Server error. Please try the direct email option below.",
        }
      }

      // Return error but don't expose internal details
      return {
        success: false,
        error: "Failed to send message through our contact form. Please try the direct email option below.",
      }
    }

    const result = await response.json()
    console.log("Email sent successfully via Formspree:", result)

    return {
      success: true,
      message: "Message sent successfully! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error sending contact email:", error)

    // Check if it's a network error
    if (error instanceof TypeError && error.message.includes("fetch")) {
      return {
        success: false,
        error: "Network error. Please try the direct email option below if the problem persists.",
      }
    }

    return {
      success: false,
      error: "An unexpected error occurred. Please try the direct email option below.",
    }
  }
}
