import { ReactNode } from "react"

export const PageSection = ( { id, children }: { id: string, children: ReactNode }) => (
    <section
      id={id}
      className="
        h-[100vh] gap-y-[10vh] w-full
        flex flex-col justify-start">
      { children }
    </section>
)