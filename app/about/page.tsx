import { SectionHeader } from "../lib/SectionHeader";
import { PageSection } from "../lib/SectionOutline";
import mongoClient from "../api/mongodb/mongoClient";
import { WordCloud } from "./WordCloud";

const AboutSection = async() => {


  const description =  
  await mongoClient.db('landing_page').collection('sections').findOne( { section: "about" } ).then( res => res? res.content :null );
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
          {__html: description}
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