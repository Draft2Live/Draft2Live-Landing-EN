import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Privacy Policy | Draft2Live',
  description: 'Draft2Live Privacy Policy — processing of personal data in accordance with the GDPR and Polish data protection law.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; Back to home</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-text-muted text-sm mb-12">Last updated: April 10, 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. General Provisions</h2>
              <p>This Privacy Policy explains how Aklima Polska sp. z o.o., with its registered office in Warsaw (ul. Postępu 15, 02-676 Warszawa, KRS: 0000978391, NIP: 9512544995, REGON: 522520422) (hereinafter &ldquo;Operator&rdquo;, &ldquo;we&rdquo;), which operates the Draft2Live platform (hereinafter &ldquo;Platform&rdquo;), collects, processes, stores and protects your personal data in accordance with the General Data Protection Regulation (Regulation (EU) 2016/679, hereinafter &ldquo;GDPR&rdquo;) and the Polish Act of 10 May 2018 on the Protection of Personal Data.</p>
              <p className="mt-3">By using the Platform, you confirm that you have read this Policy. If you do not agree with the terms of data processing, please do not use the Platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Data Controller</h2>
              <div className="p-4 rounded-xl bg-white/5 border border-border">
                <p><strong className="text-white">Aklima Polska sp. z o.o.</strong></p>
                <p className="mt-1">ul. Postępu 15, 02-676 Warszawa, Polska</p>
                <p className="mt-1">KRS: 0000978391 | NIP: 9512544995 | REGON: 522520422</p>
                <p className="mt-1">Platform: Draft2Live</p>
                <p className="mt-1">Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
                <p className="mt-1">Website: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. What Data We Collect</h2>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.1. Data You Provide Directly</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Registration data:</strong> first name, surname, email address, password</li>
                <li><strong className="text-white">Payment data:</strong> credit/debit card information, billing address (processed via a certified payment provider)</li>
                <li><strong className="text-white">Profile data:</strong> company name, website, language settings, Brand Voice</li>
                <li><strong className="text-white">Uploaded files:</strong> Knowledge Base documents, images, text for processing</li>
                <li><strong className="text-white">Communication data:</strong> messages to customer support, feedback</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.2. Data Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Technical data:</strong> IP address, browser type and version, operating system, screen resolution</li>
                <li><strong className="text-white">Usage data:</strong> pages visited, session duration, actions on the Platform, number of generated articles</li>
                <li><strong className="text-white">Cookies and similar technologies:</strong> see our <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link> for details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Purposes and Legal Basis for Processing</h2>
              <p>We process your personal data on the following legal grounds (Article 6 GDPR):</p>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Performance of a contract (Art. 6(1)(b) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Creating and managing your Account</li>
                    <li>Providing the Platform&apos;s services (content generation, SEO optimisation, publishing)</li>
                    <li>Processing payments and issuing invoices</li>
                    <li>Technical support</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Legitimate interests (Art. 6(1)(f) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Improving and developing the Platform</li>
                    <li>Usage and performance analytics</li>
                    <li>Ensuring security and preventing fraud</li>
                    <li>Sending service notifications regarding Platform operation</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Consent (Art. 6(1)(a) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Marketing communications and SEO tips</li>
                    <li>Analytics and marketing cookies</li>
                    <li>Processing data for personalised recommendations</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Legal obligation (Art. 6(1)(c) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Maintaining accounting and tax records</li>
                    <li>Complying with data protection legal requirements</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Transfer of Data to Third Parties</h2>
              <p>To provide the Services, we transfer your data to third-party service providers (data processors). Below are the categories of recipients and specific services.</p>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Infrastructure and Hosting</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Hetzner Online GmbH</strong> (Germany/EU) &mdash; server infrastructure and data storage</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">AI Services</h3>
                  <p>The Platform uses <strong className="text-white">OpenRouter, Inc.</strong> (USA) as the sole API gateway for accessing artificial intelligence models. Through OpenRouter, your content may be processed by the following providers:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Anthropic</strong> (USA) &mdash; Claude: text generation, content humanisation</li>
                    <li><strong className="text-white">OpenAI</strong> (USA) &mdash; GPT: text generation, translation, embeddings (vector search), image generation</li>
                    <li><strong className="text-white">Google</strong> (USA) &mdash; Gemini: text and image generation</li>
                    <li><strong className="text-white">Meta</strong> (USA) &mdash; Llama: text generation</li>
                    <li><strong className="text-white">Mistral AI</strong> (France/EU) &mdash; text generation</li>
                    <li><strong className="text-white">Black Forest Labs</strong> (FLUX) &mdash; image generation</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">AI Detection and Content Quality</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">GPTZero</strong> (USA) &mdash; checking text for AI markers</li>
                    <li><strong className="text-white">ZeroGPT</strong> &mdash; alternative AI-text detector</li>
                    <li><strong className="text-white">Winston AI</strong> &mdash; AI content detection</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Media Processing</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Replicate, Inc.</strong> (USA) &mdash; image resolution enhancement (upscaling)</li>
                    <li><strong className="text-white">Kling AI</strong> &mdash; video generation from text and images</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">SEO and Content Analysis</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Serpstat</strong> &mdash; keyword research, search volume, competitor analysis</li>
                    <li><strong className="text-white">Jina AI</strong> (Germany/EU) &mdash; extracting text from web pages for competitor analysis</li>
                    <li><strong className="text-white">Tavily</strong> &mdash; web search and data collection for research</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Payments</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Stripe, Inc.</strong> (USA) &mdash; payment processing, subscriptions, billing management. Card data is processed exclusively by Stripe (PCI DSS Level 1) and is not stored on our servers.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Analytics and Marketing</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Google Analytics</strong> (Google LLC, USA) &mdash; analysis of traffic and Platform usage</li>
                    <li><strong className="text-white">Meta Pixel</strong> (Meta Platforms, Inc., USA) &mdash; measurement of advertising effectiveness</li>
                    <li><strong className="text-white">Google Ads</strong> (Google LLC, USA) &mdash; conversion tracking</li>
                    <li><strong className="text-white">LinkedIn Insight Tag</strong> (LinkedIn Corp., USA) &mdash; advertising campaign analytics</li>
                  </ul>
                  <p className="mt-2">These services use cookies. For details, see our <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Notifications</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Telegram Bot API</strong> (Telegram FZ-LLC, UAE) &mdash; service notifications to Platform administrators</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Optional Integrations (at the User&apos;s discretion)</h3>
                  <p>The following services are activated only if the User connects their own API key. In such case, the User enters into a direct contractual relationship with the relevant provider:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">DeepL SE</strong> (Germany/EU) &mdash; automated content translation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <h3 className="text-lg font-semibold text-white mt-6 mb-2">Important Notice Regarding Third-Party Services</h3>
                <p>We transfer to third-party providers only the data necessary to perform a specific function (the principle of data minimisation, Art. 5(1)(c) GDPR). <strong className="text-white">We do not store data on behalf of third-party providers and do not control their data processing practices after the data has been transferred.</strong></p>
                <p className="mt-2">Each third-party provider is an independent data controller or processor and operates in accordance with its own privacy policy. In particular, but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>OpenAI &mdash; <a href="https://openai.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">openai.com/privacy</a></li>
                  <li>Google &mdash; <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
                  <li>Anthropic &mdash; <a href="https://www.anthropic.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></li>
                  <li>Stripe &mdash; <a href="https://stripe.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                  <li>Meta &mdash; <a href="https://www.facebook.com/privacy/policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
                </ul>
                <p className="mt-2"><strong className="text-white">The Operator shall not be liable for the personal data processing practices of third-party providers</strong> following the proper transfer of data in accordance with the terms of the DPA. We recommend reviewing their privacy policies.</p>
              </div>

              <p className="mt-4">Data Processing Agreements (DPAs) in accordance with Art. 28 GDPR have been concluded with all data processors to whom personal data is transferred.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. International Data Transfers</h2>
              <p>Some of our providers are located outside the European Economic Area (EEA). In such cases, we ensure an adequate level of data protection through:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions adopted by the European Commission</li>
                <li>Additional technical and organisational measures in accordance with EDPB recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention Periods</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Account data:</strong> for the duration of your Account and 30 days after its deletion</li>
                <li><strong className="text-white">Payment data:</strong> in accordance with tax law requirements (typically up to 10 years)</li>
                <li><strong className="text-white">Analytics data:</strong> up to 26 months</li>
                <li><strong className="text-white">Marketing consent:</strong> until consent is withdrawn</li>
                <li><strong className="text-white">Uploaded files:</strong> for the duration of the Account; deleted within 30 days of Account deletion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights</h2>
              <p>Under the GDPR, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Right of access</strong> (Art. 15 GDPR) &mdash; to obtain a copy of your personal data</li>
                <li><strong className="text-white">Right to rectification</strong> (Art. 16 GDPR) &mdash; to correct inaccurate or incomplete data</li>
                <li><strong className="text-white">Right to erasure</strong> (Art. 17 GDPR) &mdash; the &ldquo;right to be forgotten&rdquo;</li>
                <li><strong className="text-white">Right to restriction of processing</strong> (Art. 18 GDPR)</li>
                <li><strong className="text-white">Right to data portability</strong> (Art. 20 GDPR)</li>
                <li><strong className="text-white">Right to object</strong> (Art. 21 GDPR)</li>
                <li><strong className="text-white">Right to withdraw consent</strong> (Art. 7(3) GDPR)</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please write to <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>. We shall respond within 30 days.</p>
              <p className="mt-3">You also have the right to lodge a complaint with a data protection supervisory authority. In Poland, this is the Urząd Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" className="text-primary hover:underline">uodo.gov.pl</a>. If you are located in another EU country, you may contact the supervisory authority in your country.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Obligation to Provide Data</h2>
              <p>Providing registration data (name, email) is a necessary condition for concluding the Agreement and using the Platform. Without this data, we shall be unable to create an Account and provide the Services.</p>
              <p className="mt-3">Providing payment data is necessary for paying for the Subscription. Providing data for marketing communications is voluntary and does not affect the ability to use the Platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Data encryption in transit (TLS/SSL) and at rest</li>
                <li>Regular backups</li>
                <li>Access control and authentication</li>
                <li>Infrastructure security monitoring</li>
                <li>Regular review and update of security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Automated Decision-Making</h2>
              <p>The Platform uses AI to generate content, which is its core service function. We do not use automated decision-making or profiling that has legal effects concerning you (Art. 22 GDPR).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Children&apos;s Data</h2>
              <p>The Platform is not intended for individuals under 16 years of age. We do not knowingly collect data from children. If you learn that a child has provided us with personal data, please contact <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Amendments to the Policy</h2>
              <p>We may update this Policy. We shall notify you of material changes by email or through the Platform interface. The date of the last update is indicated at the top of this page.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Contact</h2>
              <div className="p-4 rounded-xl bg-white/5 border border-border">
                <p><strong className="text-white">Aklima Polska sp. z o.o.</strong></p>
                <p className="mt-1">ul. Postępu 15, 02-676 Warszawa, Polska</p>
                <p className="mt-1">Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
                <p className="mt-1">Website: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
