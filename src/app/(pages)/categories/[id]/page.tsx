/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInfo } from "@/app/components/Card/CardInfo";
import { SongItem2 } from "@/app/components/Songs/SongItem2";
import { Title } from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { get,  ref } from "firebase/database";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Danh sách bài hát theo danh mục",
    description: "Project nghe nhạc trực tuyến",
  };

  export default async function CategoryDetailPage(props: any) {
   const {id}= await props.params;
   let datafinal: any=null;
   const categorySnapshot = await get(ref(dbFirebase, `/categories/${id}`));
  datafinal=categorySnapshot.val();
      
        const dataSection2: any[] =[];
        const songsRef = await get(ref(dbFirebase, 'songs'));
     
        songsRef.forEach((item)=>{
          const key=item.key;
          const data=item.val();
          if(data.categoryId===id){   
           
                dataSection2.push(
                  {
                    id:key,
                    image:data.image,
                    title:data.title,
                    singer:"",
                    link:`/songs/${key}`,
                    time:"4.32",
                    singerId:data.singerId,
                    audio:data.audio,
                    wishlist:data.wishlist

                  },
                )
            }})
            for (const item of dataSection2) {
              const itemSinger = await get(ref(dbFirebase,'/singers/' + item.singerId[0]));
              const dataSinger=itemSinger.val();
              item.singer=dataSinger.title;
             }  
    
     
    return (
   <>
   {/* cardInfo */}
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
  