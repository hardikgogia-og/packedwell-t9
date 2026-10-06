import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center', className)}>
      <Image
        src="/images/image.png"
        alt="PackedWell logo"
        width={512}
        height={512}
        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        priority
      />
      <span className="sr-only">PackedWell Premium Packaging</span>
    </span>
  )
}
