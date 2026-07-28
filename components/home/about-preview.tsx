import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, MapPin, Sparkles, Settings2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const points = [
  { icon: Building2, title: '40,000 Sq. Ft. Facility', text: 'A large-scale manufacturing plant purpose-built for premium packaging.' },
  { icon: MapPin, title: 'Gurugram, India', text: 'Strategically located for domestic supply and global export.' },
  { icon: Sparkles, title: 'Premium Expertise', text: 'Deep craftsmanship across luxury rigid and specialty packaging.' },
  { icon: Settings2, title: 'Custom Manufacturing', text: 'Every solution engineered to your product, brand and scale.' },
]

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/factory.png"
              alt="PackedWell manufacturing facility in Gurugram"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-lg border border-gold/40 bg-card px-8 py-6 shadow-xl sm:block">
            <p className="font-serif text-4xl font-semibold text-gold">40k</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Sq. Ft. Manufacturing
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About PackedWell"
            title="A Manufacturer Built Around Premium Packaging"
            description="PackedWell is a large-scale paper-based packaging manufacturer operating from a 40,000 sq. ft. facility in Gurugram, India. We specialise in premium customised packaging that protects products and elevates brands."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="flex gap-4">
                <p.icon className="h-6 w-6 shrink-0 text-gold" />
                <div>
                  <h3 className="font-medium text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-foreground"
            >
              Discover our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
