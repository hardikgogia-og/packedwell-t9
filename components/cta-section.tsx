import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappLink } from '@/lib/site'

export function CtaSection({
  heading = "Let's Create Packaging That Represents Your Brand",
  subheading = 'Partner with a manufacturer obsessed with craft, consistency and detail. Tell us about your product and we will craft packaging worthy of it.',
}: {
  heading?: string
  subheading?: string
}) {
  return (
    <section className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            {subheading}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink('Hello PackedWell, I would like a quote for my packaging.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Get Quote on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Send an Enquiry
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
