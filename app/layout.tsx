import './globals.css'
import type { Metadata } from 'next'
import { SectionScroller } from './lib/SectionScroller'
import { DarkMode } from './lib/DarkMode'

export const metadata: Metadata = {
  title: 'deadlyunicorn - A Fullstack developer',
  description: 
    'Welcome to my landing page! \
    I am Alexander Petrache a Fullstack developer, \
    mainly working with React.JS ( Next.JS ) and Flutter.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' 
        dark:text-slate-200 w-[100vw]
        bg-gradient-to-b overflow-hidden
        text-slate-950
        from-slate-200 to-slate-300
        dark:from-slate-950 dark:to-black from-85%'>
        <DarkMode/>

        <main className='px-8'>
          {children}
        </main>
        <SectionScroller/>
      </body>
    </html>
  )
}
