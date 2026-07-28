import Image from 'next/image'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero-packaging.png"
        alt="Premium luxury packaging boxes crafted by PackedWell"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Premium Packaging Manufacturer &middot; Gurugram, India
            </span>
          </div>
          <h1 className="text-balance font-serif text-4xl font-medium leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Premium Custom Packaging Solutions For Brands That Matter
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            PackedWell creates luxury paper-based packaging solutions that
            elevate product presentation and create memorable brand experiences.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink('Hello PackedWell, I would like a quote.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-8 py-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { value: '40,000', label: 'Sq. Ft. Facility' },
              { value: '8+', label: 'Packaging Verticals' },
              { value: '100%', label: 'Custom Made' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-gold md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
