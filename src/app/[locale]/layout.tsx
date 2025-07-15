import { translations, type Locale } from '@/lib/translations'
import Navigation from '@/components/Navigation'

export async function generateStaticParams() {
  return Object.keys(translations).map((locale) => ({
    locale,
  }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return (
    <div lang={locale}>
      <Navigation />
      {children}
    </div>
  )
} 