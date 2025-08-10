import Search from '@/components/Search'
import { fetchSearchData } from '@/utils/data'
import React from 'react'

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Promise<{ v?: string }>
  params: Promise<{ locale: 'en' | 'ar' }>
}) {
  const queryV = (await searchParams).v ?? ''
  const { locale } = await params
  const data = await fetchSearchData({ v: queryV, locale })

  if (!data) return null

  return <Search data={data} locale={locale} />
}
