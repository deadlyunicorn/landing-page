"use client"
import { BlurSpan } from "@/app/lib/BlurSpan";
import { useEffect, useState } from "react";
import "@/app/lib/animations2.scss"

export const DescriptionModal = ( { fullDescription }: { fullDescription: string }) => {
  
  const [ showModal, setShowModal ] = useState( false );

  useEffect( ()=> {
    onkeydown = ( keyEvent ) => {
      if ( keyEvent.key === "Escape" ){
        setShowModal( false );
      }
    } 
  },[])

  return(
  <>
  <button 
    onClick={()=>{ setShowModal( true ) }}
    className="relative flex group overflow-visible outline-none text-xs place-self-end animation-learn-more">
    <BlurSpan>Learn more</BlurSpan>
    Learn more
  </button>

  { showModal && 
    <div className="
      fixed z-10
      w-[100vw] h-[100vh] 
      flex items-center justify-center
      bottom-0 left-0 
      bg-slate-200 bg-opacity-70
      dark:bg-slate-950 dark:bg-opacity-70
      backdrop-blur-md 
      px-4">
      <div
        onClick={()=>{
          setShowModal( false );
        }} 
        className="w-full h-full absolute cursor-crosshair"/>
      <section
        className="
        w-full animation-modal-appearance
        border-t
        border-r
        border-slate-950
        dark:border-slate-200
        dark:bg-slate-950 dark:text-slate-200
        bg-slate-200 text-slate-950
        py-4 px-10 
        flex flex-col gap-y-4
        backdrop-blur-md 
        bg-opacity-70
        dark:bg-opacity-70
        max-w-lg rounded-md"
        id="portfolio_item_dialog">
        <h3 className="text-3xl text-center md:text-5xl">Full Description</h3>
        <p
          dangerouslySetInnerHTML={
            { __html: fullDescription }
          } 
          className="text-lg text-center md:text-2xl"/>
        <div className="group relative w-fit place-self-center my-2 overflow-visible text-2xl md:text-3xl">
          <button
            className="peer outline-none"
            onClick={()=>{ setShowModal( false ) }}>
              Close
          </button>
          <BlurSpan>Close</BlurSpan>
        </div>
      </section>
    </div>
  }
  
  </>
  )
}