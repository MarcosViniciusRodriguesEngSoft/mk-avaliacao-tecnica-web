'use client'
import React from 'react'
import GlobalLoading from './global/components/GlobalLoading'
import PublicLayout from './global/components/Layout/PublicLayout'
import { GlobalContextProvider } from './context/GlobalContext'

export default function Providers({ children }: { children: React.ReactNode }) {

  return (
    <GlobalContextProvider>
      <GlobalLoading />
      <PublicLayout>{children}</PublicLayout>
    </GlobalContextProvider>
  )
}
