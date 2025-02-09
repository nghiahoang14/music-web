
import { Title } from "@/app/components/title/Title";
import { Metadata } from "next";
import { WishList } from "./WishList";

export const metadata: Metadata = {
    title: "bài hát yêu thích",
    description: "Project nghe nhạc trực tuyến",
  };

  export default function WishListPage() {
 
    return (
   <>
     <div className="mt-[30px]">
            <Title title="Bài Hát Yêu Thích"/>
            <WishList/>
           </div>
   </>
    );
  }
  