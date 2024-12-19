'use client'
import React from 'react'
import { GlobalContextProvider } from './context/GlobalContext'
import GlobalLoading from './global/components/GlobalLoading'
import PublicLayout from './global/components/Layout/PublicLayout'

export default function Providers({ children }: { children: React.ReactNode }) {

  return (
    <GlobalContextProvider>
      <GlobalLoading />
      <main>
        <PublicLayout>{children}</PublicLayout>
      </main>
    </GlobalContextProvider>
  )
}
