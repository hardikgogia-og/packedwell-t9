import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/60 font-serif text-lg font-semibold text-gold">
        Packedwell-logo.png
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-wide text-foreground">
          Packed<span className="text-gold">Well</span>
        </span>
        <span className="mt-0.5 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
          Premium Packaging
        </span>
      </span>
    </span>
  )
}
