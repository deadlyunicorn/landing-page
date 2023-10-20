import { ReactNode } from "react";

export const SectionHeader = ( { children }: { children: ReactNode } ) => (
  <header 
    className="
      relative animation-header overflow-visible
      text-4xl md:text-7xl
      max-w-4xl place-self-center w-full
      max-h-[20vh] h-full 
      mt-[10vh] justify-center
      flex flex-col items-center">
      <div className="flex relative overflow-visible">

        { children }

      </div>
  </header>
)