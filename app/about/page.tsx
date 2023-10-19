import { SectionHeader } from "../lib/SectionHeader";
import { PageSection } from "../lib/SectionOutline";
import mongoClient from "../api/mongodb/mongoClient";
import { WordCloud } from "./WordCloud";

const AboutSection = async() => {


  const description = await mongoClient.db('landing_page').collection('sections').findOne( { section: "about" } ).then( res => res? res.content :null );
  return(
  <PageSection
    id="about_section">

      <WordCloud/>
      <SectionHeader>
        <h1> About Me </h1>
      </SectionHeader>


    <div className="h-full mb-[10vh] flex items-center justify-center md:text-2xl">
      <p
        dangerouslySetInnerHTML={
          {__html: description}
        } 
        className="text-center"/>
    </div>

    
  </PageSection>
  )
}

export default AboutSection;