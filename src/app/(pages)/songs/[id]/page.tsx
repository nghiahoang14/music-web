import { CardInfo } from "@/app/components/Card/CardInfo";
import { SongItem2 } from "@/app/components/Songs/SongItem2";
// import { SongItem2 } from "@/app/components/Songs/SongItem2";
import { Title } from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { get, onValue, ref } from "firebase/database";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chi tiết bài hát",
    description: "Project nghe nhạc trực tuyến",
  };

  export default async function SongDetailPage(props:any) {
    const {id}= await props.params;
    let datafinal: any = null;
    const songsSnapshot= await get(ref(dbFirebase,`/songs/${id}`));
      datafinal=songsSnapshot.val();
      console.log(datafinal)
    const singerSnapshot = await get(ref(dbFirebase,`/singers/${datafinal.singerId[0]}`));
        const dataSinger=singerSnapshot.val();
          datafinal["singer"]=dataSinger.title;
        
            // section 3
            const dataSection3: any[] =[];
            const songsRef =await  get(ref(dbFirebase, 'songs'));
            songsRef.forEach((item)=>{
              const key=item.key;
              const data=item.val();
              if(data.categoryId===datafinal.categoryId && key!==id){
                
                    dataSection3.push(
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
          for (const item of dataSection3) {
            const itemSinger = await get(ref(dbFirebase,'/singers/' + item.singerId[0]));
            const dataSinger=itemSinger.val();
            item.singer=dataSinger.title;
           }  
    
    return (
   <>   {/* cardInfo */}
     <CardInfo 
     image={datafinal.image}
     title={datafinal.title}
     description={datafinal.singer}
     />
     {/* Lời bài hát */}
     <div className="mt-[30px]">
      <Title title="Lời Bài Hát"/>
      <div className=" bg-[#212121] rounded-[15px] text-white p-[20px] whitespace-pre-line">
   {datafinal.lyric}
      </div>
     </div>
     {/* section 3 */}
        <div className="mt-[30px]">
         <Title title="Bài Hát Cùng Danh Mục"/>
         <div className="grid grid-cols-1 gap-[10px]">
           {dataSection3.map((item,index)=>(
             <SongItem2 key={index} item={item}/>
           ))}
       
      
     
         </div>
        </div> 
     </>
    );
  }
  