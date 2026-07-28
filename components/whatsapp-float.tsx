import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink('Hello PackedWell, I would like to discuss my packaging requirement.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PackedWell on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  )
}
