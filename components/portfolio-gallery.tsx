'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type Item = {
  src: string
  title: string
  category: string
}

const items: Item[] = [
  { src: '/images/product-rigid-box.png', title: 'Signature Rigid Box', category: 'Luxury Rigid Boxes' },
  { src: '/images/portfolio-1.png', title: 'Brand Unboxing Set', category: 'Custom Projects' },
  { src: '/images/product-jewellery-box.png', title: 'Fine Jewellery Case', category: 'Jewellery Packaging' },
  { src: '/images/product-perfume.png', title: 'Fragrance Presentation Box', category: 'Perfume Packaging' },
  { src: '/images/portfolio-2.png', title: 'Jewellery Box Collection', category: 'Jewellery Packaging' },
  { src: '/images/product-cosmetic.png', title: 'Skincare Carton Range', category: 'Cosmetic Packaging' },
  { src: '/images/portfolio-3.png', title: 'Gold Foil Detailing', category: 'Custom Projects' },
  { src: '/images/factory.png', title: 'Production Floor', category: 'Factory' },
  { src: '/images/portfolio-4.png', title: 'Hand Finishing', category: 'Factory' },
]

const categories = [
  'All',
  'Luxury Rigid Boxes',
  'Jewellery Packaging',
  'Perfume Packaging',
  'Cosmetic Packaging',
  'Custom Projects',
  'Factory',
]

export function PortfolioGallery() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-5 py-2 text-sm transition-colors',
              active === cat
                ? 'border-gold bg-gold text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-gold hover:text-gold',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <Reveal
            key={item.src + item.title}
            delay={(i % 3) * 70}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-border/60"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {item.category}
              </span>
              <h3 className="mt-1 font-serif text-xl font-medium text-foreground">
                {item.title}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
