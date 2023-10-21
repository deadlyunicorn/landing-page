import { ReactNode } from "react";
import "@/app/lib/animations.css"
import { BlurSpan } from "./BlurSpan";

export const ToCItem = ( { children } : { children : ReactNode} ) => (

  <li 
    className="
      group
      relative font-light
      text-3xl md:text-5xl
      w-fit">
    <div className="
      group-focus:animation-ToCHover
      group-hover:animation-ToCHover
      h-[1px] dark:bg-slate-200
      absolute bg-slate-950 bottom-0"/>
    <BlurSpan>
      {children}  
    </BlurSpan>
    { children }

  </li>
)