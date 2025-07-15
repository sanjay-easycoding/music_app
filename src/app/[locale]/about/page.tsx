import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import { translations, type Locale } from '@/lib/translations'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return Object.keys(translations).map((locale) => ({
    locale,
  }))
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  
  // Validate that the locale exists in our translations
  if (!translations[locale]) {
    notFound()
  }
  
  return (
    <main>
      <Header />
      <About />
      <Footer />
    </main>
  )
} 