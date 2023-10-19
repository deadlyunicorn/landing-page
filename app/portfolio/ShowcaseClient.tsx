"use client"

import Image from "next/image"
import { showcaseItem } from "../types/showcaseItem"
import { useEffect, useState } from "react";
import Link from "next/link";
import { BlurSpan } from "../lib/BlurSpan";
import { SelectionButtonWrapper } from "../lib/SelectionButtonWrapper";

export const ShowcaseClient = ( { showcaseItems }: { showcaseItems: showcaseItem[] } ) => {

  const [ showcaseIndex, setShowcaseIndex ] = useState( 0 );
  const showcaseItemsLength = showcaseItems.length;
  const currentItem1Small = showcaseItems[ showcaseIndex * 2 ];
  const currentItem2Small = showcaseItems[ showcaseIndex * 2 + 1 ];

  const currentItem1Medium = showcaseItems[ showcaseIndex * 4 ];
  const currentItem2Medium = showcaseItems[ showcaseIndex * 4 + 1 ];
  const currentItem3Medium = showcaseItems[ showcaseIndex * 4 * 2 ];
  const currentItem4Medium = showcaseItems[ showcaseIndex * 4 * 2 + 1 ];

  useEffect( ()=> {
    onresize = () => {
      setShowcaseIndex(0);
    }
  },[])



  return (
    <section className="h-full mb-[10vh] flex w-full">
      
      <div className="w-[10%] items-center flex">
      <SelectionButtonWrapper>
        { showcaseIndex > 0 && 
          <button 
            className="peer outline-none"
            onClick={()=>{ setShowcaseIndex( showcaseIndex - 1 )}}>
            &lt;

          </button>
        }
          <BlurSpan> &lt; </BlurSpan>
      </SelectionButtonWrapper>
      </div>

      <ul className="h-full w-[80%] flex flex-col justify-between md:hidden">
        { currentItem1Small && <ShowcaseItem item={ currentItem1Small }/> }
        { currentItem2Small && <ShowcaseItem item={ currentItem2Small }/> }
      </ul>
      <ul className="
        md:gap-x-8 md:gap-y-8
        md:grid 
        md:grid-cols-2 
        md:grid-rows-2
        h-full w-[80%]
        justify-items-center 
        hidden">
        { currentItem1Medium && <ShowcaseItem item={ currentItem1Medium }/> }
        { currentItem2Medium && <ShowcaseItem item={ currentItem2Medium }/> }
        { currentItem3Medium && <ShowcaseItem item={ currentItem3Medium }/> }
        { currentItem4Medium && <ShowcaseItem item={ currentItem4Medium }/> }
      </ul>
  
      <div className="w-[10%] md:hidden flex items-center">
        <SelectionButtonWrapper>
          { showcaseIndex * 2 + 1 < showcaseItemsLength  && 
          <button 
            className="peer outline-none"
            onClick={
            ()=>{ setShowcaseIndex( showcaseIndex + 1 )}}>
            &gt;
          </button>
          }
          <BlurSpan> &gt; </BlurSpan>

        </SelectionButtonWrapper>
      </div>

      <div className="w-[10%] md:flex hidden items-center">
        <SelectionButtonWrapper>
          { showcaseIndex * 4 + 1 < showcaseItemsLength  && 
          <button 
            className="peer outline-none"
            onClick={
            ()=>{ setShowcaseIndex( showcaseIndex + 1 )}}>
            &gt;
          </button>
          }
          <BlurSpan> &gt; </BlurSpan>

        </SelectionButtonWrapper>
      </div>


    </section>
  )
}


const ShowcaseItem = ( { item }: { item: showcaseItem }) => (
<li 
  className="
  md:h-full md:max-w-md
  w-full
  rounded-md h-[45%]">
  <Link
    className="hover:brightness-125 focus:brightness-125"
    tabIndex={0}
    href={`/portfolio/${item.title}`}>
    <Image
      alt={`thumbnail of ${item.title}`}
      width={200}
      height={200}
      className="
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

  </Link>
</li>
)