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


export default function Providers({ children,locale,messages }: { children: ReactNode, locale:'en' | 'ar',messages:any }) {
  
  return (
    <ReduxProvider store={store}>
      <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeInitializer>
      <div className={dm_sans.className}>
        <Appbar locale={locale}/>
        {children}
        <Footer locale={locale}/>
      </div>
      </ThemeInitializer>
      </NextIntlClientProvider>
    </ReduxProvider>
  )
}
