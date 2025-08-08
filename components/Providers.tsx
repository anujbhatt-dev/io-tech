"use client"

import { dm_sans } from '@/utils/fonts'
import React, { ReactNode } from 'react'
import Appbar from './Appbar'
import {NextIntlClientProvider} from 'next-intl';

// ✅ Redux setup
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/store/store'
import ThemeInitializer from './ThemeInitializer'
import Footer from './Footer'


export default function Providers({ children,locale }: { children: ReactNode, locale:string }) {
  return (
    <ReduxProvider store={store}>
      <NextIntlClientProvider locale={locale}>
      <ThemeInitializer>
      <div className={dm_sans.className}>
        <Appbar  locale={locale}/>
        {children}
        <Footer/>
      </div>
      </ThemeInitializer>
      </NextIntlClientProvider>
    </ReduxProvider>
  )
}
