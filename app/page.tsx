import Link from "next/link";
import Image from "next/image";
import { ToCItem } from "./lib/ToCItem";
import { PageSection } from "./lib/SectionOutline";
import { SectionHeader } from "./lib/SectionHeader";
import deadlyunicorn from "@/public/deadlyunicorn.png";
import "@/app/lib/animations.css";
import "@/app/lib/animations2.scss";
import { DeadlyUnicornSVG } from "./deadlyunicorn";

const Home = () => {
  return (
    <PageSection id="table_of_contents">
      <SectionHeader>
        <div className="overflow-visible">
          <div className="relative overflow-visible">
            <h1 className="text-4xl md:text-7xl invisible">deadlyunicorn.</h1>
            <h1 className="animatable text-4xl md:text-7xl text-slate-700 dark:text-inherit">
              deadlyunicorn.
            </h1>
            <h1 className="animatable text-4xl md:text-7xl blur-[2px] absolute top-0">
              deadlyunicorn.
            </h1>
          </div>

          <div className="relative overflow-visible">
            <h2
              className="text-2xl font-extralight
                invisible
                place-self-center justify-self-end "
            >
              A Software Developer
            </h2>
            <h2
              className="
                text-2xl font-extralight
                place-self-center justify-self-end
                animation-invisible-1s
                animation-webDeveloperHeader"
            >
              A Software Developer
            </h2>
          </div>
        </div>
      </SectionHeader>

      <ul
        className="
        animation-ToCEntry
        flex flex-col gap-y-4 md:gap-y-12 items-center overflow-visible"
      >
        <Link className="group outline-none" tabIndex={0} href="/about">
          <ToCItem>About</ToCItem>
        </Link>
        <Link className="group outline-none" tabIndex={0} href="/portfolio">
          <ToCItem>Portfolio</ToCItem>
        </Link>
        <Link className="group outline-none" tabIndex={0} href="/contact">
          <ToCItem>Contact</ToCItem>
        </Link>
      </ul>

      <DeadlyUnicornSVG/>
    </PageSection>
  );
};

export default Home;

