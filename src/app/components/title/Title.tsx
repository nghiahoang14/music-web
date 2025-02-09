export const Title =(props: {title:string ,className?:string})=>{
    const {title,className=" "}=props;
    return (
        <><div className={"font-[700] text-[24px] mb-[20px] text-[#EFEEE0] leading-[1.2] " + className}>{title}</div></>
    )
}