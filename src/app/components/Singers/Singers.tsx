"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CardItem } from "../Card/CardItem";

export const Singers=()=>{
    // section 3
    const [dataFinalSection3,setDataFinalSection3]=useState<any>(null);
    useEffect(()=>{
     const fetchData= async()=>{
      const dataSection3: any[] =[];
    const items =await get(ref(dbFirebase, 'singers'));
    items.forEach((item:any)=>{
      const key=item.key;
      const data=item.val();
            dataSection3.push(
              {
                id:key,
                image:data.image,
                title:data.title,
                description:data.description,
                link:`/Singers/${key}`,
             
                
              },
           )
        }
      
    )
    setDataFinalSection3(dataSection3);
     }
     fetchData();
    },[])
    
    return(
        <>
         {dataFinalSection3 && (
            <>
            {dataFinalSection3.map((item:any,index:number)=>(
           <CardItem key={index} item={item}/>
            ))}
          </>
          )}
        </>
    )
}