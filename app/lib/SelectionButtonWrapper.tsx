import { ReactNode } from "react";
import { BlurSpan } from "./BlurSpan";
import "@/app/lib/animations2.scss"

export const  SelectionButtonWrapper = ( { children } : { children: ReactNode }) => (

  <div className="w-full flex justify-center items-center">
    <div 
      className="
      animation-arrow
        relative group overflow-visible
        text-xl md:text-5xl">
      { children }
      <BlurSpan> { children } </BlurSpan>
    </div>
  </div>
)