import { ButtonAnchor, ButtonLink } from "./Button";
import { quoteHref } from "@/data/navigation";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./icons";

type CtaBannerProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  whatsappMessage?: string;
  showWhatsApp?: boolean;
};

/** Reusable closing call-to-action: navy section, quote + contact buttons. */
export function CtaBanner({
  title = "Have an Engineering Challenge?",
  description = "Share your requirements with our team and explore a solution tailored to your application.",
  primaryLabel = "Request a Quote",
  primaryHref = quoteHref,
  secondaryLabel = "Contact Our Team",
  secondaryHref = "/contact",
  whatsappMessage,
  showWhatsApp = true,
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-blueprint py-14 text-white sm:py-16">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 id="cta-title" className="title-bar text-balance text-2xl !text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">{description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <ButtonLink href={primaryHref} variant="accent" size="lg">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="outline-light" size="lg">
              {secondaryLabel}
            </ButtonLink>
            {showWhatsApp && (
              <ButtonAnchor href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
                <WhatsAppIcon className="size-5" />
                WhatsApp us
              </ButtonAnchor>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
