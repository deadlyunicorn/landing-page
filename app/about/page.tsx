import { SectionHeader } from "../lib/SectionHeader";
import { PageSection } from "../lib/SectionOutline";
import { WordCloud } from "./WordCloud";
import { UnderlineAnimationComponent } from "../lib/UnderlineAnimationComponent";
import { ReactNode } from "react";

const AboutSection = () => {

  return(
  <PageSection
    id="about_section">

      <WordCloud/>
      <SectionHeader>
        <h1 className="invisible">About Me</h1>
        <h1 className="animatable">About Me</h1>
      </SectionHeader>


    <Description>
        <p>
          My name is Alexander Petrache and I am a Fullstack developer ( Web & Mobile )
          <br/>I have significant experience with Next.js* and Flutter.
          <br/>
          <br/>Regarding databases, I am more familiar with MongoDB, but also know some fundamental SQL.
          <br/>Technologies I really like and I am familiar with are Git, Typescript and TailwindCSS. 
          <br/>I mainly have experience through personal projects.
        </p>
        <div className="text-base  flex items-center justify-center mb-1">
          Be sure to check my&nbsp;
            <a 
              target="_blank"
              className="outline-none group relative
              text-stone-700 dark:text-stone-400" 
              href="/github">
                GitHub
                <UnderlineAnimationComponent/>
            </a>
        </div>
        <p>I am also a Cyber Security enthusiast.</p>
        <br/>
        <br/><span className="text-sm md:text-base">*Next.js is a Fullstack Javascript Framework based on React.js</span>
    </Description>
    

    
  </PageSection>
  )


}

export default AboutSection;


const Description = ( {children}: {children: ReactNode}) => (
  
  <div className="
      h-full animationAppear
      mb-[10vh] relative
      flex items-center justify-center 
      md:text-2xl ">
      <div
        className="
         bg-clip-text animation-description
        bg-gradient-to-l from-stone-400 dark:from-stone-700 dark:to-white to-black
        from-[-20%] to-[50%]
        bg-no-repeat
        text-center text-transparent">
        {children}
      </div>
      <div className="absolute text-center -z-10 text-[#00000030] dark:text-[#FFFFFF30] blur-[4px] ">
        {children}
      </div>
    </div>

)