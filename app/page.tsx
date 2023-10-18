import Link from "next/link";
import Image from "next/image";
import { ToCItem } from "./lib/ToCItem";
import { PageSection } from "./lib/SectionOutline";
import { SectionHeader } from "./lib/SectionHeader";

const Home = () => {
  return (
    <PageSection
      id="table_of_contents">
      <SectionHeader>
          <div className="relative overflow-visible">
            <h1 className="text-4xl md:text-7xl">deadlyunicorn.</h1>
            <h1 className="text-4xl md:text-7xl blur-[2px] absolute top-0">deadlyunicorn.</h1>
          </div>
          
          <h2 className="
            text-2xl font-extralight
            place-self-center justify-self-end
            -ml-[30%]">
            A Web developer
          </h2>
      </SectionHeader>

      <ul className="flex flex-col gap-y-4 md:gap-y-12 items-center overflow-visible">
        <Link 
          className="group outline-none"
          tabIndex={0}      
          href="/about"><ToCItem>About</ToCItem></Link>
        <Link 
          className="group outline-none"
          tabIndex={0}      
          href="/portfolio"><ToCItem>Portfolio</ToCItem></Link>
        <Link 
          className="group outline-none"
          tabIndex={0}      
          href="/contact"><ToCItem>Contact</ToCItem></Link>
      </ul>

      <div className="place-self-end h-[32vh]">
      <Image
        className="
          scale-x-[-1]
          opacity-30  mb-4 
          absolute left-4 bottom-0"
        src={"/deadlyunicorn.png"}
        width={100}
        height={100}
        alt="deadlyunicorn's online presence visualization"/>    
      </div>    
    </PageSection>
  )
}


export default Home;