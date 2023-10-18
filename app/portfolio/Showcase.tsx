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
  

  return (
    
    <ShowcaseClient showcaseItems={ showcaseItems }/>
 
  )

} 