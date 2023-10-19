"use client"

import { ReactNode, useEffect, useState } from "react"
import { BlurSpan } from "./BlurSpan"
import Image from "next/image"

export const ImageWrapForModal = ( { imageURL, children }: {
  imageURL: string,
  children: ReactNode
}) => {

  useEffect( ()=> {
    
    onkeydown = ( keyEvent ) => {
      if ( keyEvent.key === "Escape" ){
        setViewImage(false);
      }
    }
  
  },[])

  const [ viewImage, setViewImage ] = useState( false );

  return (
    <>
      <div className="h-full w-full group relative">
        {children}
        <button 
          onClick={ ()=> { setViewImage( true ) } }
          className="
            group-hover:flex hidden
            items-center justify-center
            left-0 bottom-0 
            bg-slate-200 bg-opacity-60
            dark:bg-slate-950 dark:bg-opacity-60 backdrop-blur-sm
            absolute 
            h-full w-full">
            <div className="flex relative">

            <BlurSpan>View</BlurSpan>
            View
          </div>
        </button>
      </div>

      { viewImage && 
        <section className="
          flex flex-col 
          items-center justify-center
          backdrop-blur-lg z-10
          h-[100vh] w-[100vw] 
          fixed 
          left-0 bottom-0">
          <div
            onClick={()=>{
              setViewImage( false );
            }} 
            className="w-full h-full absolute cursor-crosshair"/>

          <div className="absolute
            items-center justify-center  
            flex flex-col
            h-[80vh] w-[90vw]">
            <Image
              className="object-contain"
              width=  { 900 }
              height= { 900 }
              src={ imageURL } 
              alt="Fullscreen view of the image"/>

            <div className="
              text-3xl md:text-5xl
              group relative 
              w-fit place-self-center 
              my-2 overflow-visible">
            
              <button
                className="peer outline-none"
                onClick={()=>{ setViewImage( false ) }}>
                  Close
              </button>
              <BlurSpan>Close</BlurSpan>
            </div>
          </div>

          
        </section>
      }
    </>
  )

}