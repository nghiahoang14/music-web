/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { SongItem2 } from "@/app/components/Songs/SongItem2";
import { dbFirebase } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Section1 =()=>{
      const searchParams = useSearchParams();
      const [datafinal,setDatafinal]=useState<any>(null);
         const defaultKeyword = searchParams.get("keyword")||"";
         console.log(searchParams.get("keyword"))
         useEffect(()=>{
            const dataSection1: any[] =[];
         
        
          const fetchData = async ()=>{
            const items = await get(ref(dbFirebase,'songs'));
            
           items.forEach((item:any)=>{
            const key=item.key;
            const data = item.val();
            console.log(key);
            console.log(data);
            if(data.title.includes(defaultKeyword)){
            dataSection1.push(
              {
                id:key,
                image:data.image,
                title:data.title,
                singer:"",
                link:`/song/${key}`,
                time:"4.32",
                singerId:data.singerId,
                audio:data.audio
              }
            )
          }
           })
           for (const item of dataSection1) {
            const itemSinger = await get(ref(dbFirebase,'/singers/' + item.singerId[0]));
            const dataSinger=itemSinger.val();
            item.singer=dataSinger.title;
           }
           setDatafinal(dataSection1);
          }
          fetchData();
         },[defaultKeyword])
      //  console.log(datafinal)
    return(
        <>
       {datafinal &&(
        <>
    {datafinal.map((item: any,index: number)=>(
    <SongItem2 key={index} item={item}/>
     ))} 
     </>
       )}
       
        </>
    )
}