
import { Singers } from "@/app/components/Singers/Singers";
import { Title } from "@/app/components/title/Title";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trang ca sĩ",
    description: "Project nghe nhạc trực tuyến",
  };

  export default function SingerPage() {
  
    return (
   <><div className="mt-[30px] mb-[20px]">
    <Title title="Danh Sách Ca Sĩ"/>
    </div>
    <div className="grid grid-cols-5 gap-x-[20px]">
     <Singers/>
    
    </div></>
    );
  }
  