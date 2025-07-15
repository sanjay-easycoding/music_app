import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Reviews from '@/components/Reviews'
import Comparison from '@/components/Comparison'
import Guarantees from '@/components/Guarantees'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { translations, type Locale } from '@/lib/translations'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return Object.keys(translations).map((locale) => ({
    locale,
  }))
}

export default async function LocalePage({
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
      <Hero />
      <Features />
      <HowItWorks />
      <Reviews />
      <Comparison />
      <Guarantees />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
} 