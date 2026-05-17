import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 pt-36">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="text-zinc-300 space-y-6 leading-relaxed">
            <p className="text-zinc-400 text-sm">Last updated: January 7, 2025</p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By creating an account or using any feature of Lock It Trade, you agree to these Terms of Service
                (&quot;Terms&quot;). If you do not agree, you must stop using the platform immediately.
              </p>
              <p className="mt-3">
                You must be at least 18 years old and capable of entering into a binding contract. You are responsible
                for ensuring these Terms comply with the laws of your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Platform Overview</h2>
              <p>
                Lock It Trade provides tools for journaling, analytics, education, and automation designed to help
                traders manage their performance. The platform does not execute trades, provide brokerage services, or
                make investment decisions on your behalf.
              </p>
              <p className="mt-3">
                Any insights, analytics, or recommendations generated within the platform are informational only and
                should not be interpreted as financial, legal, or tax advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts and Security</h2>
              <p>
                You are responsible for the accuracy of the information you provide, maintaining the security of your
                credentials, and for all activity that occurs under your account.
              </p>
              <p className="mt-3">
                Notify us immediately at{" "}
                <a href="mailto:legal@lockittrade.com" className="text-blue-400 hover:text-blue-300">
                  legal@lockittrade.com
                </a>{" "}
                if you suspect unauthorized access, compromised credentials, or any other security incident.
              </p>
              <p className="mt-3">
                We reserve the right to suspend or terminate accounts that violate these Terms, abuse platform
                resources, or pose security risks to other users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Subscriptions, Billing, and Cancellations</h2>
              <p>
                Paid plans renew automatically at the end of each billing cycle unless you cancel before the renewal
                date. Pricing and plan details are available inside your account and are subject to change with prior
                notice.
              </p>
              <p className="mt-3">
                Some features, including but not limited to advanced analytics and automation tools, may require an
                active subscription. Downgrading or canceling a subscription may remove access to those features.
              </p>
              <p className="mt-3">
                Refund requests are handled on a case-by-case basis. If you believe you have been billed in error,
                contact{" "}
                <a href="mailto:legal@lockittrade.com" className="text-blue-400 hover:text-blue-300">
                  legal@lockittrade.com
                </a>{" "}
                within 14 days of the charge.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Trading Risk Disclosure</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="font-semibold text-yellow-400 mb-2">Important Trading Risk Disclosure:</p>
                <p className="mb-3">
                  Trading foreign exchange, futures, cryptocurrencies, equities, or derivatives carries substantial
                  risk. You may lose more than your initial investment.
                </p>
                <p className="mb-3">
                  Lock It Trade does not guarantee profit, prevent losses, or ensure compliance with any prop firm,
                  broker, or regulatory requirement. You are solely responsible for evaluating and acting upon the
                  information presented.
                </p>
                <p>
                  Historical performance, simulated results, or projections generated by the platform do not guarantee
                  future outcomes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Acceptable Use</h2>
              <p>
                You agree not to misuse the platform, including attempting to access areas you are not authorized to
                use, introducing malware, interfering with other users, or scraping content without permission.
              </p>
              <p className="mt-3">
                You may not use Lock It Trade to violate any applicable laws, engage in fraudulent activity, or
                distribute offensive, defamatory, or infringing content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              <p>
                All platform content, branding, and proprietary features are owned by Res-Trix Solutions LLC and
                protected by intellectual property laws.
              </p>
              <p className="mt-3">
                You retain ownership of the data you upload but grant Lock It Trade a license to store, process, and
                display that data in order to operate the platform. You are responsible for ensuring you have the right
                to provide any content you submit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Services</h2>
              <p>
                Lock It Trade integrates with third parties such as Supabase, Vercel, Stripe, Discord, and Google. Your
                use of these services is subject to their respective terms and policies.
              </p>
              <p className="mt-3">
                We are not responsible for interruptions, data loss, or issues arising from third-party providers, but
                we will take reasonable steps to maintain secure integrations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Disclaimers and Limitation of Liability</h2>
              <p>
                Lock It Trade is provided &quot;as is&quot; and &quot;as available.&quot; We disclaim all warranties, express or implied,
                including warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="mt-3">
                To the maximum extent permitted by law, Lock It Trade, its owners, and affiliates are not liable for any
                indirect, incidental, consequential, or punitive damages, including loss of profits, data, or goodwill.
              </p>
              <p className="mt-3">
                Our total liability for claims arising out of or related to the platform will not exceed the amount you
                paid to Lock It Trade in the twelve months preceding the event giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Lock It Trade, its owners, and affiliates from any claims,
                damages, liabilities, or expenses arising out of your use of the platform, your violation of these
                Terms, or the content you submit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
              <p>
                You may stop using the platform at any time. To cancel a paid subscription, follow the instructions in
                your account settings.
              </p>
              <p className="mt-3">
                We may suspend or terminate access if you breach these Terms, fail to pay fees when due, or create a
                risk for other users. Upon termination, your license to use the platform ends immediately, but sections
                that should survive (including intellectual property, disclaimers, and indemnification) will continue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to These Terms</h2>
              <p>
                We may update these Terms to reflect changes in our services, legal requirements, or business practices.
                When we make material updates, we will provide notice through the platform or via email.
              </p>
              <p className="mt-3">
                Continued use of the platform after updates take effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, excluding its conflict-of-law principles,
                unless otherwise required by the laws of your jurisdiction.
              </p>
              <p className="mt-3">
                Any dispute arising from these Terms will be resolved through confidential binding arbitration in
                accordance with the rules of the American Arbitration Association, unless you reside in a jurisdiction
                that does not permit arbitration of consumer disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Contact</h2>
              <div className="bg-zinc-800/30 rounded-lg p-4">
                <p>
                  For questions about these Terms or to report a violation, contact{" "}
                  <a href="mailto:legal@lockittrade.com" className="text-blue-400 hover:text-blue-300">
                    legal@lockittrade.com
                  </a>
                  . We aim to respond to inquiries within five business days.
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
