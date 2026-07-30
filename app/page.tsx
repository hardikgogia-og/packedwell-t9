import { InstagramReels } from '@/components/InstagramReels'
import { Hero } from '@/components/home/hero'
import { AboutPreview } from '@/components/home/about-preview'
import { Categories } from '@/components/home/categories'
import { Excellence } from '@/components/home/excellence'
import { WhyChoose } from '@/components/home/why-choose'
import { IndustriesStrip } from '@/components/home/industries-strip'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Categories />
      <Excellence />
      <WhyChoose />
      <IndustriesStrip />
      <CtaSection />
    </>
  )
}
