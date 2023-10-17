"use client"

import { use, useEffect, useState } from "react"


export const SectionScroller = () => {

  const sections = [
    "#table_of_contents",
    "#about_section",
    "#portfolio_section",
    "#contact_section"
  ];
  const [ currentSection, setCurrentSection ] = useState('#table_of_contents');

  const [ loading, setLoading ] = useState( false );

  useEffect( ()=>{

    onwheel = ( wheelEvent ) => {
      
      const currentIndex = sections.indexOf( currentSection );
      const sectionLength = sections.length;

      if ( !loading ){
        setLoading( true );


        setCurrentSection ( sections[ 
          wheelEvent.deltaY < 0 
          ? currentIndex > 0 
            ? currentIndex - 1
            : currentIndex 
          : currentIndex < sectionLength - 1
            ? currentIndex + 1
            : currentIndex ]
        )

        console.log( currentSection );


        setTimeout( ()=> {
          setLoading(false);
        }, 200)

      }
      

    }})

      /*
      if ( "ontouchstart" in window){

        ontouchmove = ( touchMoveEvent ) => {
          console.log( touchMoveEvent );
        }
        ontouchend = ( touchend ) => {
          alert( " end" )
        } 
      }
      
      
      console.log(currentSection)
      */

  useEffect( ()=> {

    document.location.hash = currentSection;

  } )


  return ( 
    <aside className="fixed right-2 top-[40vh]">
      <ul className="flex flex-col gap-y-2">
        {
          sections.map( section => {
            return (
              <a 
                onClick={ ( e )=> {
                  setCurrentSection( section )
                }}
                href={section}>
                <li  
                  data-currentSection={ section == currentSection }
                  className="
                    bg-slate-200 data-[currentSection=true]:bg-amber-400
                    rounded-full w-2 h-2 border border-slate-200"/>
              </a>
            )
          })
        }
      </ul>
    </aside>
  )
}

const delay = async( ms: number ) => new Promise ( res => { setTimeout( res, ms)});