/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";
import { ButtonPlay } from "../Button/ButtonPlay";
import { ButtonHeart } from "../Button/ButtonHeart";


export const SongItem2 = (props:{item: any})=>{
    const {item}=props;
   
    return(
        <>
        <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
              {/* left */}
              <div className="w-[40%] flex items-center gap-[12px]">
               <ButtonPlay item={item} className="text-[24px] text-white"/>
                <div className="w-[42px] truncate rounded-[8px] aspect-square">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover"></img>
                </div>
                <div className="font-[700] text-[14px] text-white"><Link href={item.link}>{item.title}</Link> </div>
              </div>
              {/* center */}
              <div className="w-[30%] text-center">
                <div className="font-[400] text-[14px] text-white">
             {item.singer}
                </div>
              </div>
              {/* Right */}
              <div className="w-[30%] flex items-center gap-[18px]  justify-end ">
        <div className="font-[400] text-[14px] text-white">
          {item.time}
        </div>
       <ButtonHeart item={item} className={"text-[20px] text-[#00adef] bg-[transparent] "} />
              </div>
             </div>
            
        </>
    )
}