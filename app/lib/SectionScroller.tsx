"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react"


export const SectionScroller = () => {

  const sections = [
    "/",
    "/about",
    "/portfolio",
    "/contact"
  ];
  const router = useRouter();


  const currentSection = usePathname();


  const [ loading, setLoading ] = useState( false );

  const handlePageChange = ( nextPageRequest:boolean ) => {
    const currentIndex = sections.indexOf( currentSection );
        const sectionLength = sections.length;
  
        if ( !loading ){
          setLoading( true );
  
  
          const newSection = ( `${sections[ 
            nextPageRequest
            ? currentIndex > 0 
              ? currentIndex - 1
              : currentIndex 
            : currentIndex < sectionLength - 1
              ? currentIndex + 1
              : currentIndex ]}`
          )
  
          if ( newSection !== currentSection ){
            router.replace( newSection );
          }
  
          setTimeout( ()=> {
            setLoading(false);
          }, 200)
        }
  }

  useEffect( ()=>{

    onwheel = ( wheelEvent ) => {
      handlePageChange( wheelEvent.deltaY < 0 ); 
    }})

    if ( "ontouchstart" in window ){

      let touchInitial = 0;

      ontouchstart = ( touchStartEvent ) => {
        touchInitial = ( touchStartEvent.touches[0].pageY )
      }
      ontouchmove = ( touchMoveEvent ) => {
        if ( touchMoveEvent.touches[0].pageY < touchInitial ){
          handlePageChange( false );
        }
        else{
          handlePageChange( true );
        }
      }

    }


  return ( 
    <aside className="fixed right-2 top-[40vh]">
      <ul className="flex flex-col gap-y-2">
        {
          sections.map( section => (
              <Link
                replace={true}
                href={`${section}`}>
                <li  
                  data-current-section={ `${section}` == currentSection }
                  className="
                    bg-slate-200 data-[current-section=true]:bg-amber-400
                    rounded-full w-2 h-2 border border-slate-200"/>
              </Link>
            ))
        }
      </ul>
    </aside>
  )
}

const delay = async( ms: number ) => new Promise ( res => { setTimeout( res, ms)});

