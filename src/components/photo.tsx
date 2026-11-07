import Image from "next/image";
import { cn } from "@/lib/utils";

// Every picture on the site sits in the same rounded square: the logo's pixel.
export function Photo({ src, alt, className, sizes = "50vw", priority, pos = "center" }: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean; pos?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-card bg-mist", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: pos }} />
    </div>
  );
}
