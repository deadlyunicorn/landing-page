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
      h-[1px] group-hover:animation-ToCHover
      absolute bg-black bottom-0"/>
    <BlurSpan>
      {children}  
    </BlurSpan>
    { children }

  </li>
)