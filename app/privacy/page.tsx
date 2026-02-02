'use client'

import { useLanguage } from '../components/LanguageProvider'
import { Navigation } from '../components/Navigation'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 block">
          {t('contact.backToHome')}
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 dark:text-white">{t('privacy.title')}</h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">{t('privacy.introduction')}</h2>
            <p>{t('privacy.lastUpdated')} {new Date().toLocaleDateString()}</p>
            <p className="mt-4">
              {t('privacy.introText')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">{t('privacy.infoCollection')}</h2>
            <p>
              {t('privacy.infoCollectionText')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">{t('privacy.useOfInfo')}</h2>
            <p>
              {t('privacy.useOfInfoText')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">{t('privacy.contactSection')}</h2>
            <p>
              {t('privacy.contactText')}
            </p>
          </section>
        </div>
      </div>
      
      <Navigation currentPath="/privacy" />
    </div>
  )
}
