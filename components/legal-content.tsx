import { Reveal } from '@/components/reveal'

export type LegalSection = {
  heading: string
  body: string[]
}

export function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      {sections.map((section, i) => (
        <Reveal key={section.heading} delay={(i % 3) * 60}>
          <h2 className="font-serif text-2xl font-medium text-foreground">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            {section.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
