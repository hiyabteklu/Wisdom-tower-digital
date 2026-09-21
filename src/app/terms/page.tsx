import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Wisdom Tower Digital",
  description:
    "Terms of Service for Wisdom Tower Digital (wisdomtower.tech). Rules for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
        <p className="text-sm text-wisdom-muted mb-10">
          Wisdom Tower Digital · https://wisdomtower.tech · Last updated: September 21, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-6 text-wisdom-muted">
          <h2 className="text-2xl font-semibold text-white mt-10">1. Acceptance</h2>
          <p>
            By accessing or using https://wisdomtower.tech and related services (&quot;Services&quot;),
            you agree to these Terms of Service. If you do not agree, do not use the Services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">2. Description of services</h2>
          <p>
            Wisdom Tower Digital offers professional digital and related services (for example design,
            writing, web, marketing, and other listed services). Specific deliverables, timelines, and
            fees are agreed per project or package.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">3. Accounts</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must provide accurate information when creating an account.</li>
            <li>You are responsible for keeping your login credentials secure.</li>
            <li>
              You must be at least 13 years old (or the minimum age in your country) to use the
              Services.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10">4. Orders and payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Service requests may be made through the website or by direct communication.
            </li>
            <li>
              Prices, scope, and payment terms will be confirmed before work begins where applicable.
            </li>
            <li>
              Payments are processed by third-party providers. Refunds, if any, are governed by the
              specific project agreement or our stated refund policy.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10">5. Intellectual property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Your content:</strong> You retain rights to materials you
              provide us. You grant us a license to use them as needed to deliver the service.
            </li>
            <li>
              <strong className="text-white">Our content:</strong> The website, branding, and our
              original materials remain our property.
            </li>
            <li>
              <strong className="text-white">Deliverables:</strong> Ownership of final paid
              deliverables is transferred to you as stated in the project agreement, unless otherwise
              agreed in writing.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10">6. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Services for illegal or harmful purposes</li>
            <li>Attempt to disrupt or gain unauthorized access to the site or systems</li>
            <li>Misrepresent your identity or affiliation</li>
            <li>Upload malware or abusive content</li>
          </ul>
          <p>We may suspend or terminate access for violations.</p>

          <h2 className="text-2xl font-semibold text-white mt-10">7. Third-party services</h2>
          <p>
            The Services may use third parties (hosting, authentication, payments). Their terms and
            privacy policies also apply where relevant.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">8. Disclaimers</h2>
          <p>
            The Services are provided &quot;as is&quot; to the fullest extent permitted by law. We do not
            guarantee uninterrupted or error-free operation. Educational or informational content is
            not professional legal, financial, or medical advice.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">9. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Wisdom Tower Digital and its operators are not
            liable for indirect, incidental, special, or consequential damages arising from use of the
            Services. Our total liability for any claim related to the Services is limited to the
            amount you paid us for the specific service giving rise to the claim in the 12 months
            before the claim.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">10. Indemnity</h2>
          <p>
            You agree to indemnify and hold us harmless from claims arising from your misuse of the
            Services or violation of these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">11. Termination</h2>
          <p>
            We may suspend or terminate your access if you breach these Terms. You may stop using the
            Services at any time. Provisions that should survive (e.g. intellectual property,
            liability, indemnity) will survive termination.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">12. Governing law</h2>
          <p>
            These Terms are governed by the laws of Ethiopia, without regard to conflict-of-law
            principles. Courts in Ethiopia shall have exclusive jurisdiction, unless mandatory
            consumer law in your country provides otherwise.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">13. Changes</h2>
          <p>
            We may update these Terms. The &quot;Last updated&quot; date will change. Continued use after
            changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">14. Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:hiyabteklu720@gmail.com" className="text-wisdom-cyan hover:underline">
              hiyabteklu720@gmail.com
            </a>
            <br />
            Website:{" "}
            <a href="https://wisdomtower.tech" className="text-wisdom-cyan hover:underline">
              https://wisdomtower.tech
            </a>
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/privacy" className="text-wisdom-cyan hover:underline text-sm">
            Privacy Policy
          </Link>
          <Link href="/" className="text-wisdom-cyan hover:underline text-sm">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
