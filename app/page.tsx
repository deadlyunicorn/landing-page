import Link from "next/link";
import Image from "next/image";
import { ToCItem } from "./lib/ToCItem";

const Home = () => {
  return (
    <section
      id="table_of_contents"
      className="
        h-[100vh] 
        flex flex-col justify-evenly">

      <div className="flex flex-col items-center">
          <h1 className="text-5xl">deadlyunicorn.</h1>
          <h1 className="text-5xl blur-[2px] absolute">deadlyunicorn.</h1>
          <h2 className="
            text-2xl font-extralight
            place-self-start ml-10">
            A Web developer
          </h2>
      </div>

      <ul className="flex flex-col gap-y-2 items-center">
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
        className="opacity-30  mb-4 
          absolute right-4 bottom-0"
        src={"/deadlyunicorn.png"}
        width={100}
        height={100}
        alt="deadlyunicorn's online presence visualization"/>    
      </div>    


    </section>
  )
}


export default Home;