"use client"

import { useEffect, useRef } from "react"

export function AIGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
    }

    setCanvasDimensions()

    const handleResize = () => {
      setCanvasDimensions()
    }

    window.addEventListener("resize", handleResize)

    // Grid properties - MUCH more visible
    const gridSize = 40
    const nodeRadius = 2
    const lineWidth = 1

    // Nodes that will move
    const activeNodes: { x: number; y: number; vx: number; vy: number }[] = []
    const maxActiveNodes = 15

    // Create active nodes
    for (let i = 0; i < maxActiveNodes; i++) {
      activeNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    let animationFrameId: number

    // Draw function
    const draw = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const canvasWidth = canvas.width / (window.devicePixelRatio || 1)
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1)

      // Draw grid - MUCH more visible
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = lineWidth

      // Vertical lines
      for (let x = 0; x < canvasWidth; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvasHeight)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvasHeight; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvasWidth, y)
        ctx.stroke()
      }

      // Draw grid nodes - MUCH more visible
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      for (let x = 0; x < canvasWidth; x += gridSize) {
        for (let y = 0; y < canvasHeight; y += gridSize) {
          ctx.beginPath()
          ctx.arc(x, y, nodeRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Update and draw active nodes - MUCH more visible
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
      activeNodes.forEach((node) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvasWidth) node.vx *= -1
        if (node.y < 0 || node.y > canvasHeight) node.vy *= -1

        // Draw node with glow effect
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Add glow
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeRadius * 8)
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.fillStyle = gradient
        ctx.arc(node.x, node.y, nodeRadius * 8, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections to nearby grid points - MUCH more visible
        const connectionRadius = gridSize * 3
        ctx.lineWidth = 1

        // Find nearby grid points
        const gridX = Math.round(node.x / gridSize) * gridSize
        const gridY = Math.round(node.y / gridSize) * gridSize

        for (let x = gridX - gridSize * 2; x <= gridX + gridSize * 2; x += gridSize) {
          for (let y = gridY - gridSize * 2; y <= gridY + gridSize * 2; y += gridSize) {
            if (x < 0 || x > canvasWidth || y < 0 || y > canvasHeight) continue

            const distance = Math.sqrt((node.x - x) ** 2 + (node.y - y) ** 2)
            if (distance < connectionRadius) {
              // Draw line with opacity based on distance - MUCH more visible
              const opacity = 1 - distance / connectionRadius
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.7})`
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(x, y)
              ctx.stroke()
            }
          }
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    // One static frame for users who prefer reduced motion — no rAF loop.
    const drawStaticFrame = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1)
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = lineWidth
      for (let x = 0; x < canvasWidth; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvasHeight); ctx.stroke()
      }
      for (let y = 0; y < canvasHeight; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvasWidth, y); ctx.stroke()
      }
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      for (let x = 0; x < canvasWidth; x += gridSize) {
        for (let y = 0; y < canvasHeight; y += gridSize) {
          ctx.beginPath(); ctx.arc(x, y, nodeRadius, 0, Math.PI * 2); ctx.fill()
        }
      }
    }

    let running = false
    const start = () => {
      if (running || prefersReducedMotion) return
      running = true
      // Recompute in case the canvas mounted while offscreen / collapsed.
      setCanvasDimensions()
      animationFrameId = requestAnimationFrame(draw)
    }
    const stop = () => {
      running = false
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }

    // Only animate while the canvas is on-screen — pausing offscreen removes
    // continuous main-thread work that otherwise runs for the whole page.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0 }
    )

    if (prefersReducedMotion) {
      drawStaticFrame()
    } else {
      observer.observe(canvas)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
      stop()
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 1 }} />
  )
}
