/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInfo } from "@/app/components/Card/CardInfo";
import { SongItem2 } from "@/app/components/Songs/SongItem2";
import { Title } from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trang chi tiết ca sĩ",
    description: "Project nghe nhạc trực tuyến",
  };

  export default async function SingerDetailPage(props:any) {
     const {id}= await props.params;
       let datafinal: any=null;
          const singerSnapshot = await get(ref(dbFirebase,`/singers/${id}`));
            datafinal=singerSnapshot.val();
          const dataSection2: any[] =[];
            const songsRef = await get(ref(dbFirebase, 'songs'));
            songsRef.forEach((item)=>{
              const key=item.key;
              const data=item.val();
              if(data.singerId.includes(id)){
                dataSection2.push(
                  {
                    id:key,
                    image:data.image,
                    title:data.title,
                    singer:datafinal.title,
                    link:`/songs/${key}`,
                    time:"4.32",
                    audio:data.audio,
                    wishlist:data.wishlist
                  },
                )
              
          }})
        
    return (
   <>   {/* cardInfo */}
     <CardInfo 
     image={datafinal.image}
     title={datafinal.title}
     description={datafinal.description}
     />
     
      
      <div className="mt-[30px]">
       <Title title="Danh Sách Bài Hát"/>
       <div className="grid grid-cols-1 gap-[10px]">
        {dataSection2.map((item,index)=>(
           <SongItem2 key={index} item={item}/>
         ))}
     
    
   
       </div>
      </div>
   </>
    );
  }
  