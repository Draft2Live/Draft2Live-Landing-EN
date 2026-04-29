import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Cookie Policy | Draft2Live',
  description: 'Draft2Live Cookie Policy: types of cookies, legal basis, consent management and contact information.',
};

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; Back to home</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-text-muted text-sm mb-12">Last updated: April 10, 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. What Are Cookies</h2>
              <p>Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit websites. They help the site remember your preferences and improve the functioning of the service.</p>
              <p>In addition to cookies, we may use similar technologies: pixels, local storage (localStorage) and session identifiers.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Types of Cookies We Use</h2>

              <h3 className="text-white font-medium mt-4 mb-2">Required Cookies (Always Active)</h3>
              <p>Provide basic functionality of the site. Without them, the Platform cannot operate correctly. These cookies cannot be disabled.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Provider</th>
                      <th className="p-2 border border-border font-semibold text-white">Purpose</th>
                      <th className="p-2 border border-border font-semibold text-white">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">session_id</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">User session identification</td>
                      <td className="p-2 border border-border">Session</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">csrf_token</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Protection against CSRF attacks</td>
                      <td className="p-2 border border-border">Session</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">auth_token</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">User authentication</td>
                      <td className="p-2 border border-border">30 days</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">cookie_consent</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Storing cookie preferences</td>
                      <td className="p-2 border border-border">6 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-white font-medium mt-4 mb-2">Analytics Cookies (Require Consent)</h3>
              <p>Help us understand how visitors interact with the Platform, enabling us to improve its operation and usability.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Provider</th>
                      <th className="p-2 border border-border font-semibold text-white">Purpose</th>
                      <th className="p-2 border border-border font-semibold text-white">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">_ga</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Identification of unique visitors</td>
                      <td className="p-2 border border-border">13 months</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_ga_*</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Google Analytics 4 &mdash; session state storage</td>
                      <td className="p-2 border border-border">13 months</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_gid</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Visitor identification within a day</td>
                      <td className="p-2 border border-border">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-white font-medium mt-4 mb-2">Marketing Cookies (Require Consent)</h3>
              <p>Used to display relevant advertising and measure the effectiveness of advertising campaigns.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Provider</th>
                      <th className="p-2 border border-border font-semibold text-white">Purpose</th>
                      <th className="p-2 border border-border font-semibold text-white">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">_fbp</td>
                      <td className="p-2 border border-border">Meta</td>
                      <td className="p-2 border border-border">Conversion tracking</td>
                      <td className="p-2 border border-border">3 months</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_gcl_au</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Google Ads &mdash; conversion tracking</td>
                      <td className="p-2 border border-border">3 months</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">li_sugr</td>
                      <td className="p-2 border border-border">LinkedIn</td>
                      <td className="p-2 border border-border">Insight Tag &mdash; advertising analytics</td>
                      <td className="p-2 border border-border">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Legal Basis</h2>
              <p>In accordance with the ePrivacy Directive (2002/58/EC) and the GDPR:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Required cookies</strong> are set without consent, as they are necessary for the functioning of the Platform (Art. 6(1)(f) GDPR)</li>
                <li><strong className="text-white">Analytics and marketing cookies</strong> are set only after obtaining your explicit consent (Art. 6(1)(a) GDPR)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Managing Cookies</h2>

              <h3 className="text-white font-medium mt-4 mb-2">4.1. Consent Banner</h3>
              <p>Upon your first visit to the Platform, you are shown a banner requesting consent. You may accept all cookies, reject non-essential ones or configure categories manually. <strong className="text-white">Refusing cookies is just as easy as accepting them.</strong> You may change your choice at any time in the Platform settings.</p>
              <p><strong className="text-white">Consequences of refusal:</strong> Refusing analytics and marketing cookies does not affect the functionality of the Platform. You will be able to use all Services. However, we shall not be able to personalise your experience or display relevant advertising.</p>

              <h3 className="text-white font-medium mt-4 mb-2">4.2. Browser Settings</h3>
              <p>You may configure your browser to block or delete cookies. Please note that blocking required cookies may affect the operation of the Platform.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Chrome:</strong> Settings &rarr; Privacy and security &rarr; Cookies</li>
                <li><strong className="text-white">Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies</li>
                <li><strong className="text-white">Safari:</strong> Preferences &rarr; Privacy &rarr; Cookies</li>
                <li><strong className="text-white">Edge:</strong> Settings &rarr; Privacy &rarr; Cookies</li>
              </ul>

              <h3 className="text-white font-medium mt-4 mb-2">4.3. Opting Out of Analytics</h3>
              <p>To opt out of Google Analytics, you may install the official browser extension: Google Analytics Opt-out Browser Add-on.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Transfer</h2>
              <p>Some cookies are set by third-party services whose servers are located outside the EEA. In such cases, we ensure an adequate level of data protection in accordance with the GDPR (see <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, section 6 for details).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Amendments to the Policy</h2>
              <p>Cookie lifetimes do not exceed 13 months, in line with EDPB recommendations. Upon expiry, your consent will be requested again.</p>
              <p>We may update this Cookie Policy in the event of changes to the types or purposes of cookies used. We shall notify you of material changes via the consent banner or the Platform interface.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
              <p><strong className="text-white">Aklima Polska sp. z o.o.</strong></p>
              <p>Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
              <p>Website: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
