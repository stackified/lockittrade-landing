import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 pt-36">
      <Navbar />
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 md:p-12">
          <ContactForm
            title="Enterprise Solutions"
            description="Interested in Lock It Trade for your prop firm or trading organization? Let's discuss how we can help scale your traders' performance."
            subject="Enterprise Solutions Inquiry"
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
