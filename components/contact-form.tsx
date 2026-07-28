'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

const initial = {
  name: '',
  company: '',
  phone: '',
  email: '',
  requirement: '',
  quantity: '',
  message: '',
}

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true, full: false },
  { name: 'company', label: 'Company Name', type: 'text', required: false, full: false },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true, full: false },
  { name: 'email', label: 'Email', type: 'email', required: false, full: false },
  { name: 'quantity', label: 'Quantity Required', type: 'text', required: false, full: false },
  { name: 'requirement', label: 'Packaging Requirement', type: 'text', required: true, full: false },
] as const

export function ContactForm() {
  const [values, setValues] = useState(initial)

  const update = (key: string, value: string) =>
    setValues((v) => ({ ...v, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      'New enquiry via PackedWell website:',
      values.name && `Name: ${values.name}`,
      values.company && `Company: ${values.company}`,
      values.phone && `Phone: ${values.phone}`,
      values.email && `Email: ${values.email}`,
      values.requirement && `Requirement: ${values.requirement}`,
      values.quantity && `Quantity: ${values.quantity}`,
      values.message && `Message: ${values.message}`,
    ].filter(Boolean)
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-2 text-sm text-muted-foreground"
            >
              {field.label}
              {field.required && <span className="ml-1 text-gold">*</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name as keyof typeof values]}
              onChange={(e) => update(field.name, e.target.value)}
              className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 text-sm text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto"
      >
        <MessageCircle className="h-5 w-5" />
        Send Enquiry via WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        Submitting opens WhatsApp with your enquiry pre-filled to{' '}
        {site.phoneDisplay}. No data is stored on this website.
      </p>
    </form>
  )
}
