import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          blue: "#00A9E0",
          purple: "#9C5FFF",
          green: "#10b981",
          teal: "#00A9E0",
          "teal-light": "#8DE0FF",
        },
        "lt-bg": {
          DEFAULT: "#171717",
          sidebar: "#1C1C1E",
          card: "#232325",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        sansation: ["Sansation", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glow-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-slide": "glow-slide 3s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  // Safelist dynamic classes that might be purged in production
  safelist: [
    // Brand colors
    "text-[#00A9E0]",
    "text-[#9C5FFF]",
    "text-[#10b981]",
    "border-[#00A9E0]",
    "border-[#9C5FFF]",
    "border-[#10b981]",
    "bg-[#00A9E0]",
    "bg-[#9C5FFF]",
    "bg-[#10b981]",
    // Color variations with opacity
    {
      pattern: /text-\[(#00A9E0|#9C5FFF|#10b981)\]/,
    },
    {
      pattern: /border-\[(#00A9E0|#9C5FFF|#10b981)\]/,
    },
    {
      pattern: /bg-\[(#00A9E0|#9C5FFF|#10b981)\]/,
    },
    // Common dynamic classes
    "z-10",
    "z-20",
    "z-30",
    "z-40",
    "z-50",
    "opacity-0",
    "opacity-10",
    "opacity-20",
    "opacity-30",
    "opacity-40",
    "opacity-50",
    "opacity-60",
    "opacity-70",
    "opacity-80",
    "opacity-90",
    "opacity-100",
  ],
} satisfies Config

export default config
