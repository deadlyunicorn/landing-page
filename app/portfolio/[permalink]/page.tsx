import { SectionHeader } from "@/app/lib/SectionHeader";
import { PageSection } from "@/app/lib/SectionOutline";
import { ImageScroller } from "./ImageScroller";
import { DescriptionModal } from "./DescriptionModal";
import { revalidatePath } from "next/cache";

const ShowcaseDisplay = async( { params }: { 
  params:{
    permalink: string
  }
}) => {
  
  const showcaseItem = await fetch ( `${process.env.SERVER_URL}/api/portfolio-items/${params.permalink}`, { 
    next: {
      revalidate: 3600 * 24
    }
  })
    .then( async( res ) => res.ok? await res.json() :null);

    if ( !showcaseItem ){
      revalidatePath(`/portfolio/${params.permalink}`);
    }
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
              <p className="animation-description"> There was an error getting the showcase. </p>
            </div>
          </PageSection>

  )
} 

export default ShowcaseDisplay;