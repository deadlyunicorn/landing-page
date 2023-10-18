import { mongoClient } from "@/app/api/mongodb/mongoClient"
import { SectionHeader } from "@/app/lib/SectionHeader";
import { PageSection } from "@/app/lib/SectionOutline";
import { showcaseItem } from "@/app/types/showcaseItem";

const ShowcaseDisplay = async() => {

  const showcaseItems = mongoClient.db('landing-page').collection('showcase-items');
  const showcaseItem  = await showcaseItems.findOne({}) as unknown as showcaseItem | null;


  return (
    
        showcaseItem
          ?
          <PageSection
            id= { showcaseItem.title }>
            <SectionHeader>
              { showcaseItem.title }
            </SectionHeader>
            <section className="
            border h-full 
            mb-[10vh] max-w-4xl 
            place-self-center w-full
            flex flex-col gap-y-4">
              <h3 className="text-2xl md:text-5xl text-center"> Description </h3>
              <p className="text-lg md:text-3xl text-center"> { showcaseItem.fullDescription } </p>

              <aside>
                { showcaseItem.images.map( image =>
                  "image"
                )}
              </aside>
            </section>
          </PageSection>

          :
          <PageSection
            id="wrong_page">
            <div className="
              flex h-full 
              items-center justify-center 
              text-lg md:text-5xl">
              <p> Showcase item not found. </p>
            </div>
          </PageSection>

  )
} 

export default ShowcaseDisplay;