import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BentoFeatures } from "@/components/bento-features"
import { NewsSection } from "@/components/news-section"
import { TraderTypeSelector } from "@/components/trader-type-selector"
import { GamificationSection } from "@/components/gamification-section"
import { BacktestingComingSoon } from "@/components/backtesting-coming-soon"
import { AffiliateSection } from "@/components/affiliate-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { BrokerLogos } from "@/components/broker-logos"
import { CommunitySection } from "@/components/community-section"
import { WhyLockItTradeSection } from "@/components/why-lock-it-trade-section"
import { Footer } from "@/components/footer"

// Below-the-fold sections are wrapped in `.cv-auto` (content-visibility: auto)
// so the browser skips their layout/paint until they're scrolled near —
// cutting initial render work without removing their copy from the static HTML.
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <BrokerLogos />
      <BentoFeatures />
      <div className="cv-auto">
        <NewsSection />
      </div>
      <div className="cv-auto">
        <TraderTypeSelector />
      </div>
      <div className="cv-auto">
        <GamificationSection />
      </div>
      <div className="cv-auto">
        <BacktestingComingSoon />
      </div>
      <div className="cv-auto">
        <AffiliateSection />
      </div>
      <div className="cv-auto">
        <LeaderboardSection />
      </div>
      <div className="cv-auto">
        <WhyLockItTradeSection />
      </div>
      <div className="cv-auto">
        <CommunitySection />
      </div>
      <Footer />
    </main>
  )
}
