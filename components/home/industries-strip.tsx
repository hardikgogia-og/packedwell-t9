import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { industries } from '@/lib/site'

export function IndustriesStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <SectionHeading
        eyebrow="Industries Served"
        title="Packaging For The World's Most Discerning Categories"
      />
      <div className="mt-14 divide-y divide-border/60 border-y border-border/60">
        {industries.map((industry, i) => (
          <Reveal key={industry.name} delay={(i % 4) * 60}>
            <Link
              href="/industries"
              className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-card/60"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-sm text-gold/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl font-medium text-foreground transition-colors group-hover:text-gold sm:text-3xl">
                  {industry.name}
                </h3>
              </div>
              <p className="hidden max-w-md text-sm leading-relaxed text-muted-foreground md:block">
                {industry.description}
              </p>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-gold" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
