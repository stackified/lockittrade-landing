import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 pt-36">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="text-zinc-300 space-y-6 leading-relaxed">
            <p className="text-zinc-400 text-sm">Last updated: January 25, 2025</p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Overview</h2>
              <p>
                This Privacy Policy explains how Lock It Trade (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, and protects your
                personal information when you use the platform. By accessing Lock It Trade, you consent to the practices
                described here.
              </p>
              <p className="mt-4">
                This policy works in tandem with our Terms of Service. If you do not agree with this Privacy Policy, you
                should discontinue use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p>
                <strong>Account data</strong> such as your name, email address, username, password, and profile details
                that you provide during registration or updates to your profile.
              </p>
              <p className="mt-3">
                <strong>Trading and journaling information</strong> you choose to input or sync through integrations,
                including trade logs, notes, performance metrics, and uploaded documents.
              </p>
              <p className="mt-3">
                <strong>Usage data</strong> such as device information, browser type, IP address, timestamps,
                clickstream data, and diagnostic logs that help us secure and improve the platform.
              </p>
              <p className="mt-3">
                <strong>Communication records</strong> when you interact with support, respond to surveys, or
                participate in feedback programs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Information</h2>
              <p>
                <strong>To deliver core functionality</strong> including account authentication, journaling, analytics,
                notifications, and user support.
              </p>
              <p className="mt-3">
                <strong>To personalize your experience</strong>, such as surfacing relevant insights, recently used
                tools, or onboarding content.
              </p>
              <p className="mt-3">
                <strong>To process payments</strong>, manage subscriptions, and prevent fraud or misuse.
              </p>
              <p className="mt-3">
                <strong>To monitor platform performance</strong>, troubleshoot issues, and conduct aggregated analytics
                that help us improve product reliability and user experience.
              </p>
              <p className="mt-3">
                <strong>To send transactional emails</strong>, security alerts, and product updates that relate to your
                account. You may opt out of non-essential marketing communications at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Legal Bases for Processing</h2>
              <p>
                We rely on several legal bases to process information: contractual necessity (to provide the services
                you request), legitimate interests (to maintain and improve the platform), consent (where required by
                law), and compliance with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Sharing and Disclosure</h2>
              <p>
                <strong>Service providers:</strong> We work with trusted partners such as Supabase (infrastructure),
                Vercel (hosting), Stripe (billing), Resend (email), and analytics vendors who process data on our behalf
                under contractual obligations.
              </p>
              <p className="mt-3">
                <strong>Professional advisors:</strong> We may share limited data with legal, compliance, or accounting
                professionals when necessary.
              </p>
              <p className="mt-3">
                <strong>Legal requirements:</strong> We may disclose information in response to lawful requests, to
                protect our rights, or to prevent fraud and security incidents.
              </p>
              <p className="mt-3">
                <strong>Business transfers:</strong> If Lock It Trade is involved in a merger, acquisition, or sale of
                assets, your information may be transferred as part of that transaction, subject to continued protection
                under this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies and Similar Technologies</h2>
              <p>
                We use cookies, local storage, and similar technologies to maintain sessions, remember preferences, and
                analyze usage. You can control cookies through your browser, but disabling them may limit functionality.
              </p>
              <p className="mt-3">
                Certain third-party integrations may set their own cookies or tracking technologies. We recommend
                reviewing their policies for additional details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
              <p>
                We retain personal information for as long as required to provide the service, comply with legal
                obligations, resolve disputes, and enforce agreements.
              </p>
              <p className="mt-3">
                You can request deletion of your account data, subject to any retention obligations we must follow for
                legal or security reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Security</h2>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p>
                  We implement administrative, technical, and physical safeguards to protect your information, including
                  encryption, access controls, and continuous monitoring.
                </p>
                <p className="mt-3">
                  Despite these efforts, no online service can guarantee absolute security. You share responsibility for
                  keeping your account secure by using strong passwords, enabling optional security features, and
                  promptly reporting suspicious activity to legal@lockittrade.com.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Your Rights and Choices</h2>
              <p>You may access, update, or correct your profile information inside the application.</p>
              <p className="mt-3">
                You can request deletion of your account or export of your data by contacting legal@lockittrade.com. We
                may need to verify your identity before fulfilling your request.
              </p>
              <p className="mt-3">
                If you are located in a region with specific privacy regulations (such as the EU, UK, or certain U.S.
                states), you may have additional rights over your personal data. We honor these rights in accordance
                with applicable laws.
              </p>
              <p className="mt-3">
                You can manage email preferences by using the unsubscribe options in non-transactional messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
              <p>
                Lock It Trade is operated from the United States. When you use the platform, your information may be
                transferred to and processed in the U.S. or other countries that may have different data protection laws
                than your jurisdiction.
              </p>
              <p className="mt-3">
                We rely on approved safeguards such as contractual clauses and service provider commitments to protect
                data transferred internationally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Children&apos;s Privacy</h2>
              <p>
                Lock It Trade is not intended for individuals under 18. We do not knowingly collect personal information
                from minors. If we learn that a minor has provided personal data, we will take steps to delete that
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy to reflect operational, legal, or regulatory changes. When updates are
                significant, we will notify you through the platform or via email.
              </p>
              <p className="mt-3">
                Your continued use of Lock It Trade after the effective date of an updated policy signifies acceptance
                of the revisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact</h2>
              <div className="bg-zinc-800/30 rounded-lg p-4">
                <p>
                  For privacy questions, data requests, or security concerns, email legal@lockittrade.com. We strive to
                  respond within five business days.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
