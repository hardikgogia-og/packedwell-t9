import type { Metadata } from 'next'
import Image from 'next/image'
import { Eye, Target, Factory, BadgeCheck, Lightbulb } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About PackedWell | Premium Packaging Manufacturer',
  description:
    'Learn about PackedWell — a premium paper-based packaging manufacturer in Gurugram, India, dedicated to craftsmanship, quality and innovation.',
}

const pillars = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be recognised as India’s most trusted premium packaging partner — the manufacturer brands turn to when presentation, quality and consistency cannot be compromised. We aspire to set the benchmark for luxury paper-based packaging, blending craftsmanship with scale so that businesses of every size can access world-class solutions.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To create packaging that protects products, honours brands and delights customers. We combine structural engineering, refined finishing and disciplined manufacturing to deliver solutions that consistently exceed expectations — on quality, on time and at scale.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Excellence',
    text: 'From our 40,000 sq. ft. facility in Gurugram, we operate an integrated production environment covering design, sampling, printing, finishing and quality control. This end-to-end capability gives us complete control over every detail and every deadline.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Commitment',
    text: 'Quality is engineered into every stage of our process, not inspected in at the end. Premium materials, calibrated machinery and multi-point inspection ensure that what leaves our factory reflects the standards our clients’ brands demand.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Craftsmanship',
    text: 'We continually refine our techniques — exploring new materials, finishes and structural ideas — while preserving the human craftsmanship that gives premium packaging its soul. Innovation and tradition work hand in hand at PackedWell.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PackedWell"
        title="Crafting Packaging Worthy of the Brands It Carries"
        description="PackedWell is a premium packaging manufacturer focused on creating high-quality customised packaging solutions for brands that value presentation and detail."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/factory.png"
              alt="Inside the PackedWell manufacturing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Large-Scale Manufacturer With a Boutique Obsession for Detail"
            />
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                PackedWell is a large-scale paper-based packaging manufacturer
                operating from a {site.facility} manufacturing facility in{' '}
                {site.location}. We specialise in premium customised packaging
                solutions — from luxury rigid boxes and jewellery packaging to
                perfume, cosmetic, monocarton and corrugated solutions.
              </p>
              <p>
                Our clients are jewellery houses, fashion labels, beauty and
                cosmetic companies, lifestyle brands, export businesses and
                premium product companies. For each of them, packaging is more
                than a container — it is the first physical expression of their
                brand. That belief drives everything we make.
              </p>
              <p>
                By bringing design, production, printing, finishing and quality
                control under one roof, we combine the reliability of a
                large-scale manufacturer with the care of a specialist studio.
                The result is packaging that looks exceptional, performs
                flawlessly and arrives exactly when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <SectionHeading
            eyebrow="What Drives Us"
            title="The Principles Behind Every Box We Make"
            align="center"
          />
          <div className="mt-16 space-y-px overflow-hidden rounded-lg border border-border/60 bg-border/60">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={(i % 2) * 80}
                className="flex flex-col gap-6 bg-card p-8 sm:flex-row sm:p-10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40">
                  <p.icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
