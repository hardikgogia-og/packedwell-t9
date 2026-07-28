import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/images/packedwell-logo.png"
        alt="PackedWell Premium Packaging"
        className="h-auto w-[70px] object-contain"
      />
    </div>
  )
}
