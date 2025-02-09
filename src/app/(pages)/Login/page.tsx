import { Title } from "@/app/components/title/Title";
import { Metadata } from "next";
import { FormLogin } from "./FormLogin";

export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Project nghe nhạc trực tuyến",
  };

  export default function LoginPage() {
    return (
   <>
   <div className="mt-[60px] w-[500px] mx-auto">
    <Title title="Đăng Nhập Tài Khoản" className="text-center"/>
   <FormLogin/>
   </div>
   </>
    );
  }
  