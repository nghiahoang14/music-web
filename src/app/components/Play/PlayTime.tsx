/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

export const PlayTime=()=>{
    const handleChange=(event: any)=>{
        const elementPlayAudio: any=document.querySelector(".play-audio");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
   const elementTotal = event.target;
   const value=parseFloat(elementTotal.value)
   console.log(value);
   elementAudio.currentTime=value;
    }
    return(
        <>
            <div className="mt-[11px] relative inner-play-time">
                <div className="h-[4px] w-[0px] bg-[#00ADEF] rounded-[50px] absolute top-[13px] left-0 inner-current"></div> 
                <input className="w-full bg-[#FFFFFF0A] h-[4px] rounded-[50px] cursor-pointer appearance-none range-sm inner-total" type="range" min={0} max={0} defaultValue={0} onChange={handleChange}>
                </input>
            </div>
        </>
    )
}