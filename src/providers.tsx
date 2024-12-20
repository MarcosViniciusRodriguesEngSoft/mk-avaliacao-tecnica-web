'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { NaveBar } from './app/components/NaveBar/NaveBar'
import { GlobalContextProvider } from './context/GlobalContext'
import GlobalLoading from './global/components/GlobalLoading'
import PublicLayout from './global/components/Layout/PublicLayout'

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <GlobalContextProvider>
      <GlobalLoading />
      {(pathname !== '/' && pathname !== '/login') && <NaveBar />}
      <main>
        <PublicLayout>{children}</PublicLayout>
      </main>
    </GlobalContextProvider>
  )
}
