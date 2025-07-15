import { notFound } from 'next/navigation'

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  
  // If this is a valid locale path, let the locale routes handle it
  const validLocales = ['en', 'de']
  if (slug.length > 0 && validLocales.includes(slug[0])) {
    notFound()
  }
  
  // For any other path, show 404
  notFound()
} 