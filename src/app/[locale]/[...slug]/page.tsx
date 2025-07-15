import { notFound } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'

export async function generateStaticParams() {
  return Object.keys(translations).map((locale) => ({
    locale,
  }))
}

export default async function LocaleCatchAllPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string[] }>
}) {
  const { locale, slug } = await params
  
  // For any path that doesn't exist, show 404
  notFound()
} 