# 🔒 LockItTrade Landing Page

Welcome to the official repository for the **LockItTrade Landing Page** — a premium, high-fidelity, and feature-rich front-end application designed for modern traders, prop firm candidates, and trading communities.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, this platform showcases LockItTrade's cutting-edge risk management tools, trading gamification features, and prop firm readiness evaluation utilities.

---

## ✨ Features & Interactive Tools

The LockItTrade landing page is more than just a marketing site. It features several fully interactive, custom-built tools designed to demonstrate the power of the core LockItTrade ecosystem:

### 🎯 1. Prop Firm Readiness Matcher
* **Ready Hero & Score Gauge**: Evaluates a trader's performance metrics and displays a visual gauge of their readiness for prop firm funding.
* **Requirements Checklist**: A dynamic, checklist-driven evaluation tool tracking daily risk, compliance parameters, and profit target consistency.
* **Prop Firm Matcher**: Matches traders with custom-tailored prop firms based on their individual style, funding goals, and risk profiles.

### ⚠️ 2. Interactive Violations Tracker
* A realistic mockup dashboard showcasing simulated and tracked live trading rule violations.
* Tracks parameters such as:
  * **Daily Drawdown Limit**
  * **Max Overall Drawdown**
  * **Consistency Rule Violations**
  * **News Trading Restrictions**
  * **Weekend Holding Violations**

### 📊 3. Strategy Compliance Monitor
* Monitors active and backtested trading strategies to evaluate how closely they adhere to pre-defined risk constraints.
* Visualizes data using beautiful, interactive charts built on **Recharts**.

### 🧩 4. Premium Bento Grid Showcase
* Displays the app's advanced feature set (e.g., AI Insights, Automated Risk Controls, Discord/Slack integrations) in a modern, responsive **Bento Grid** layout.

### 🎮 5. Gamification Section
* Introduces trading challenges, badges, leaderboards, and achievements to keep traders engaged, disciplined, and constantly improving.

### 🎨 6. Rich Visual Design
* **Aesthetics**: Sleek dark mode, harmonious HSL tailored palettes, smooth gradients, and glassmorphism.
* **Animations**: Fluid micro-animations, hover effects, and interactive states driven by **Framer Motion**.
* **Backgrounds**: Custom particle animations and AI grid visuals to create an immersive user experience.

---

## 🛠️ Tech Stack & Libraries

This project uses modern web technologies optimized for speed, scalability, and premium user experience:

* **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Component Library**: [Radix UI](https://www.radix-ui.com/) (Headless, accessible UI primitives)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Charts & Data Viz**: [Recharts](https://recharts.org/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Notifications**: [Sonner](https://sonner.dev/)
* **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or higher is recommended) and a package manager like `npm`, `yarn`, or `bun`.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/stackified/lockittrade-landing.git
   cd lockittrade-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   # or
   bun run build
   ```

---

## 🌐 Deployment to GitHub Pages

This landing page is configured for static hosting on **GitHub Pages** from the `dev` branch.

### How it Works
1. Next.js is configured for static export (`output: 'export'` in `next.config.mjs`).
2. When `npm run build` is executed, Next.js generates static HTML/CSS/JS files in the `out` directory.
3. These files are served directly on GitHub Pages.

For detailed steps on deploying or configuring custom domains/base paths, please check the [GitHub Pages Setup Workflow](#) section of our deployment guide.
