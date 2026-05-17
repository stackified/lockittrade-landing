import { Navbar } from "@/components/navbar"
import { PricingHero } from "@/components/pricing-hero"
import { PricingPlans } from "@/components/pricing-plans"
import { PricingFAQ } from "@/components/pricing-faq"
import { PricingCTA } from "@/components/pricing-cta"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 pt-32 md:pt-40">
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </main>
  )
}
