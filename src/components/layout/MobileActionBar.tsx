import { FileText, Phone } from "lucide-react";
import Link from "next/link";
import { quoteHref } from "@/data/navigation";
import { company, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Sticky call / WhatsApp / quote bar, shown on phones only. */
export function MobileActionBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-bold";
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white shadow-[0_-6px_20px_-8px_rgb(11_45_92/0.25)] md:hidden">
      <a href={`tel:${company.phoneTel}`} className={`${item} text-navy`}>
        <Phone className="size-5" aria-hidden="true" />
        Call
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${item} bg-[#128c4a] text-white`}>
        <WhatsAppIcon className="size-5" />
        WhatsApp
      </a>
      <Link href={quoteHref} className={`${item} bg-accent text-navy`}>
        <FileText className="size-5" aria-hidden="true" />
        Get a Quote
      </Link>
    </nav>
  );
}
