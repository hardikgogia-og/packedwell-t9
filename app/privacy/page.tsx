import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { LegalContent, type LegalSection } from '@/components/legal-content'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PackedWell collects, uses and protects the information you share with us.',
}

const sections: LegalSection[] = [
  {
    heading: '1. Overview',
    body: [
      `${site.name} respects your privacy. This policy explains what information we collect when you use our website or contact us, and how we use and protect it.`,
    ],
  },
  {
    heading: '2. Information We Collect',
    body: [
      'When you submit an enquiry, we may collect the information you provide, such as your name, company name, phone number, email address and details of your packaging requirement.',
      'This website does not store enquiry data on its own servers. Enquiries submitted through the contact form are sent directly to us via WhatsApp using the details you provide.',
    ],
  },
  {
    heading: '3. How We Use Your Information',
    body: [
      'We use the information you share solely to respond to your enquiry, prepare quotations, and communicate with you about your packaging requirements. We do not sell or rent your personal information to third parties.',
    ],
  },
  {
    heading: '4. Cookies & Analytics',
    body: [
      'We may use basic analytics to understand how visitors interact with our website so we can improve it. Any such data is aggregated and does not personally identify you.',
    ],
  },
  {
    heading: '5. Data Security',
    body: [
      'We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: '6. Your Rights',
    body: [
      `You may request access to, correction of, or deletion of the personal information you have shared with us by contacting ${site.email}.`,
    ],
  },
  {
    heading: '7. Contact',
    body: [
      `If you have any questions about this Privacy Policy, contact us at ${site.email} or ${site.phoneDisplay}.`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle the information you share with PackedWell."
      />
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <LegalContent sections={sections} />
      </section>
    </>
  )
}
