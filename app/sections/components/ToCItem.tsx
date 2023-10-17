import { ReactNode } from "react";

export const ToCItem = ( { children } : { children : ReactNode} ) => (

  <li 
    className="
      relative font-light
      hover:text-white
      text-3xl w-fit">
    <span className="absolute hover:blur-[2px] group-focus:blur-[2px]">
      {children}
    </span>
    { children }

  </li>
)