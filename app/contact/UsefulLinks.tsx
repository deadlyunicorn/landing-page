import Link from "next/link";
import { ReactNode } from "react";

export const UsefulLinks = () => (
  <ul className="grid grid-cols-2 overflow-visible
  [&>*:nth-child(even)]:place-self-end 
  gap-x-10 md:gap-x-20"> 
    <UsefulLinkItem href="/linkedin">LinkedIn</UsefulLinkItem>
    <UsefulLinkItem href="/resume">CV</UsefulLinkItem>
    <UsefulLinkItem href="/whatsapp">WhatsApp</UsefulLinkItem>
    <UsefulLinkItem href="/github">Github</UsefulLinkItem>
  </ul>
)

const UsefulLinkItem = ( { href, children }: { href: string, children: ReactNode } ) => (
  <li
    className="relative group overflow-visible text-lg md:text-2xl">
    <a 
      target="_blank"
      className="peer outline-none group"
      tabIndex={0} 
      href={ href }>
    
      <div className="
      h-[1px]  
      group-hover:animation-ToCHover
      group-focus:animation-ToCHover
      absolute bg-slate-950 dark:bg-slate-200 bottom-0 left-0"/>

      { children }
    </a>
    <span className="
      -z-10 
      left-0 absolute 
      peer-focus:blur-[2px]
      group-hover:blur-[2px] group-focus:blur-[2px]">
      {children}

    </span>
  </li>
)