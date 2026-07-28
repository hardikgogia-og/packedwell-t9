import type { Metadata } from 'next'
import { Gem, Shirt, Sparkles, FlaskConical, Home, Gift, Globe } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'
import { industries } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Industries We Serve | PackedWell',
  description:
    'PackedWell serves jewellery, fashion, beauty, cosmetics, lifestyle, corporate gifting and export brands with premium custom packaging.',
}

const icons = [Gem, Shirt, Sparkles, FlaskConical, Home, Gift, Globe]

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Trusted Across Premium Categories"
        description="We craft packaging for brands where presentation, protection and perception truly matter."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={industry.name}
                delay={(i % 3) * 80}
                className="group flex h-full flex-col rounded-lg border border-border/60 bg-card p-8 transition-colors hover:border-gold/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 transition-colors group-hover:bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h2 className="mt-6 font-serif text-2xl font-medium text-foreground">
                  {industry.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaSection heading="Packaging Built for Your Industry" />
    </>
  )
}
