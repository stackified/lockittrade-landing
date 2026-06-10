import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BentoFeatures } from "@/components/bento-features"
import { NewsSection } from "@/components/news-section"
import { TraderTypeSelector } from "@/components/trader-type-selector"
import { GamificationSection } from "@/components/gamification-section"
import { BrokerLogos } from "@/components/broker-logos"
import { CommunitySection } from "@/components/community-section"
import { WhyLockItTradeSection } from "@/components/why-lock-it-trade-section"
import { BacktestingComingSoon } from "@/components/backtesting-coming-soon"
import { AffiliateSection } from "@/components/affiliate-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <BrokerLogos />
      <BentoFeatures />
      <NewsSection />
      <TraderTypeSelector />
      <GamificationSection />
      <BacktestingComingSoon />
      <AffiliateSection />
      <LeaderboardSection />
      <WhyLockItTradeSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
