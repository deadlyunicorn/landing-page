import { BlurSpan } from "../lib/BlurSpan";
import { SelectionButtonWrapper } from "../lib/SelectionButtonWrapper";
import { showcaseItem } from "../types/showcaseItem";
import Image from "next/image";

export const ShowcaseFallback = ( ) => {

  const showcaseItem:showcaseItem =
    {
      title: "A showcase Item",
      thumbnail: "/deadlyunicorn.png",
      shortDescription: "The item is loading",
      fullDescription: "Loading actual showcase items",
      images: [
        "/deadlyunicorn.png",
        "/deadlyunicorn.png",
        "/deadlyunicorn.png",
        "/deadlyunicorn.png",
      ]
    }
  const showcaseItems: showcaseItem[] = new Array(5).fill( showcaseItem );
  
  const showcaseItemsLength = showcaseItems.length;
  const currentItem1Small = showcaseItems[ 0 * 2 ];
  const currentItem2Small = showcaseItems[ 0 * 2 + 1 ];

  const currentItem1Medium = showcaseItems[ 0 * 4 ];
  const currentItem2Medium = showcaseItems[ 0 * 4 + 1 ];
  const currentItem3Medium = showcaseItems[ 0 * 4 * 2 ];
  const currentItem4Medium = showcaseItems[ 0 * 4 * 2 + 1 ];



  return (
    <section className="h-full mb-[10vh] flex w-full animation-portfolio-items-fallback">
      
      <div className="w-[10%] items-center flex"/>

      <ul className="h-full w-[80%] flex flex-col justify-between md:hidden">
        { currentItem1Small && <ShowcaseItemFallback item={ currentItem1Small }/> }
        { currentItem2Small && <ShowcaseItemFallback item={ currentItem2Small }/> }
      </ul>
      <ul className="
        md:gap-x-8 md:gap-y-8
        md:grid 
        md:grid-cols-2 
        md:grid-rows-2
        h-full w-[80%]
        justify-items-center 
        hidden">
        { currentItem1Medium && <ShowcaseItemFallback item={ currentItem1Medium }/> }
        { currentItem2Medium && <ShowcaseItemFallback item={ currentItem2Medium }/> }
        { currentItem3Medium && <ShowcaseItemFallback item={ currentItem3Medium }/> }
        { currentItem4Medium && <ShowcaseItemFallback item={ currentItem4Medium }/> }
      </ul>
  
      <div className="w-[10%] md:hidden flex items-center"/>

      <div className="w-[10%] md:flex hidden items-center">
        <SelectionButtonWrapper>
          <button 
            className="peer outline-none">
            
            &gt;
          </button>
          <BlurSpan> &gt; </BlurSpan>
        </SelectionButtonWrapper>
      </div>


    </section>
  )
}

const ShowcaseItemFallback = ( { item }: { item: showcaseItem }) => (
  <li 
    className="
    blur-sm
    md:h-full md:max-w-md
    w-full
    rounded-md h-[45%]">
    
      <Image
        alt={`thumbnail of ${item.title}`}
        width={200}
        height={200}
        className="
          animate-pulse
          bg-slate-300 bg-opacity-60
          dark:bg-slate-900 dark:bg-opacity-60
          rounded-md
          object-contain h-[60%] w-full" 
        src={item.thumbnail}/>
        <div className="
          bg-slate-300 bg-opacity-30
          dark:bg-slate-900 dark:bg-opacity-30
          w-full flex flex-col h-[40%] ">
          <p className="text-lg text-center flex justify-center">{ item.title }</p>
          <p className="w-full flex flex-col items-center justify-center">
            { item.shortDescription }
          </p>
        </div>
  
  </li>
  )