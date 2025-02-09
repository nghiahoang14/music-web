"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";

import { useEffect, useState } from "react";

import { CardItem } from "../Card/CardItem";

export const Categories=()=>{
   // section 2
const [dataFinalSection2,setDataFinalSection2]=useState<any>(null);
useEffect(()=>{
  const fetchData=async ()=>{
    const dataSection2: any[] =[];
    const items = await get(ref(dbFirebase, 'categories'));
   
    items.forEach((item:any)=>{
      const key=item.key;
      const data=item.val();
      
            dataSection2.push(
              {
                id:key,
                image:data.image,
                title:data.title,
                description:data.description,
                link:`/categories/${key}`
                
              },
           )
        
      
    })
    setDataFinalSection2(dataSection2);
  }
  fetchData();
},[])

// end section 2
    return(
       <>
         {dataFinalSection2 && (
    <>
    {dataFinalSection2.map((item:any,index:number)=>(
   <CardItem key={index} item={item}/>
    ))}
</>
  )}
       </>
    )
}