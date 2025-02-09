/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export const Search =()=>{
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (event: any)=>{
        event.preventDefault();
        const keyword =event.target.keyword.value;
        router.push(`/Search?keyword=${keyword}`)
    }
    const defaultKeyword = searchParams.get("keyword")||"";
    console.log(searchParams.get("keyword"))
    return(
        <>
        <form className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center gap-x-[20px] " onSubmit={handleSearch}>
        <button type="submit" className="text-white text-[22px]">
           <FaSearch />
           </button>
           <input type="text" name="keyword" placeholder="Tìm kiếm..." className="font-[600] text-[16px]  outline-none bg-transparent flex-1 text-white" defaultValue={defaultKeyword}></input>
         
        </form>
        </>
    )
}