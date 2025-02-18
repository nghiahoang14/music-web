/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"

import { FaMusic } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHouse, FaRightFromBracket } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/firebaseConfig";
import { MenuItem } from "./MenuItem";

export const Sider =()=>{
    const [isLogin,setIsLogin]=useState<boolean>(false);
    useEffect(()=>{
     onAuthStateChanged(authFirebase,(user)=>{
        console.log(user);
        if(user){
            setIsLogin(true);
        } else{
            setIsLogin(false)
        }
     })
    },[])
    const menu = [
        {
            icon:<FaHouse />,
            title:"Trang Chủ",
            link:"/"
        },
        {
            icon:<FaMusic />,
            title:"Danh Mục Bài Hát",
            link:"/categories"
        },
        {
            icon:<FaPodcast />,
            title:"Ca Sĩ",
            link:"/Singers"
        },
        {
            icon:<FaHeart />,
            title:"Bài hát yêu thích",
            link:"/WishList",
            isLogin:true
        },
        {
            icon:<FaRightFromBracket/>,
            title:"Đăng xuất",
            link:"/logout",
            isLogin:true
        },
        {
            icon:<FaUser />,
            title:"Đăng Nhập",
            link:"/Login",
            isLogin:false
        },
        {
            icon:<FaUserPlus />,
            title:"Đăng Ký",
            link:"/Register",
            isLogin:false
        },

    ]
    
    // console.log(pathname);
    return(
        <>
       <div className="h-[100vh] bg-[#212121] fixed w-[280px]"> 
        <div className="bg-[#1C1C1C] py-[25px] pl-[20px]">
            <Link href="/">
            <img src="/demo/logo.png" alt="Logo" className="h-[42px]  w-auto"></img>
            </Link>
        </div>
        <nav className="py-[30px] px-[20px]">
            <ul className="">
                {menu.map((item,index)=>(
                 <MenuItem item={item} key={index} isLogin={isLogin}/>
                ))}
                
            </ul>
        </nav>

        </div>
        </> 
    )
}