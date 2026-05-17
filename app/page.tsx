import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BentoFeatures } from "@/components/bento-features"
import { TraderTypeSelector } from "@/components/trader-type-selector"
import { GamificationSection } from "@/components/gamification-section"
import { BrokerLogos } from "@/components/broker-logos"
import { CommunitySection } from "@/components/community-section"
import { WhyLockItTradeSection } from "@/components/why-lock-it-trade-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <BrokerLogos />
      <BentoFeatures />
      <TraderTypeSelector />
      <GamificationSection />
      <WhyLockItTradeSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
