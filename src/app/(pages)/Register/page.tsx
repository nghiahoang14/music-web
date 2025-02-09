import { Title } from "@/app/components/title/Title";
import { Metadata } from "next";
import { FormRegister } from "./FormRegister";

export const metadata: Metadata = {
    title: "Trang đăng kí",
    description: "Project nghe nhạc trực tuyến",
  };

  export default function RegisterPage() {
    return (
   <>
     <div className="mt-[60px] w-[500px] mx-auto">
       <Title title="Đăng Ký Tài Khoản" className="text-center"/>
       <FormRegister/>
      </div>
   </>
    );
  }
  