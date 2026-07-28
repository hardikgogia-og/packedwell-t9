import { ShieldCheck, Palette, Cpu, Truck, Gem } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality Standards',
    text: 'Rigorous multi-point inspection ensures every unit meets exacting premium benchmarks.',
  },
  {
    icon: Palette,
    title: 'Custom Solutions',
    text: 'Structures, materials and finishes engineered around your product and brand identity.',
  },
  {
    icon: Cpu,
    title: 'Advanced Manufacturing',
    text: 'Modern machinery and skilled craftsmanship deliver precision at scale.',
  },
  {
    icon: Truck,
    title: 'Reliable Production',
    text: 'Consistent output and dependable timelines you can plan your launches around.',
  },
  {
    icon: Gem,
    title: 'Brand-Focused Packaging',
    text: 'Packaging designed to elevate perception and create memorable unboxing.',
  },
]

export function WhyChoose() {
  return (
    <section className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose PackedWell"
          title="Trusted By Brands That Refuse To Compromise"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 3) * 80}
              className="rounded-lg border border-border/60 bg-background p-8 transition-colors hover:border-gold/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40">
                <r.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
