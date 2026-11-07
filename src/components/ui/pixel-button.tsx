import Link from "next/link";
import { cn } from "@/lib/utils";

// 21st.dev "pixel-broke" button: on hover the corners break into pixels and the label types itself out.
const left = [0, 0, 1, 3, 4, 0, 0, 2, 0, 0, 0, 1];
const right = [3, 0, 0, 0, 4, 0, 0, 2, 1, 3, 0, 0];

export function PixelButton({ href, children: text, tone = "dark", size = "md", className }: { href: string; children: string; tone?: "dark" | "light" | "blue" | "glass"; size?: "md" | "sm"; className?: string }) {
  const pixels = (a: number[], side: string) => a.map((index, i) => <span key={`${side}${i}`} style={{ "--index": index } as React.CSSProperties} className="button03_bg-pixel" />);
  return (
    <Link href={href} data-tone={tone} data-size={size} className={cn("button03", className)} style={{ "--characters": text.length } as React.CSSProperties}>
      <span className="button03_bg" aria-hidden>
        <span className="button03_bg-left">{pixels(left, "l")}</span>
        <span className="button03_bg-mid" />
        <span className="button03_bg-right">{pixels(right, "r")}</span>
      </span>
      <span data-text={text} className="button03_inner">
        <span className="button03_text">{text}</span>
      </span>
    </Link>
  );
}
