"use client"

import { LegalLayout, type LegalSection } from "@/components/legal-layout"
import { ShieldCheck } from "lucide-react"

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          This Privacy Policy explains how Lock It Trade (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, and protects your
          personal information when you use the platform. By accessing Lock It Trade, you consent to the practices
          described here.
        </p>
        <p>
          This policy works in tandem with our Terms of Service. If you do not agree with this Privacy Policy, you
          should discontinue use of the platform.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>
          <strong className="text-white">Account data</strong> such as your name, email address, username, password, and
          profile details that you provide during registration or updates to your profile.
        </p>
        <p>
          <strong className="text-white">Trading and journaling information</strong> you choose to input or sync through
          integrations, including trade logs, notes, performance metrics, and uploaded documents.
        </p>
        <p>
          <strong className="text-white">Usage data</strong> such as device information, browser type, IP address,
          timestamps, clickstream data, and diagnostic logs that help us secure and improve the platform.
        </p>
        <p>
          <strong className="text-white">Communication records</strong> when you interact with support, respond to
          surveys, or participate in feedback programs.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: (
      <>
        <p>
          <strong className="text-white">To deliver core functionality</strong> including account authentication,
          journaling, analytics, notifications, and user support.
        </p>
        <p>
          <strong className="text-white">To personalize your experience</strong>, such as surfacing relevant insights,
          recently used tools, or onboarding content.
        </p>
        <p>
          <strong className="text-white">To process payments</strong>, manage subscriptions, and prevent fraud or misuse.
        </p>
        <p>
          <strong className="text-white">To monitor platform performance</strong>, troubleshoot issues, and conduct
          aggregated analytics that help us improve product reliability and user experience.
        </p>
        <p>
          <strong className="text-white">To send transactional emails</strong>, security alerts, and product updates that
          relate to your account. You may opt out of non-essential marketing communications at any time.
        </p>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing",
    content: (
      <p>
        We rely on several legal bases to process information: contractual necessity (to provide the services you
        request), legitimate interests (to maintain and improve the platform), consent (where required by law), and
        compliance with legal obligations.
      </p>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
    content: (
      <>
        <p>
          <strong className="text-white">Service providers:</strong> We work with trusted partners such as Supabase
          (infrastructure), Vercel (hosting), Stripe (billing), Resend (email), and analytics vendors who process data on
          our behalf under contractual obligations.
        </p>
        <p>
          <strong className="text-white">Professional advisors:</strong> We may share limited data with legal,
          compliance, or accounting professionals when necessary.
        </p>
        <p>
          <strong className="text-white">Legal requirements:</strong> We may disclose information in response to lawful
          requests, to protect our rights, or to prevent fraud and security incidents.
        </p>
        <p>
          <strong className="text-white">Business transfers:</strong> If Lock It Trade is involved in a merger,
          acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to
          continued protection under this policy.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          We use cookies, local storage, and similar technologies to maintain sessions, remember preferences, and analyze
          usage. You can control cookies through your browser, but disabling them may limit functionality.
        </p>
        <p>
          Certain third-party integrations may set their own cookies or tracking technologies. We recommend reviewing
          their policies for additional details.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain personal information for as long as required to provide the service, comply with legal obligations,
          resolve disputes, and enforce agreements.
        </p>
        <p>
          You can request deletion of your account data, subject to any retention obligations we must follow for legal or
          security reasons.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <div className="bg-[#00A9E0]/10 border border-[#00A9E0]/20 rounded-xl p-4">
        <p>
          We implement administrative, technical, and physical safeguards to protect your information, including
          encryption, access controls, and continuous monitoring.
        </p>
        <p className="mt-3">
          Despite these efforts, no online service can guarantee absolute security. You share responsibility for keeping
          your account secure by using strong passwords, enabling optional security features, and promptly reporting
          suspicious activity to legal@lockittrade.com.
        </p>
      </div>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights and Choices",
    content: (
      <>
        <p>You may access, update, or correct your profile information inside the application.</p>
        <p>
          You can request deletion of your account or export of your data by contacting legal@lockittrade.com. We may
          need to verify your identity before fulfilling your request.
        </p>
        <p>
          If you are located in a region with specific privacy regulations (such as the EU, UK, or certain U.S. states),
          you may have additional rights over your personal data. We honor these rights in accordance with applicable
          laws.
        </p>
        <p>You can manage email preferences by using the unsubscribe options in non-transactional messages.</p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: (
      <>
        <p>
          Lock It Trade is operated from the United States. When you use the platform, your information may be transferred
          to and processed in the U.S. or other countries that may have different data protection laws than your
          jurisdiction.
        </p>
        <p>
          We rely on approved safeguards such as contractual clauses and service provider commitments to protect data
          transferred internationally.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: (
      <p>
        Lock It Trade is not intended for individuals under 18. We do not knowingly collect personal information from
        minors. If we learn that a minor has provided personal data, we will take steps to delete that information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy to reflect operational, legal, or regulatory changes. When updates are
          significant, we will notify you through the platform or via email.
        </p>
        <p>
          Your continued use of Lock It Trade after the effective date of an updated policy signifies acceptance of the
          revisions.
        </p>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information when you use Lock It Trade."
      lastUpdated="January 25, 2025"
      icon={ShieldCheck}
      sections={sections}
    />
  )
}
