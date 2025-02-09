"use client"
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6"

export const ButtonHeart=(props:any)=>{
    const {item,className}=props;
    console.log(item);
    const [isActive,setIsActive]=useState(false);
    useEffect(()=>{
      onAuthStateChanged(authFirebase,(user)=>{
        if(user){
          const userId=user.uid;
          console.log(userId)
          const wishlist=item.wishlist;
          console.log(wishlist)
          if(wishlist){
          if(wishlist[userId]){
            setIsActive(true)
          }
        }
        }
      })
    },[])
    const handleAddWishList=()=>{
        const userId = authFirebase?.currentUser?.uid;
        if(userId && item.id){
            const songRef = ref(dbFirebase, `/songs/${item.id}`);
  runTransaction(songRef, (song) => {
    if (song) {
      if (song.wishlist && song.wishlist[userId]) {
        song.wishlist[userId]=null;
        setIsActive(false);
      }else{
        if(!song.wishlist){
          song.wishlist={}
        }
        song.wishlist[userId]=true;
        setIsActive(true);

      }
    }
    return song;
  });
        }
    }
    return(
        <>
        <button className={ className + (isActive ? "border-[#00adef] bg-[#00adef] " : "border-[#fff] text-white ")}>
            <FaRegHeart  onClick={handleAddWishList}/>    
        </button>
        </>
    )
}