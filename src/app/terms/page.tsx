import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Terms of Service | Draft2Live',
  description: 'Terms of Service governing the use of the Draft2Live platform for AI-powered SEO content generation and publishing.',
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; Back to home</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-text-muted text-sm mb-12">Last updated: April 10, 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">

            {/* §1 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;1. General Provisions</h2>
              <p>1. These Terms of Service (hereinafter &ldquo;Terms&rdquo;) define the types, scope and conditions for the provision of electronic services by Aklima Polska sp. z o.o., with its registered office in Warsaw at ul. Post&#281;pu 15, 02-676 Warszawa, Polska, entered in the Register of Entrepreneurs of the National Court Register under KRS: 0000978391, NIP: 9512544995, REGON: 522520422, share capital: PLN 10,000 (hereinafter &ldquo;Operator&rdquo;, &ldquo;we&rdquo;), through the website draft2live.ai and all related subdomains and applications (hereinafter &ldquo;Platform&rdquo;). These Terms constitute regulations within the meaning of the Polish Act of 18 July 2002 on the Provision of Electronic Services.</p>
              <p className="mt-3">2. By registering or using the Platform, you confirm that you have read these Terms, the <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and the <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>, and agree to comply with them.</p>
            </section>

            {/* §2 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;2. Definitions</h2>
              <ul className="space-y-2">
                <li><strong className="text-white">Platform</strong> &mdash; the website located at draft2live.ai, including all subdomains and applications through which the Operator provides the Services.</li>
                <li><strong className="text-white">Operator</strong> &mdash; Aklima Polska sp. z o.o., ul. Post&#281;pu 15, 02-676 Warszawa, KRS: 0000978391, NIP: 9512544995, REGON: 522520422, which administers the Platform.</li>
                <li><strong className="text-white">User</strong> &mdash; a natural person aged 18 or over, a sole trader, a legal entity, or an organisational unit without legal personality, which uses the Platform.</li>
                <li><strong className="text-white">Account</strong> &mdash; a set of resources in the Operator&apos;s IT system, identified by an individual login (email) and password, in which the User&apos;s data is stored.</li>
                <li><strong className="text-white">Agreement</strong> &mdash; the agreement for the provision of services concluded between the Operator and the User via the Platform for an indefinite period in accordance with these Terms.</li>
                <li><strong className="text-white">Services</strong> &mdash; the electronic services provided by the Operator through the Platform, as described in &sect;3.</li>
                <li><strong className="text-white">Subscription</strong> &mdash; a paid access plan to the Services with a monthly or annual billing cycle.</li>
                <li><strong className="text-white">Billing Period</strong> &mdash; the period for which the User pays for the Subscription. Payment is charged in advance on a monthly basis on the calendar day on which the Subscription commenced.</li>
              </ul>
            </section>

            {/* §3 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;3. Description of Services</h2>
              <p>1. Draft2Live is an AI platform for automating the full cycle of content creation, SEO optimisation and publishing. The Platform provides the following Services:</p>
              <ul className="list-disc list-inside mt-3 space-y-1.5">
                <li>Multilingual AI-powered text article generation</li>
                <li>AI image generation and optimisation</li>
                <li>SERP analysis and keyword research</li>
                <li>Comprehensive SEO content optimisation</li>
                <li>Automated publishing to CMS platforms (WordPress, Drupal, Shopify)</li>
                <li>Automated article translation</li>
                <li>SEO audit of generated content</li>
              </ul>
              <p className="mt-3">2. The Platform is a subscription-based service. The functionality of each pricing plan is described on the <Link href="/#pricing" className="text-primary hover:underline">pricing page</Link>.</p>
              <p className="mt-3">3. The Operator shall use its best efforts to provide accurate data; however, certain results of analysis and generation may be inaccurate or incomplete.</p>
            </section>

            {/* §4 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;4. Registration and Account</h2>
              <p>1. Creating an Account on the Platform is free of charge.</p>
              <p className="mt-3">2. To register, the User shall complete the registration form by providing an email address and creating a password, and then confirm acceptance of these Terms.</p>
              <p className="mt-3">3. The Agreement is deemed concluded upon the User&apos;s confirmation of registration.</p>
              <p className="mt-3">4. The User undertakes to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                <li>Provide accurate and up-to-date information upon registration</li>
                <li>Maintain the confidentiality of their password and login credentials</li>
                <li>Not transfer access to the Account to third parties without the Operator&apos;s consent</li>
                <li>Immediately report any unauthorised access to the Account</li>
              </ul>
              <p className="mt-3">5. Each User may hold only one Account. Creating additional accounts requires the Operator&apos;s consent.</p>
              <p className="mt-3">6. The User bears full responsibility for all activity carried out through their Account.</p>
            </section>

            {/* §5 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;5. Conditions of Use</h2>
              <p>1. The User is obliged to use the Platform in accordance with these Terms, applicable law and generally accepted standards.</p>
              <p className="mt-3">2. The following are prohibited:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                <li>Using the Platform to generate unlawful, harmful or discriminatory content</li>
                <li>Attempting to circumvent the Platform&apos;s technical restrictions or security measures</li>
                <li>Using automated means for mass access without the Operator&apos;s permission</li>
                <li>Infringing the intellectual property rights of third parties</li>
                <li>Introducing malicious software (viruses, bots, spyware, etc.)</li>
                <li>Transferring or sharing passwords with other Users</li>
              </ul>
              <p className="mt-3">3. A User who has breached the provisions of these Terms may receive a warning from the Operator. In the event of continued violations, the Operator reserves the right to delete the Account, which is equivalent to immediate termination of the Agreement.</p>
            </section>

            {/* §6 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;6. Pricing and Payment</h2>
              <p>1. After creating an Account, the User may purchase a Subscription in accordance with the tariffs set out on the <Link href="/#pricing" className="text-primary hover:underline">pricing page</Link>.</p>
              <p className="mt-3">2. The Subscription is paid in advance for each Billing Period. The Subscription automatically renews until cancelled by the User.</p>
              <p className="mt-3">3. Payments are processed through an online payment platform. Credit/debit card data is processed exclusively by the payment provider and is not stored on the Operator&apos;s servers.</p>
              <p className="mt-3">4. Unused limits within a Billing Period do not accumulate and are not carried over to the next period.</p>
              <p className="mt-3">5. Prices may change, of which the Operator shall give notice at least 30 days in advance.</p>
              <p className="mt-3">6. If the User cancels the Subscription during a Billing Period, access to the Services is retained until the end of the paid period.</p>
            </section>

            {/* §7 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;7. AI-Generated Content</h2>
              <p>The User understands and accepts that:</p>
              <ul className="list-disc list-inside mt-3 space-y-1.5">
                <li>Content is generated by AI models and may contain inaccuracies</li>
                <li>The User is responsible for reviewing and editing content before publication</li>
                <li>The Platform does not guarantee any specific SEO ranking results</li>
                <li>The quality of generation depends on the input data and settings provided</li>
                <li>The Operator shall not be liable for the improper use of generated content by the User or by third parties</li>
              </ul>
            </section>

            {/* §8 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;8. Intellectual Property</h2>
              <p>1. All rights to the Platform, including its design, software, trademarks, logos and other materials, belong to Aklima Polska sp. z o.o. or its licensors.</p>
              <p className="mt-3">2. Copying, modifying, distributing or using the Platform&apos;s materials for commercial or advertising purposes without the Operator&apos;s written consent is prohibited.</p>
              <p className="mt-3">3. <strong className="text-white">User Content:</strong> The User retains rights to the content generated through the Platform, provided that these Terms are complied with and the applicable pricing plan has been paid.</p>
              <p className="mt-3">4. <strong className="text-white">Uploaded Materials:</strong> By uploading documents to the Knowledge Base, the User warrants that they hold the necessary rights to such materials.</p>
            </section>

            {/* §9 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;9. Complaints</h2>
              <p>1. A User who considers that the Services are not being provided in accordance with the established rules may file a complaint.</p>
              <p className="mt-3">2. Complaints shall be sent by email to: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>.</p>
              <p className="mt-3">3. A complaint shall contain: first name and surname, email address, description of the breach and the expected manner of resolution.</p>
              <p className="mt-3">4. The Operator shall review the complaint and provide a response within 14 days from the date of its receipt. The response shall be sent to the User&apos;s email address.</p>
              <p className="mt-3">5. If the complaint does not contain sufficient information, the Operator may request additional data before providing a response.</p>
            </section>

            {/* §10 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;10. Right of Withdrawal from the Agreement</h2>
              <p>1. A User who is a consumer within the meaning of Article 22&sup1; of the Polish Civil Code has the right to withdraw from the Agreement concluded at a distance, without giving any reason, within 14 days from the conclusion of the Agreement.</p>
              <p className="mt-3">2. To exercise the right of withdrawal, the User shall send an appropriate statement to <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a> within the 14-day period.</p>
              <p className="mt-3">3. The right of withdrawal does not apply if:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                <li>The provision of services has commenced with the express consent of the consumer, who was informed of the loss of the right of withdrawal upon full performance of the service</li>
                <li>The provision of digital content not supplied on a tangible medium has commenced with the consumer&apos;s prior consent</li>
              </ul>
              <p className="mt-3">4. Refunds shall be made within 14 days of receipt of the withdrawal statement, using the same payment method.</p>
            </section>

            {/* §11 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;11. Limitation of Liability</h2>
              <p>1. The Platform is provided &ldquo;as is&rdquo;. To the extent permitted by applicable law:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                <li>The Operator shall not be liable for actions of Users that do not comply with these Terms</li>
                <li>The Operator shall not be liable for damages caused by the provision of incomplete or incorrect data by the User</li>
                <li>The Operator shall not be liable for indirect, incidental or consequential damages</li>
                <li>The Operator&apos;s total liability shall be limited to the amount paid by the User over the preceding 12 months</li>
                <li>The Operator shall not be liable for damages caused by force majeure</li>
              </ul>
              <p className="mt-3">2. These limitations do not apply in cases where limitation of liability is prohibited by mandatory provisions of EU law or Polish law.</p>
            </section>

            {/* §12 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;12. Termination of the Agreement</h2>
              <p>1. The User may delete their Account at any time through profile settings or by sending a request to <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>.</p>
              <p className="mt-3">2. The Operator is entitled to terminate the Agreement upon 14 days&apos; notice sent to the User&apos;s email address.</p>
              <p className="mt-3">3. After Account deletion, personal data shall be processed in accordance with the <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
            </section>

            {/* §13 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;13. Protection of Personal Data</h2>
              <p>1. The detailed conditions for the protection of personal data are set out in the <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
              <p className="mt-3">2. The processing of personal data is governed by the provisions of Regulation (EU) 2016/679 (GDPR) and the Polish Act of 10 May 2018 on the Protection of Personal Data.</p>
              <p className="mt-3">3. The controller of personal data is Aklima Polska sp. z o.o.</p>
            </section>

            {/* §14 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;14. Amendments to the Terms</h2>
              <p>The Operator may update these Terms. The Operator shall notify Users of material changes by email or through the Platform interface at least 30 days before such changes take effect. Continued use of the Platform after the Terms have been amended constitutes the User&apos;s acceptance of the updated version.</p>
            </section>

            {/* §15 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;15. Governing Law and Final Provisions</h2>
              <p>1. These Terms are governed by the laws of the European Union and the Republic of Poland.</p>
              <p className="mt-3">2. Any disputes shall be resolved by the courts of competent jurisdiction in the Republic of Poland having jurisdiction over the Operator&apos;s registered office, unless otherwise provided by mandatory consumer protection laws.</p>
              <p className="mt-3">3. These Terms are available free of charge on the Platform, where they may be viewed, downloaded and printed.</p>
              <p className="mt-3">4. Matters not regulated by these Terms shall be governed by the relevant provisions of the laws of the Republic of Poland.</p>
            </section>

            {/* §16 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;16. Contact</h2>
              <ul className="list-none mt-3 space-y-1.5">
                <li><strong className="text-white">Operator:</strong> Aklima Polska sp. z o.o.</li>
                <li><strong className="text-white">Address:</strong> ul. Post&#281;pu 15, 02-676 Warszawa, Polska</li>
                <li><strong className="text-white">KRS:</strong> 0000978391 | <strong className="text-white">NIP:</strong> 9512544995 | <strong className="text-white">REGON:</strong> 522520422</li>
                <li><strong className="text-white">Email:</strong> <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></li>
                <li><strong className="text-white">Website:</strong> <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
