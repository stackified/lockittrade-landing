"use client"

import { useEffect, useState } from "react"

/**
 * Returns true when the user has requested reduced motion via the
 * `prefers-reduced-motion: reduce` media query. Defaults to false until
 * mounted to avoid SSR/hydration mismatches.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return reduced
}
