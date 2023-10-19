export const WordCloud = () => {


  const words = [
    "NextJS",
    "Typescript",
    "NodeJS",
    "React",
    "Cyber Security",
    "Flutter",
    "AI",
    "Linux",
    "MongoDB",
    "Virtual Reality",
    "Mixed Reality",
    "Cloud Services",
    "Inkscape",
    "Chrome Extension API",
    "AWS",
    "Puppeteer",

  ]

  const finalWordsArray: string[] = [];

  for ( const word of words ){
    const mathRandom = Math.random( )
    const firstDigit = String(mathRandom)[4];
    const wordReapeat = Math.max( Math.min( parseInt ( 
      parseInt(firstDigit) > 7 ? firstDigit : firstDigit + String(mathRandom)[5]
    ), Math.round ( Math.random( ) * 10 ) ), 7 ); 

    finalWordsArray.push ( ...new Array( wordReapeat ).fill( word ) );
  }
  
  return (
    <aside className="
      fixed -z-10 flex flex-col
      h-[100vh] w-[100vw]
      left-0 bottom-0">

        <div className="w-[80vw] h-[40vh] my-[5vh] self-center animationAppear">

          { finalWordsArray.map( 
            ( word, key )=>{
              const randomNumber = Math.random();
              const randomNumber2 = Math.random();
              return(
                <div
                  style={{
                    transform: `rotate(${ 100 *  Math.sin( randomNumber * randomNumber2 ) }deg) translateY( ${randomNumber * 300  }px) translateX(${ 2* Math.sin( randomNumber ) * 1000 }px)`,
                  }}
                  key={`${word}_${key}`} 
                  className="absolute opacity-10 left-[-140vw] md:left-0 md:top-[-10vh]">
                    { word }
                </div>
              )
            }
          )}
        </div>

      
    </aside>
  )
}