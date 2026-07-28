'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, site, whatsappLink } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="PackedWell home" className="relative z-10">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm tracking-wide transition-colors hover:text-gold',
                  active ? 'text-gold' : 'text-foreground/80',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink('Hello PackedWell, I would like a quote.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-gold px-5 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background/98 backdrop-blur-md transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-[520px]' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-6 sm:px-6" aria-label="Mobile">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-3 text-base transition-colors',
                  active ? 'text-gold' : 'text-foreground/80 hover:text-gold',
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href={whatsappLink('Hello PackedWell, I would like a quote.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Request a Quote on WhatsApp
          </a>
          <p className="mt-4 px-3 text-sm text-muted-foreground">{site.phoneDisplay}</p>
        </nav>
      </div>
    </header>
  )
}
