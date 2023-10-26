import { showcaseItem, showcaseItemOnDB } from "../types/showcaseItem"
import { ShowcaseClient } from "./ShowcaseClient"
import mongoClient from "../api/mongodb/mongoClient";
import "@/app/portfolio/showcaseAnimations.scss"

export const Showcase = async()=> {

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
  // const showcaseItems: showcaseItem[] = new Array(5).fill( showcaseItem )
  
  const showcaseItems = await fetch( `${process.env.SERVER_URL}/api/portfolio-items`,{
    next:{
      revalidate: 3600,
    },
    cache: "no-store"
  })
  .then(
    async( res ) => res.ok? await res.json() :null
  );




  return (
    
    ( showcaseItems && showcaseItems.length > 0 )
    ?<ShowcaseClient showcaseItems={ showcaseItems }/>
    :<p className="
      text-center 
      text-xl md:text-3xl 
      animation-short-description">
        There was an error getting the items.
      </p>
 
  )

} 