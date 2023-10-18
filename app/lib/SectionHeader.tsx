import { ReactNode } from "react";

export const SectionHeader = ( { children }: { children: ReactNode } ) => (
  <header 
    className="
      relative border
      text-4xl md:text-7xl
      max-w-4xl place-self-center w-full
      max-h-[20vh] h-full 
      mt-[10vh] justify-center
      flex flex-col items-center">
    { children }
  </header>
)