import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'
import { products, whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Products | Luxury Packaging Solutions',
  description:
    'Explore PackedWell products: luxury rigid boxes, jewellery boxes, perfume packaging, cosmetic packaging, monocartons and corrugated packaging.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="A Complete Range of Premium Packaging"
        description="Every product is fully customisable — engineered around your brand, your product and your production scale."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-24 sm:space-y-32">
          {products.map((product, i) => {
            const reversed = i % 2 === 1
            return (
              <article
                key={product.slug}
                id={product.slug}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <Reveal
                  className={cn(
                    'relative aspect-[4/3] overflow-hidden rounded-lg',
                    reversed && 'lg:order-2',
                  )}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Reveal>

                <Reveal delay={100} className={cn(reversed && 'lg:order-1')}>
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                    {String(i + 1).padStart(2, '0')} — Product
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                    {product.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
                        Applications
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {product.applications.map((a) => (
                          <li
                            key={a}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
                        Features
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {product.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={whatsappLink(`Hello PackedWell, I'm interested in ${product.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire About {product.title}
                  </a>
                </Reveal>
              </article>
            )
          })}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
