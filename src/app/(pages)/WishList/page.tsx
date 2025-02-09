import { SongItem2 } from "@/app/components/Songs/SongItem2";
import { Title } from "@/app/components/title/Title";
import { Metadata } from "next";
import { WishList } from "./WishList";

export const metadata: Metadata = {
    title: "bài hát yêu thích",
    description: "Project nghe nhạc trực tuyến",
  };

  export default function WishListPage() {
    // const data = [
    //   {
    //     image:"/demo/image-3.png",
    //     title:"Cô phòng",
    //     singer:"Hồ Quang Hiếu, Huỳnh Văn",
    //     time:'4.32'
    //   },
    //   {
    //     image:"/demo/image-3.png",
    //     title:"Cô phòng",
    //     singer:"Hồ Quang Hiếu, Huỳnh Văn",
    //     time:'4.32'
    //   },
    //   {
    //     image:"/demo/image-3.png",
    //     title:"Cô phòng",
    //     singer:"Hồ Quang Hiếu, Huỳnh Văn",
    //     time:'4.32'
    //   },
    //   {
    //     image:"/demo/image-3.png",
    //     title:"Cô phòng",
    //     singer:"Hồ Quang Hiếu, Huỳnh Văn",
    //     time:'4.32'
    //   },
    //   {
    //     image:"/demo/image-3.png",
    //     title:"Cô phòng",
    //     singer:"Hồ Quang Hiếu, Huỳnh Văn",
    //     time:'4.32'
    //   },
    //   {
    //     image:"/demo/image-3.png",
    //     title:"Cô phòng",
    //     singer:"Hồ Quang Hiếu, Huỳnh Văn",
    //     time:'4.32'
    //   },
      
    // ]
    return (
   <>
     <div className="mt-[30px]">
            <Title title="Bài Hát Yêu Thích"/>
            <WishList/>
           </div>
   </>
    );
  }
  