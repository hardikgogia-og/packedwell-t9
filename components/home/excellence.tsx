import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { manufacturingSteps } from '@/lib/site'

export function Excellence() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <SectionHeading
        eyebrow="Manufacturing Excellence"
        title="An End-to-End Process, Perfected"
        description="Every PackedWell order flows through a disciplined, quality-driven process — from first concept to final dispatch."
        align="center"
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {manufacturingSteps.map((step, i) => (
          <Reveal
            key={step.title}
            delay={(i % 4) * 70}
            className="group bg-card p-8 transition-colors hover:bg-background"
          >
            <span className="font-serif text-3xl font-semibold text-gold/40 transition-colors group-hover:text-gold">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 font-medium text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Link
          href="/manufacturing"
          className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-foreground"
        >
          Explore our manufacturing process
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  )
}
