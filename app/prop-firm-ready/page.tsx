import { Navbar } from "@/components/navbar"
import { PropFirmReadyHero } from "@/components/prop-firm-ready-hero"
import { ReadinessScoreBreakdown } from "@/components/readiness-score-breakdown"
import { RequirementsChecklist } from "@/components/requirements-checklist"
import { PropFirmMatcher } from "@/components/prop-firm-matcher"
import { Footer } from "@/components/footer"

export default function PropFirmReadyPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <PropFirmReadyHero />
      <ReadinessScoreBreakdown />
      <RequirementsChecklist />
      <PropFirmMatcher />
      <Footer />
    </main>
  )
}
