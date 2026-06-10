"use client"

import { useEffect } from "react"

export function IntercomProvider() {
  useEffect(() => {
    let booted = false
    let fallbackTimer: ReturnType<typeof setTimeout>

    const events: (keyof WindowEventMap)[] = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
    ]

    const boot = async () => {
      if (booted) return
      booted = true
      cleanup()

      // Load the Intercom SDK only now, so its (heavy) bundle stays out of
      // the initial page load and off the critical path.
      const { default: Intercom } = await import("@intercom/messenger-js-sdk")
      Intercom({
        app_id: "j9yhtt8i",
        // For the marketing site, we boot Intercom without user data.
        // When this code is on the app subdomain, you can pass user data:
        // user_id, name, email, created_at, etc.
      })
    }

    const cleanup = () => {
      events.forEach((evt) => window.removeEventListener(evt, boot))
      clearTimeout(fallbackTimer)
    }

    events.forEach((evt) =>
      window.addEventListener(evt, boot, { once: true, passive: true })
    )

    // Safety net: boot after 4s even if the visitor never interacts, so the
    // chat widget is still available for idle users.
    fallbackTimer = setTimeout(boot, 4000)

    return cleanup
  }, [])

  return null
}
