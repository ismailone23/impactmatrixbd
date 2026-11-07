import Image from "next/image";

// The logo's emblem, cropped out of the full lockup, so the name can sit beside it as live text.
export function LogoMark() {
  return (
    <span className="relative block size-10 shrink-0 overflow-hidden rounded-[12px] bg-white">
      <Image src="/logo.jpg" alt="" width={228} height={228} priority className="absolute -left-[10.6px] -top-[4px] size-[57px] max-w-none" />
    </span>
  );
}
