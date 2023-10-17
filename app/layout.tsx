import './globals.css'
import type { Metadata } from 'next'
import { SectionScroller } from './lib/SectionScroller'

export const metadata: Metadata = {
  title: 'deadlyunicorn - Web developer',
  description: 
    'Welcome to my landing page! \
    I am deadlyunicorn a Web developer, \
    mainly working with React.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' 
        text-slate-200 w-[100vw]
        bg-gradient-to-b overflow-hidden
        from-slate-950 to-black from-85%'>
        <SectionScroller/>
        <main className='px-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
