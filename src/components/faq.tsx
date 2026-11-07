import { Plus } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((it) => (
        <details key={it.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-2xl font-medium [&::-webkit-details-marker]:hidden">
            {it.q}
            <Plus size={24} strokeWidth={1.5} className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-4 max-w-2xl text-xl leading-8 text-ink/80">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
