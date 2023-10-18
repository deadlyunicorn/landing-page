import Link from "next/link";
import { ReactNode } from "react";

export const UsefulLinks = () => (
  <ul className="grid grid-cols-2 
  [&>*:nth-child(even)]:place-self-end 
  gap-x-10 md:gap-x-20"> 
    <UsefulLinkItem href="/linkedin">LinkedIn</UsefulLinkItem>
    <UsefulLinkItem href="/github">Github</UsefulLinkItem>
    <UsefulLinkItem href="/x">X Social</UsefulLinkItem>
    <UsefulLinkItem href="/resume">CV</UsefulLinkItem>
  </ul>
)

const UsefulLinkItem = ( { href, children }: { href: string, children: ReactNode } ) => (
  <li
    className="relative group overflow-visible text-lg md:text-2xl">
    <Link 
      target="_blank"
      className="peer outline-none"
      tabIndex={0} 
      href={ href }>
      { children }
    </Link>
    <span className="
      -z-10
      left-0 absolute 
      peer-focus:blur-[2px]
      group-hover:blur-[2px] group-focus:blur-[2px]">
      {children}
    </span>
  </li>
)