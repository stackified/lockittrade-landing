// Client-safe waitlist submission handler

interface WaitlistData {
  name: string
  email: string
}

interface SystemeIOResponse {
  success: boolean
  message?: string
  error?: string
}

export async function addToWaitlist(data: WaitlistData): Promise<SystemeIOResponse> {
  const { name, email } = data

  // Validate input data
  if (!name?.trim() || !email?.trim()) {
    return {
      success: false,
      error: "Name and email are required.",
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
    // Get API key from environment variable (supports public and build-time variables)
    const apiKey = process.env.NEXT_PUBLIC_SYSTEME_IO_API_KEY || process.env.SYSTEME_IO_API_KEY
    if (!apiKey) {
      console.error("Systeme.io API key environment variable is not set")
      return {
        success: false,
        error: "Server configuration error. Please try again later.",
      }
    }

    // systeme.io API endpoint for adding contacts
    const response = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify({
        email: email.trim(),
        firstName: name.trim(),
        tags: ["waitlist", "lock-it-trade"],
        customFields: {
          source: "website-waitlist",
          signupDate: new Date().toISOString(),
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("systeme.io API error:", response.status, errorData)

      // Handle specific error cases
      if (response.status === 409) {
        return {
          success: false,
          error: "This email is already on our waitlist!",
        }
      }

      if (response.status === 401) {
        return {
          success: false,
          error: "Server authentication error. Please try again later.",
        }
      }

      if (response.status >= 500) {
        return {
          success: false,
          error: "Server error. Please try again in a few minutes.",
        }
      }

      return {
        success: false,
        error: "Failed to join waitlist. Please try again.",
      }
    }

    const result = await response.json()
    console.log("Successfully added to systeme.io:", result)

    return {
      success: true,
      message: "Successfully joined the waitlist!",
    }
  } catch (error) {
    console.error("Error adding to waitlist:", error)

    // Check if it's a network error
    if (error instanceof TypeError && error.message.includes("fetch")) {
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
      }
    }

    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
