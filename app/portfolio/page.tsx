import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { PortfolioGallery } from '@/components/portfolio-gallery'

export const metadata: Metadata = {
  title: 'Portfolio | PackedWell Packaging Work',
  description:
    'Browse the PackedWell portfolio — luxury rigid boxes, jewellery, perfume and cosmetic packaging, custom projects and our manufacturing facility.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A Showcase of Craft and Detail"
        description="A selection of premium packaging and manufacturing work. Images are representative and can be replaced with your own project photography."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <PortfolioGallery />
      </section>

      <CtaSection heading="Let's Add Your Brand to Our Portfolio" />
    </>
  )
}
