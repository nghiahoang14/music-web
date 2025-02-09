import {  FaVolumeHigh } from "react-icons/fa6";
import { PlayInfo } from "./PlayInfo";
import { PlayAction } from "./PlayAction";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";
export const Play =()=>{
    return(
        <>
        <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full py-[20px] z-[999] hidden play-audio">
            <audio className="hidden inner-audio">
                <source src="/"/>
            </audio>
            <div className="container mx-auto flex items-center justify-between">
                <PlayInfo/>
                <div className="mx-[67px] flex-1">
                    <PlayAction/>
                    <PlayTime/>
                </div>
                <PlayVolume/>
            </div>
        </div>
        </>
    )
}