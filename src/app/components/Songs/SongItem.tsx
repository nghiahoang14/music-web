"use client"
import Link from "next/link";

import { ButtonPlay } from "../Button/ButtonPlay";
import { ButtonHeart } from "../Button/ButtonHeart";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/firebaseConfig";


export const SongItem=(props:{item:any})=>{
    const {item}=props;
    // const [isActive,setIsActive]=useState(false);
    //   useEffect(()=>{
    //           onAuthStateChanged(authFirebase,(user)=>{
    //             if(user){
    //               const userId=user.uid;
    //               console.log(userId)
    //               const wishlist=item.wishlist;
    //               console.log(wishlist)
    //               if(wishlist){
    //               if(wishlist[userId]){
    //                 setIsActive(true)
    //               }
    //             }
    //             }
    //           })
    //         },[])
    return(
        <> 
        <div className="flex px-[10px] py-[10px] bg-[#212121] rounded-[15px] items-center " song-id={item.id}>
          <div className="w-[76px] truncate aspect-square rounded-[10px]">
            <img src={item.image} alt={item.title} className="w-full h-full aobject-cover"/>
          </div>
          <div className="ml-[10px]">
           <div className="mb-[2px]"><Link href={item.link} className="font-[600] text-[16px] text-white">{item.title}</Link></div>
           <div className="font-[400] text-[12px] text-[#FFFFFF80] ">{item.singer}</div>
           <div className="font-[400] text-[12px] text-white mt-[8px]">{item.listen.toLocaleString("vi-VN")} lượt nghe</div>
          </div>
          <div className="flex-1 ">
            <div className="flex items-center gap-x-[10px] justify-end">
             <ButtonPlay item={item} className="text-white flex items-center justify-center rounded-[100%] w-[34px] h-[34px] border border-[#fff] inner-button-play "/>
              <ButtonHeart item={item} className={" flex items-center justify-center text-white rounded-[100%] w-[34px] h-[34px] border "}/>
            </div>
          </div>
        </div>
      </>
    )
}