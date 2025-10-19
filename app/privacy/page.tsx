export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-4">
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit my blog at alikhreis.ca/blog (&quot;the Blog&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
            <p>
              The Blog does not directly collect any personal information. However, the Blog is hosted on Notion and may be subject to Notion&apos;s data collection practices. For more information, please refer to Notion&apos;s Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
            <p>
              No personal information is collected or used by the Blog. The Blog is purely for informational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              For any questions about this Privacy Policy, please contact me at alikhreis12@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 