import Search from '@/components/Search'
import { fetchSearchData } from '@/utils/data'
import React from 'react'

type Props = {
  searchParams: { v?: string }
  params: { locale: 'en' | 'ar' }
}

export default async function Page({ searchParams, params }: Props) {
  const queryV = searchParams.v ?? ''
  const { locale } = params
  const data = await fetchSearchData({ v: queryV, locale })

  if (!data) return null

  return <Search data={data} locale={locale} />
}
