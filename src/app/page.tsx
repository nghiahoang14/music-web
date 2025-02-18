/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Title } from "./components/title/Title";
import { SongItem } from "./components/Songs/SongItem";
import { CardItem } from "./components/Card/CardItem";
import { get,  ref } from "firebase/database";
import { dbFirebase } from "./firebaseConfig";
import { useEffect, useState } from "react";



export default function Home() {
  // section1
const [dataFinalSection1,setDataFinalSection1]=useState<any>(null);
  useEffect(()=>{
    const dataSection1: any[] =[];
    const fetchData= async ()=>{
         const items = await get(ref(dbFirebase,'songs'));       
          items.forEach((item:any)=>{
            const key=item.key;
            const data = item.val();
            console.log(key);
            console.log(data);
          if(dataSection1.length<3){
                dataSection1.push(
                  {
                    id:key,
                    image:data.image,
                    title:data.title,
                    singer:"",
                    listen:data.listen,
                    link:`/songs/${key}`,
                    audio:data.audio,
                    singerId:data.singerId,
                    wishlist:data.wishlist
                  },
                )
          
          
      }})
      for (const item of dataSection1) {
        let singerNames="";
        for (const singerId of item.singerId) {
          const itemSinger = await get(ref(dbFirebase,'/singers/'+singerId));
          if(itemSinger.exists()){
            const dataSinger=itemSinger.val();
            singerNames+=(singerNames?" , ":"")+dataSinger.title;

          }
        }
        item.singer=singerNames;
       }
       setDataFinalSection1(dataSection1);
      }
      fetchData();  
    
 
  },[])

// end section 1
// section 2
const [dataFinalSection2,setDataFinalSection2]=useState<any>(null);
useEffect(()=>{
  const fetchData=async ()=>{
    const dataSection2: any[] =[];
    const items = await get(ref(dbFirebase, 'categories'));
   
    items.forEach((item:any)=>{
      const key=item.key;
      const data=item.val();
      if(dataSection2.length<5){
            dataSection2.push(
              {
                id:key,
                image:data.image,
                title:data.title,
                description:data.description,
                link:`/categories/${key}`
                
              },
           )
        }
      
    })
    setDataFinalSection2(dataSection2);
  }
  fetchData();
},[])

// end section 2
// section 3
const [dataFinalSection3,setDataFinalSection3]=useState<any>(null);
useEffect(()=>{
 const fetchData= async()=>{
  const dataSection3: any[] =[];
const items =await get(ref(dbFirebase, 'singers'));
items.forEach((item:any)=>{
  const key=item.key;
  const data=item.val();
  if(dataSection3.length<5){
   
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
  
})
setDataFinalSection3(dataSection3);
 }
 fetchData();
},[])


  return (
 <>
 {/* section 1 */}
 <div className="flex items-start">
 <div className="w-[534px] ">
    <div style={{backgroundImage: "url('/demo/bg-1.png')"}} className="w-full flex items-center bg-cover rounded-[15px] h-[361px]">
    
      <div className="ml-[30px] flex-1 ">
        <div className="font-[700] text-[32px] text-white">Nhạc EDM</div>
        <div className="mt-[6px] font-[500] text-[14px] text-white">Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ</div>
      </div>
      <div className="w-[215px] ml-[34px] mr-[22px] mt-[40px] ">
      <img src="/demo/image-2.png" alt="" className=" w-full h-auto" />
      </div>
    
    </div>
 </div>
 <div className="flex-1 ml-[21px]">
  <Title title="Nghe nhiều"/>
 <div className="grid grid-cols-1 gap-[12px]">
  {dataFinalSection1 && (
     <>
     {dataFinalSection1.map((item:any,index:number)=>(
       <SongItem key={index} item={item}/>
     ))}
  </>
  )}

   
 </div>

 </div>
 </div>
 {/* Section 2 */}
 <div className="mt-[30px] ">
 <Title title="Danh Mục Nổi Bật"/>
 </div>
 <div className="grid grid-cols-5 gap-x-[20px]">
  {dataFinalSection2 && (
    <>
    {dataFinalSection2.map((item:any,index:number)=>(
   <CardItem key={index} item={item}/>
    ))}
</>
  )}

 
 </div>
 {/* Section 3 */}
 <div className="mt-[30px] mb-[20px]">
 <Title title="Ca Sĩ Nổi Bật"/>
 </div>
 <div className="grid grid-cols-5 gap-x-[20px]">
  {dataFinalSection3 && (
    <>
    {dataFinalSection3.map((item:any,index:number)=>(
   <CardItem key={index} item={item}/>
    ))}
  </>
  )}
  
 
 </div>
 </>
  );
}
