import { ReactNode } from "react";

export const BlurSpan = ( { children }: { children: ReactNode }) => (

  <span className="
    absolute blur-[2px] hidden
    left-0 -z-10
    peer-focus:inline
    group-hover:inline group-focus:inline">
      { children }
  </span>
)