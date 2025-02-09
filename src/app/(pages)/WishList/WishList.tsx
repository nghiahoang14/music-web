"use client"


import { SongItem2 } from "@/app/components/Songs/SongItem2";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { get, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export const WishList=()=>{
    
    const [dataFinal,setDataFinal]=useState<any>(null);
    useEffect(()=>{
          onAuthStateChanged(authFirebase,(user)=>{
            if(user){
              const userId=user.uid;
                const dataSection1: any[] =[];
                       const fetchData = async ()=>{
                         const items = await get(ref(dbFirebase,'songs'));
                         
                        items.forEach((item:any)=>{
                         const key=item.key;
                         const data = item.val();
                         console.log(key);
                         console.log(data);
                         const wishlist=data.wishlist
                         if(wishlist && wishlist[userId]){
                         dataSection1.push(
                           {
                             id:key,
                             image:data.image,
                             title:data.title,
                             singer:"",
                             link:`/song/${key}`,
                             time:"4.32",
                             singerId:data.singerId,
                             audio:data.audio,
                             wishlist:data.wishlist
                           }
                         )
                       }
                        })
                        for (const item of dataSection1) {
                         const itemSinger = await get(ref(dbFirebase,'/singers/' + item.singerId[0]));
                         const dataSinger=itemSinger.val();
                         console.log(dataSinger)
                         item.singer=dataSinger.title;
                        }
                        setDataFinal(dataSection1);
                       }
                       fetchData();
                   
    }})
        },[])
    return(
        <>
        <div className="grid grid-cols-1 gap-[10px]">
        {dataFinal &&(
        <>
    {dataFinal.map((item: any,index: number)=>(
    <SongItem2 key={index} item={item}/>
     ))} 
     </>
       )}

            </div>
        </>
    )
}