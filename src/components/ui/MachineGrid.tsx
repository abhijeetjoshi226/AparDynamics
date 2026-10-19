import Image from "next/image";
import { machinesAvailable } from "@/data/site";
import { cn } from "@/lib/utils";

/** Photo cards for the "Machines available" list. Shared by the home page, About and Engineering Solutions. */
export function MachineGrid({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6", className)}>
      {machinesAvailable.map((m) => (
        <li key={m.name} className="reveal overflow-hidden rounded-[--radius-card] border border-line bg-white text-ink shadow-card">
          <div className="relative aspect-[4/3] bg-white">
            <Image
              src={m.src}
              alt={m.alt}
              fill
              sizes="(min-width:1024px) 15vw, (min-width:768px) 30vw, 50vw"
              className={m.fit === "contain" ? "object-contain p-2" : "object-cover"}
            />
          </div>
          <div className="border-t border-line p-3">
            <p className="text-sm font-extrabold leading-snug text-navy">{m.name}</p>
            <p className="mt-0.5 text-xs leading-snug text-ink-muted">{m.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
