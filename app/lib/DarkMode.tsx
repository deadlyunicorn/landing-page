"use client"

import { useEffect, useState } from "react"

export const DarkMode = () => {

  const [ hasMounted, setHasMounted ] = useState( false );
  const [ darkMode, setDarkMode ] = useState( false );

  useEffect( () => {


    if ( hasMounted ){
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        setDarkMode( true );
      } else {
        document.documentElement.classList.remove('dark')
        setDarkMode( false );
      }

   
    }
    else{
      setHasMounted( true );
    }
    
  })

  return (

    <aside className="fixed top-2  w-full flex justify-center z-10"> 
      { hasMounted && 
      <div className="relative overflow-visible w-12 h-7 animationAppear">
        <button 
          aria-label='toggle dark mode'
          data-dark-mode={darkMode}
          className="
          outline-none peer
          px-1 py-1 relative
          bg-white rounded-md
          w-full h-full flex items-center"
          onClick={()=>{
            if ( localStorage.theme === "dark" ){
                localStorage.theme = 'light';
            }
            else{
              localStorage.theme = 'dark';
            }
            setDarkMode(!darkMode)                
          }}>


          <div 
            className="relative w-full h-full">

            {darkMode
              ?
                <svg
                className='h-5 w-5 px-[2px] py-[2px] fill-yellow-400 bg-slate-900 rounded-md darkModeSwitchSlideRight absolute'
                viewBox="0 0 70 70"><g transform="translate(-74.076052,-115.0173)"><path d="m 102.44124,115.01729 a 33.482487,33.482487 0 0 0 -7.080703,0.76946 29.928108,29.928108 0 0 1 0.461987,-0.017 29.928108,29.928108 0 0 1 29.927886,29.92789 A 29.928108,29.928108 0 0 1 95.822524,175.626 29.928108,29.928108 0 0 1 74.076048,166.24621 33.482487,33.482487 0 0 0 102.44124,181.98271 33.482487,33.482487 0 0 0 135.92395,148.5 33.482487,33.482487 0 0 0 102.44124,115.01729 Z" /></g></svg>
                    
              :
                <svg
                    className='h-5 w-5 px-[2px] py-[2px] fill-yellow-50 bg-yellow-400 rounded-md darkModeSwitchSlideLeft absolute'
                    viewBox="0 0 35.3 35.3"> <g id="layer1"> <path d="M 15.29519 0.42529704 L 14.831653 8.117334 A 9.9309711 9.9309711 0 0 0 12.814205 8.9637939 L 7.0021566 3.9036377 L 10.446391 10.796757 A 9.9309711 9.9309711 0 0 0 9.1234741 12.538253 L 1.5595947 11.061857 L 7.9891764 15.30966 A 9.9309711 9.9309711 0 0 0 7.713741 17.479553 L 0.42529704 19.98276 L 8.117334 20.446297 A 9.9309711 9.9309711 0 0 0 8.9637939 22.463228 L 3.9036377 28.275277 L 10.79624 24.831042 A 9.9309711 9.9309711 0 0 0 12.538253 26.154476 L 11.061857 33.718355 L 15.30966 27.288774 A 9.9309711 9.9309711 0 0 0 17.479553 27.563692 L 19.98276 34.852653 L 20.446297 27.160616 A 9.9309711 9.9309711 0 0 0 22.462712 26.314156 L 28.275277 31.374312 L 24.831042 24.48171 A 9.9309711 9.9309711 0 0 0 26.154476 22.739697 L 33.718355 24.216093 L 27.288774 19.96829 A 9.9309711 9.9309711 0 0 0 27.563692 17.798397 L 34.852653 15.29519 L 27.164233 14.831653 A 9.9309711 9.9309711 0 0 0 26.31674 12.811621 L 31.374312 7.0021566 L 24.483777 10.445357 A 9.9309711 9.9309711 0 0 0 22.740731 9.1188232 L 24.216093 1.5595947 L 19.970357 7.9860758 A 9.9309711 9.9309711 0 0 0 17.797363 7.7101237 L 15.29519 0.42529704 z " /><circle cx="17.638889"cy="17.638889"r="9.9309711" /></g></svg>
            }

          </div>
        </button>
        <div className="
          absolute hidden peer-focus:inline
          h-[2px] w-full bottom-0
          bg-slate-950 rounded-md px-1 
           blur-[2px]">

        </div>
      </div>
      }
    </aside>
  )
}