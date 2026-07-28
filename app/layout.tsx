import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Jost, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://packedwell.com'),
  title: {
    default: 'PackedWell | Premium Custom Packaging Manufacturer in India',
    template: '%s | PackedWell',
  },
  description:
    'PackedWell is a premium paper-based packaging manufacturer in Gurugram, India. We craft luxury rigid boxes, jewellery boxes, perfume, cosmetic, monocarton and corrugated packaging for leading brands.',
  keywords: [
    'custom packaging manufacturer India',
    'rigid box manufacturer India',
    'luxury packaging manufacturer',
    'jewellery box manufacturer',
    'perfume packaging manufacturer',
    'paper packaging solutions',
    'packaging company Gurugram',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'PackedWell | Premium Custom Packaging Manufacturer',
    description:
      'Luxury paper-based packaging solutions crafted from a 40,000 sq. ft. facility in Gurugram, India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'PackedWell',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1712',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsappFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
