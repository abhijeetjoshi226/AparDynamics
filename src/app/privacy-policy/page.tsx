import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { company, fullAddress } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Apar Dynamics collects, uses and protects information submitted through this website.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "18 October 2026";

const h2 = "title-bar mt-10 text-xl sm:text-2xl";
const p = "mt-4 text-base leading-relaxed text-ink";
const ul = "mt-4 list-disc space-y-2 pl-6 text-base text-ink";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description={`Last updated: ${LAST_UPDATED}`}
        crumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className={p}>
            This policy explains how {company.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information collected through this website. We are an engineering and manufacturing company, and the website is used to present our services and receive business enquiries.
          </p>

          <h2 className={h2}>Information we collect</h2>
          <p className={p}>We collect only what you choose to send us through the quote or contact form:</p>
          <ul className={ul}>
            <li>Name, company name, business email address and phone number.</li>
            <li>The service or product category you are interested in and your project description.</li>
            <li>Any drawing or specification file you attach.</li>
          </ul>
          <p className={p}>
            If you contact us by phone, email or WhatsApp, we receive the details you share in those channels. WhatsApp messages are handled under WhatsApp&rsquo;s own terms and privacy policy.
          </p>

          <h2 className={h2}>How we use it</h2>
          <ul className={ul}>
            <li>To respond to your enquiry and prepare a quotation.</li>
            <li>To communicate about the project you have asked us about.</li>
            <li>To protect the website against spam and misuse.</li>
          </ul>
          <p className={p}>We do not sell your information and do not use it for unrelated marketing without your consent.</p>

          <h2 className={h2}>How enquiries are delivered</h2>
          <p className={p}>
            Quote form submissions are sent by email to our team through a transactional email provider (Resend). The website itself does not keep a database of submissions. Emails remain in our mailbox until we delete them.
          </p>

          <h2 className={h2}>Cookies and analytics</h2>
          <p className={p}>
            This website does not set advertising or tracking cookies. Our hosting provider may process technical logs (such as IP address and requested page) for security and reliability. If analytics are added in future, this policy will be updated.
          </p>

          <h2 className={h2}>Sharing</h2>
          <p className={p}>
            We share information only with service providers needed to operate the website and deliver enquiries (hosting and email delivery), and where required by law. Links to external sites, including Just Porta channels, are governed by those sites&rsquo; own policies.
          </p>

          <h2 className={h2}>Retention and your rights</h2>
          <p className={p}>
            We keep enquiry information for as long as needed to respond and to maintain a reasonable business record. You may ask us to access, correct or delete the personal information you have sent us by writing to the address below, subject to applicable law.
          </p>

          <h2 className={h2}>Security</h2>
          <p className={p}>
            The site is served over HTTPS, form submissions are validated and processed on the server, and email credentials are never exposed to your browser. No online method is completely secure, so please avoid sending confidential or regulated data unless it is necessary.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={p}>
            {company.name}, {fullAddress}.
            <br />
            Email: <a className="font-bold text-blue underline underline-offset-4" href={`mailto:${company.email}`}>{company.email}</a> · Phone: <a className="font-bold text-blue underline underline-offset-4" href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
          </p>
        </div>
      </Section>
    </>
  );
}
