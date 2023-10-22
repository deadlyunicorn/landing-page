import mongoClient from "@/app/api/mongodb/mongoClient";
import { SectionHeader } from "@/app/lib/SectionHeader";
import { PageSection } from "@/app/lib/SectionOutline";
import { showcaseItem } from "@/app/types/showcaseItem";
import { ImageScroller } from "./ImageScroller";
import { DescriptionModal } from "./DescriptionModal";

const ShowcaseDisplay = async( { params }: { 
  params:{
    permalink: string
  }
}) => {
  
  const showcaseItems = mongoClient.db('landing_page').collection('showcase_items');
  const showcaseItem  = await showcaseItems.findOne( { permalink: params.permalink } ) as unknown as showcaseItem | null;


  // const showcaseItem:showcaseItem =
  //   {
  //     title: "CoolItem",
  //     thumbnail: "/deadlyunicorn.png",
  //     shortDescription: "A mock social app",
  //     fullDescription: "This is a mock social app. You can add friends etc1, etc2, etc3",
  //     images: [
  //       "/deadlyunicorn.png",
  //       "/deadlyunicorn.png",
  //       "/deadlyunicorn.png",
  //       "/deadlyunicorn.png",
  //     ]
  //   }
  

  return (
    
        showcaseItem
          ?
          <PageSection
            id= { showcaseItem.title }>
            <SectionHeader>
              <h1 className="invisible"> { showcaseItem.title } </h1>
              <h1 className="animatable"> { showcaseItem.title } </h1>
            </SectionHeader>
            <section className="
            h-full 
            mb-[10vh] max-w-4xl
            place-self-center w-full
            flex flex-col gap-y-4">
              <h3 className="text-2xl md:text-5xl text-center animation-about-item"> About </h3>
              <div className="flex justify-center items-center overflow-visible">
                <p className="text-lg md:text-3xl text-center animation-short-description">
                  { showcaseItem.shortDescription }
                </p>&nbsp;
                <DescriptionModal fullDescription={ showcaseItem.fullDescription }/>
              </div>

              
              { showcaseItem.images.length > 0 
                &&<ImageScroller images={ showcaseItem.images }/>
              }
            </section>
          </PageSection>

          :
          <PageSection
            id="wrong_page">
            <div className="
              flex h-full 
              items-center justify-center 
              text-lg md:text-5xl">
              <p className="animation-description"> Showcase item not found. </p>
            </div>
          </PageSection>

  )
} 

export default ShowcaseDisplay;