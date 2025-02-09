import Link from "next/link"

export const CardItem = (props:{item: any})=>{
    const {item}= props;
    return(
        <>
        <div className="mt-[20px]">
            <Link href={item.link}>
            <div className="w-full rounded-[15px] truncate aspect-square mb-[10px]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
            </div>
            <div className="font-[700] text-[14px] text-white line-clamp-1 mb-[10px]">
           {item.title}
            </div>
            <div className="font-[400] text-[12px] text-[#FFFFFF80] line-clamp-1">
            {item.description}
            </div>

            </Link>
        </div>
        </>
    )
}