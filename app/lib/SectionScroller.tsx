"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react"
import { BlurSpan } from "./BlurSpan";


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
  const [ hasMounted, setHasMounted ] = useState( false );
  const currentSectionsIndex = sections.indexOf( currentSection );


  const handlePageChange = ( nextPageRequest:boolean ) => {
    const currentIndex = currentSectionsIndex;
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

    if ( hasMounted ){

      onwheel = ( wheelEvent ) => {
        handlePageChange( wheelEvent.deltaY < 0 ); 
      }
  
      if ( window && "ontouchstart" in window ){
  
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

    }
    else{
      setHasMounted( true );
    }})

  const nextSection = sections [ currentSectionsIndex + 1 ];
  const prevSection = sections [ currentSectionsIndex - 1 ];
    

  return ( 
    <>
    <aside className="fixed right-2 top-[40vh]">
      <ul className="flex flex-col gap-y-2">
        {
          sections.map( ( section, key ) => (
              <Link
                tabIndex={0}
                className="group outline-none"
                key={ `${section}_${key}` }
                replace={true}
                href={`${section}`}>
                <li  
                  data-current-section={ `${section}` == currentSection }
                  className="
                  bg-slate-200 
                  group-focus:bg-amber-600
                  group-hover:bg-blue-600
                    data-[current-section=true]:bg-amber-400
                    rounded-full w-2 h-2 border border-slate-200"/>
              </Link>
            ))
        }
      </ul>
    </aside>
    
    <aside 
    className="
      fixed
      bottom-0 
      flex w-full 
      justify-between 
      text-3xl md:text-5xl
      px-4 pb-2">
    { prevSection ?
      <Link
        className="relative group outline-none overflow-visible"
        tabIndex={ 0 } 
        href={ prevSection }>
        <BlurSpan> &lt; </BlurSpan>
        &lt;
      </Link>
      : <div></div>
    }
    
    {  
    nextSection ?
      
      currentSectionsIndex === -1?
      <div className="w-full flex justify-center text-lg md:text-3xl">
      <Link
        tabIndex={0} 
        className="group outline-none overflow-visible relative"
        href={ nextSection }>
        <BlurSpan> Homepage </BlurSpan>
        Homepage
      </Link>
      </div>
      :
      <Link
        tabIndex={0} 
        className="relative group outline-none overflow-visible"
        href={ nextSection }>
        <BlurSpan> &gt; </BlurSpan>
        &gt;
      </Link>
      : <div></div>
    }
    </aside>
    </>
  )
}

const delay = async( ms: number ) => new Promise ( res => { setTimeout( res, ms)});

