import {Metadata} from "next"
import Link from "next/link"
 
export const metadata: Metadata = {
    title:"404 not found",
    description:"Không tìm thấy trang này",
}
export default function NotFoundPage(){
    return(
        <>
        <h1 className="text-[32px] font-[700] text-white text-center mt-[50px]">404 not found</h1>
        <div className="text-center mt-[20px]">
            <Link href="/" className="bg-black text-white p-[10px]">Trở về trang chủ</Link>
        </div>
        </>
    )
}