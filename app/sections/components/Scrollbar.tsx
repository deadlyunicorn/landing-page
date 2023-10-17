'use client'

//!! NOT-USED :

//Bugs when:
// a. on mobile
// b. screen width is small

import { useEffect, useState } from "react"

export const Scrollbar = () => {

  const [ viewHeight, setHeight ] = useState( 0 ); //height constant
  const [ scrollY, setY ] = useState( 0 );         //y changes

  useEffect( () => {

    onscroll = (e) => {
      setY( window.scrollY )
    }

  })
  
  useEffect( () => {

    setHeight( document.documentElement.scrollHeight - window.innerHeight )

  }, [] )

  const scrollPercentage = 100 * scrollY / ( viewHeight || 1 ) ;

  return (
    
    <>
    <div className="w-[100vw] h-[100vh] left-0 top-0 fixed border">
      <div
        className="absolute right-0 top-0 bg-white w-1 text-white" 
        style={ { height: `${scrollPercentage}vh` } }>
      {viewHeight} {scrollY}
      </div>
    </div>
    <div className="fixed left-0 text-white">
      {scrollPercentage} <br/>
      {scrollY} / {viewHeight}
    </div>
    </>

  )
}