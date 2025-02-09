/* eslint-disable @next/next/no-img-element */
export const PlayInfo =()=>{
    return(
        <>
        <div className="w-[218px] flex items-center gap-x-[13px]">  
        <div className="w-[49px] rounded-[14px] truncate aspect-square">
           <img src="/"
            alt=""
            className=" w-full h-full object-cover inner-image "/>
       </div>
        <div className="flex-1 ">
           <h3 className="font-[700] text-[15px] mb-[2px] text-white inner-title line-clamp-1"></h3>
           <p className="font-[700] text-[12px] text-[#FFFFFF70] inner-singer line-clamp-1"></p>
        </div>

       </div>
       </>
    )
}