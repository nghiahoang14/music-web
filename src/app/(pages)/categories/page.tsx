import { CardItem } from "@/app/components/Card/CardItem";
import { Categories } from "@/app/components/Categories/Categories";
import { Title } from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trang danh mục",
    description: "Project nghe nhạc trực tuyến",
  };

  export default function CategoryPage() {
    return (
   <>
   
  
     {/* Section 2 */}
    <div className="mt-[30px] mb-[20px]">
    <Title title="Danh Mục Bài hát"/>
    </div>
    <div className="grid grid-cols-5 gap-x-[20px]">
   <Categories/>
     
    
    </div>
   </>
    );
  }
  