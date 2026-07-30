import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { manufacturingSteps } from '@/lib/site'
import { InstagramReels } from '@/components/InstagramReels'

export const metadata: Metadata = {
  title: 'Manufacturing Process | PackedWell',
  description:
    'Discover the PackedWell manufacturing process — from requirement understanding and structural design through to production, finishing, quality control and dispatch.',
}

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing Process"
        title="From First Concept to Final Dispatch"
        description="A disciplined, transparent process that turns your packaging brief into flawlessly finished, production-ready boxes."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="The Journey"
              title="Eight Stages of Precision"
              description="Each stage is engineered for quality and accountability, giving you confidence at every step of production."
            />
            <Reveal className="mt-10 overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/portfolio-4.png"
                  alt="Craftsmanship at the PackedWell facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <ol className="relative border-l border-border/60">
            {manufacturingSteps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={(i % 3) * 60}
                as="li"
                className="relative mb-10 pl-10 last:mb-0"
              >
                <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border border-gold/50 bg-background text-[0.65rem] font-semibold text-gold">
                  {i + 1}
                </span>
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
<InstagramReels />
      <CtaSection heading="Have a Packaging Project in Mind?" />
    </>
  )
}
