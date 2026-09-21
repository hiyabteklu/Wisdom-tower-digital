import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Wisdom Tower Digital",
  description:
    "Privacy Policy for Wisdom Tower Digital (wisdomtower.tech). How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="text-sm text-wisdom-muted mb-10">
          Wisdom Tower Digital · https://wisdomtower.tech · Last updated: September 21, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-6 text-wisdom-muted">
          <h2 className="text-2xl font-semibold text-white mt-10">1. Who we are</h2>
          <p>
            Wisdom Tower Digital (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides digital and professional
            services through https://wisdomtower.tech and related applications.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:hiyabteklu720@gmail.com" className="text-wisdom-cyan hover:underline">
              hiyabteklu720@gmail.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">2. Information we collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Account information</strong> — name, email address,
              and profile details when you sign up (including via Google or other sign-in providers)
            </li>
            <li>
              <strong className="text-white">Project and communication data</strong> — messages,
              briefs, files, and details you send when requesting or discussing services
            </li>
            <li>
              <strong className="text-white">Usage data</strong> — pages visited, device type,
              browser, approximate location, and how you use the site
            </li>
            <li>
              <strong className="text-white">Payment-related data</strong> — handled by third-party
              payment processors; we do not store full card numbers
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10">3. How we use your information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Create and manage your account</li>
            <li>Communicate about projects, support, and updates</li>
            <li>Process payments and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10">4. Legal bases</h2>
          <p>
            Where applicable, we process data based on: contract performance, legitimate interests
            (e.g. security and improvement), consent (where required), and legal obligations.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">5. Sharing of information</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Service providers (hosting, analytics, email, payment) who process data on our
              instructions
            </li>
            <li>
              Authentication providers (e.g. Google) when you choose to sign in with them
            </li>
            <li>Authorities when required by law</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10">6. Google / third-party sign-in</h2>
          <p>
            If you sign in with Google (or similar), we receive basic profile information (such as
            name and email) according to your permissions. We use it only to create and manage your
            account.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">7. Data retention</h2>
          <p>
            We keep personal data only as long as needed for the purposes above, or as required by
            law. You may request deletion of your account data (subject to legal retention needs).
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">8. Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your data. No method
            of transmission or storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">9. Your rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your personal data</li>
            <li>Object to or restrict certain processing</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p>
            Contact us at{" "}
            <a href="mailto:hiyabteklu720@gmail.com" className="text-wisdom-cyan hover:underline">
              hiyabteklu720@gmail.com
            </a>{" "}
            to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">10. Children&apos;s privacy</h2>
          <p>
            Our services are not directed at children under 13. We do not knowingly collect personal
            data from children under 13.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">11. International transfers</h2>
          <p>
            Your data may be processed in countries other than your own. We take steps to ensure
            appropriate safeguards where required.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">12. Changes</h2>
          <p>
            We may update this Privacy Policy. The &quot;Last updated&quot; date will change. Continued
            use of the site after changes means you accept the updated policy.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">13. Contact</h2>
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
          <Link href="/terms" className="text-wisdom-cyan hover:underline text-sm">
            Terms of Service
          </Link>
          <Link href="/" className="text-wisdom-cyan hover:underline text-sm">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
