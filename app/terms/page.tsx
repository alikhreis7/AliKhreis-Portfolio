export default function TermsOfUse() {
  return (
    <div className="min-h-screen w-full bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-4">
              These Terms of Use govern your access to and use of my blog at alikhreis.ca/blog (&quot;the Blog&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Content Usage</h2>
            <p>
              All content provided on the Blog is for informational purposes only. The content represents my personal opinions and experiences. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on the Blog without my prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p>
              The Blog may contain links to third-party websites or services that are not owned or controlled by me. I have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              I reserve the right to modify or replace these Terms of Use at any time. If a revision is material, I will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              For any questions about these Terms of Use, please contact me at alikhreis12@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 