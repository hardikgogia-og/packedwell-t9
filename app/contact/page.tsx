import type { Metadata } from 'next'
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { site, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact PackedWell | Request a Packaging Quote',
  description:
    'Get in touch with PackedWell for premium custom packaging. Send an enquiry or chat with us on WhatsApp at +91 70113 10430.',
}

const details = [
  { icon: MapPin, label: 'Location', value: site.location },
  { icon: Phone, label: 'Phone', value: site.phoneDisplay, href: `tel:+${site.phone}` },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Sat, 10:00 – 19:00 IST' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Packaging"
        description="Share your requirement and our team will get back to you with the right solution. For the fastest response, message us directly on WhatsApp."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Reveal>
              <a
                href={whatsappLink('Hello PackedWell, I would like to chat about my packaging requirement.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-gold/40 bg-card p-6 transition-colors hover:border-gold"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground">
                  <MessageCircle className="h-7 w-7" />
                </span>
                <span>
                  <span className="block font-serif text-xl font-medium text-foreground">
                    Chat With PackedWell
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {site.phoneDisplay} &middot; Fastest response
                  </span>
                </span>
              </a>
            </Reveal>

            <div className="mt-8 space-y-6">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 70} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40">
                    <d.icon className="h-5 w-5 text-gold" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block text-foreground transition-colors hover:text-gold"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-foreground">{d.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100} className="rounded-lg border border-border/60 bg-card p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Send an Enquiry
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked with <span className="text-gold">*</span> are required.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
