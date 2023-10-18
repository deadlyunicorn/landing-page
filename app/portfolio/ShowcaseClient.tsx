"use client"

import Image from "next/image"
import { showcaseItem } from "../types/showcaseItem"
import { ReactNode, useState } from "react";
import Link from "next/link";
import { BlurSpan } from "../lib/BlurSpan";

export const ShowcaseClient = ( { showcaseItems }: { showcaseItems: showcaseItem[] } ) => {

  const [ currentSelection, setCurrentSelection ] = useState( 0 );

  return (
    <section className="h-full mb-[10vh] flex w-full">
      <ShowcaseSelectorWrap>

          <button 
            
            data-show-item-small={ currentSelection > 0 }
            className="data-[show-item-small=false]:hidden peer outline-none"
            onClick={()=>{ setCurrentSelection( currentSelection - 1 )}}>
            &lt;

          </button>
          <BlurSpan> &lt; </BlurSpan>


      </ShowcaseSelectorWrap>

      <ul className="h-full w-full flex flex-col justify-between">
        {showcaseItems.map( ( item, key ) => (
            
            <li 
              data-selection={ currentSelection * 2 == key || currentSelection * 2 + 1 == key }
              className="
              hover:brightness-125
              data-[selection=false]:hidden
              rounded-md h-[45%] border ">

              <Link
                href={`/portfolio/${item.title}`}>
                <Image
                  alt={`thumbnail of ${item.title}`}
                  width={200}
                  height={200}
                  className="
                    bg-slate-900
                    rounded-md
                    object-contain h-[60%] w-full" 
                  src={item.thumbnail}/>
                  <p className="text-lg text-center">{ item.title }</p>
                  <p className="text-center">{ item.shortDescription }</p>

              </Link>
            </li>
        ))}
      </ul>
  
      <ShowcaseSelectorWrap>
        <button 
          className="data-[show-item-small=false]:hidden"
          data-show-item-small={ currentSelection * 2 + 1 < showcaseItems.length }
          onClick={
          ()=>{ setCurrentSelection( currentSelection + 1 )}}>
          &gt;
        </button>
        <BlurSpan> &gt; </BlurSpan>

      </ShowcaseSelectorWrap>

    </section>
  )
}

const ShowcaseSelectorWrap = ( { children } : { children: ReactNode }) => (
  <div className="w-[10%] h-full flex items-center justify-center text-xl">
    <div className="group relative">
      { children }
    </div>
  </div>
)