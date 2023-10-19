"use client"
import { ImageWrapForModal } from "@/app/lib/ImageComponentWithModal";
import { SelectionButtonWrapper } from "@/app/lib/SelectionButtonWrapper";
import Image from "next/image"
import {  useState } from "react"

export const ImageScroller = ( { images }: { images: string[] } ) => {


  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  const imageLength = images.length;


  return (
    <aside className="flex justify-between items-center h-[80%]">


      <div className="w-[10%] flex items-center">

        <SelectionButtonWrapper>
          { currentIndex > 0 && 
          <button 
            className="peer outline-none"
            onClick={()=>{
              setCurrentIndex( currentIndex - 1);
            }}>
              &lt;
          </button>
          }
        </SelectionButtonWrapper>
      </div>

        <li className="w-[80%] h-full list-none flex flex-col items-center justify-center">
          
          <div className="w-full h-[90%]">
            <ImageWrapForModal imageURL={ images[ currentIndex ] }>
              <Image
                className="object-contain w-full h-full"
                src={ images[currentIndex] }
                height={200}
                width={200}
                alt={`No.${currentIndex} image of this project's showcase`}/>
            </ImageWrapForModal>
          </div>

          <p className="h-[10%]">{ currentIndex + 1 } / { imageLength }</p>
        
        </li>
        <div className="w-[10%] flex items-center">
          <SelectionButtonWrapper>
            { currentIndex + 1 < imageLength && 
              <button 
                className="peer outline-none"
                onClick={()=>{
                  setCurrentIndex( currentIndex + 1);
                }}>
                  &gt;
              </button>
            }
          </SelectionButtonWrapper>
        </div>
    </aside>
  )

}
