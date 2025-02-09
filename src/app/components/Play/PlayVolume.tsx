"use client"

import { FaVolumeHigh } from "react-icons/fa6"

export const PlayVolume=()=>{
    const handleChange=(event: any)=>{
        const elementPlayAudio: any=document.querySelector(".play-audio");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        const elementVolumneCurrent = elementPlayAudio?.querySelector(".inner-volume .inner-current");

  const elementTotal=event.target;
  const value= parseFloat(elementTotal.value);
  console.log(value)
  elementAudio.volume=value/100;
  elementVolumneCurrent.style.width=`${value}%`;

    }
    return(
        <>
          <div className="w-[184px] h-[16px] flex items-end inner-volume">
                    <button className="text-white text-[16px] ">
                    <FaVolumeHigh />
                    </button>
                    <div className="ml-[6px] relative">
                    <div className="h-[4px] w-[100%] bg-[#00ADEF] rounded-[50px] absolute top-[13px] left-0 inner-current "></div> 
                        <input
                         className="w-full bg-[#FFFFFF0A] h-[4px] rounded-[50px] cursor-pointer appearance-none range-sm inner-total" 
                         type="range" 
                         min={0} 
                         max={100} 
                         defaultValue={100}
                         onChange={handleChange}
                         />
                        
                        
                    </div>
                </div>
        </>
    )
}