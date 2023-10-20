import Image from "next/image"
import { showcaseItem } from "../types/showcaseItem"
import { ShowcaseClient } from "./ShowcaseClient"

export const Showcase = async()=> {

  const showcaseItem:showcaseItem =
    {
      title: "CoolItem",
      thumbnail: "/deadlyunicorn.png",
      shortDescription: "A mock social app",
      fullDescription: "This is a mock social app. You can add friends etc1, etc2, etc3",
      images: [
        "/deadlyunicorn.png",
        "/deadlyunicorn.png",
        "/deadlyunicorn.png",
        "/deadlyunicorn.png",
      ]
    }
  const showcaseItems: showcaseItem[] = new Array(5).fill( showcaseItem )
  
  // const showcaseItem  = await showcaseItems.findOne({}) as unknown as showcaseItem | null;
  // const showcaseItems = mongoClient.db('landing-page').collection('showcase-items');

  return (
    
    <ShowcaseClient showcaseItems={ showcaseItems }/>
 
  )

} 