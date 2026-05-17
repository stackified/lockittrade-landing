"use client"

import { useEffect } from "react"
import Intercom from "@intercom/messenger-js-sdk"

export function IntercomProvider() {
  useEffect(() => {
    // Initialize Intercom for anonymous visitors on the marketing site
    // When users sign in to the app, user data will be passed from app.lockittrade.com
    Intercom({
      app_id: "j9yhtt8i",
      // For the marketing site, we boot Intercom without user data
      // When this code is on the app subdomain, you can pass user data:
      // user_id: user.id,
      // name: user.name,
      // email: user.email,
      // created_at: user.createdAt,
    })
  }, [])

  return null
}
