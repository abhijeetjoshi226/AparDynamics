import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl py-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">Error 404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl">We could not find that page</h1>
        <p className="mt-4 text-ink-muted">The page may have moved or the address may be incorrect.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary" size="lg">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">Contact us</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
