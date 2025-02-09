/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FaPlay ,FaBackwardStep, FaForwardStep, FaPause } from "react-icons/fa6"

export const PlayAction=()=>{
    const handlePlay=()=>{
        const elementPlayAudio: any=document.querySelector(".play-audio");
        const elementButtonPlay = elementPlayAudio.querySelector(".inner-button-play");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        if(elementButtonPlay.classList.contains("play")){
            elementButtonPlay.classList.remove("play");
            elementAudio.pause();
        } else{
            elementButtonPlay.classList.add("play");
            elementAudio.play();
        }
    }
    const handleNext=()=>{
        const currentSong=document.querySelector("[song-id].active");
        if(currentSong){
            const nextSong = currentSong.nextElementSibling;
            if(nextSong){
                const buttonPlay: any = nextSong.querySelector(".inner-button-play");
                buttonPlay.click();
            }
        }
    }
    const handlePrevious=()=>{
        const currentSong=document.querySelector("[song-id].active");
        if(currentSong){
            const previousSong = currentSong.previousElementSibling;
            if(previousSong){
                const buttonPlay: any = previousSong.querySelector(".inner-button-play");
                buttonPlay.click();
            }
        }
    }
    return(
        <>
         <div className="flex items-center justify-center gap-x-[42px]">
                    <button className="text-white text-[16px]">
                        <FaBackwardStep onClick={handlePrevious}/>
                    </button>
                    <button className="text-white rounded-[100%] text-[16px] w-[32px] h-[32px] inline-flex items-center justify-center bg-[#00ADEF] inner-button-play" onClick={handlePlay}>
                    <FaPlay className="inner-icon-play"/>
                    <FaPause className="inner-icon-pause"/>
                    </button>
                    <button className="text-white text-[16px]">
                    <FaForwardStep onClick={handleNext}/>
                    </button>
                 </div>
        </>
    )
}