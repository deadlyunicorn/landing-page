import { ReactNode } from "react";
import '@/app/lib/animations.css'

export const BlurSpan = ( { children }: { children: ReactNode }) => (

  <span className="
    absolute animation-smoothBlur hidden
    left-0 -z-10
    peer-focus:inline
    group-hover:inline group-focus:inline">
      { children }
  </span>
)