import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/packedwell-logo.png"
        alt="PackedWell Premium Packaging"
        width={220}
        height={70}
        className="h-auto w-[180px] object-contain"
        priority
      />
    </div>
  )
}
