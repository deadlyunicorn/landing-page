import { SectionHeader } from "../lib/SectionHeader";
import { PageSection } from "../lib/SectionOutline";
import mongoClient from "../api/mongodb/mongoClient";
import { WordCloud } from "./WordCloud";

const AboutSection = async() => {


  const description =  await fetch( `${process.env.SERVER_URL}/api/about`,{
    next:{
      revalidate:3600
    }
  })
    .then( async( res ) => res.ok? await res.json() :null );
  // "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
  return(
  <PageSection
    id="about_section">

      <WordCloud/>
      <SectionHeader>
        <h1 className="invisible">About Me</h1>
        <h1 className="animatable">About Me</h1>
      </SectionHeader>


    <div className="
      h-full 
      mb-[10vh]
      flex items-center justify-center 
      md:text-2xl ">
      <p
        dangerouslySetInnerHTML={
          {__html: description || "There was an error getting this section. <br/> Please try again."}
        } 
        className="
         bg-clip-text animation-description
        bg-gradient-to-r from-transparent dark:to-white to-black
        from-[-200%] to-[100%]
        bg-no-repeat 
        text-center text-transparent"/>
    </div>

    
  </PageSection>
  )
}

export default AboutSection;