import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { LegalContent, type LegalSection } from '@/components/legal-content'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions governing the use of the PackedWell website and enquiries.',
}

const sections: LegalSection[] = [
  {
    heading: '1. Introduction',
    body: [
      `These Terms & Conditions govern your use of the ${site.name} website and any enquiry you submit through it. By accessing this website you agree to be bound by these terms.`,
    ],
  },
  {
    heading: '2. Use of the Website',
    body: [
      'This website is provided for informational purposes and to enable prospective clients to learn about our packaging capabilities and submit enquiries. You agree to use the website only for lawful purposes and not to misuse any content or functionality.',
    ],
  },
  {
    heading: '3. Quotations & Enquiries',
    body: [
      'Any product descriptions, specifications or images shown on this website are indicative and do not constitute a binding offer. Pricing, lead times and specifications are confirmed only through a formal written quotation issued by our team.',
      'Enquiries submitted through the website or WhatsApp are used solely to respond to your request.',
    ],
  },
  {
    heading: '4. Intellectual Property',
    body: [
      `All content on this website, including text, graphics, logos and images, is the property of ${site.name} or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute this content without prior written consent.`,
    ],
  },
  {
    heading: '5. Limitation of Liability',
    body: [
      `${site.name} shall not be liable for any indirect or consequential loss arising from the use of this website. While we strive to keep information accurate and up to date, we make no warranties regarding completeness or accuracy.`,
    ],
  },
  {
    heading: '6. Changes to These Terms',
    body: [
      'We may update these Terms & Conditions from time to time. Continued use of the website after any change constitutes acceptance of the revised terms.',
    ],
  },
  {
    heading: '7. Contact',
    body: [
      `For any questions about these terms, contact us at ${site.email} or ${site.phoneDisplay}.`,
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using the PackedWell website."
      />
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <LegalContent sections={sections} />
      </section>
    </>
  )
}
