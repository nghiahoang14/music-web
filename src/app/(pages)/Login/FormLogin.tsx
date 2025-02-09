/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useRouter } from "next/navigation";

export const FormLogin=()=>{
      const router=useRouter();
        const handleLogin=(event: any)=>{
      event.preventDefault();
    
      const email=event.target.email.value;
      const password=event.target.password.value;
    console.log(email,password)
    if( email && password){
       
            signInWithEmailAndPassword(authFirebase, email, password)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  if(user){
                 
                 router.push("/")
                  }
                  // ...
                })
              
            
    }
        }
    return(
        <>
         <form className="" onSubmit={handleLogin}>
     <div className="mb-[15px]">
      <label
      className="block mb-[5px] font-[600] text-[14px]"
      htmlFor="email"
      >
      <span className=" text-white">Email</span>
      <span className=" text-red-600 ml-[5px]">*</span>

      </label>
      <input
      className="rounded-[6px] px-[16px]  h-[50px] w-full font-[600] text-[14px] outline-none"
      type="email"
      name="email"
      id="email"
      placeholder="Ví dụ: levana@gmail.com"
      required={true}
      />
     </div>
     <div className="mb-[15px]">
      <label
      className="block mb-[5px] font-[600] text-[14px]"
      htmlFor="password"
      >
      <span className=" text-white">Mật khẩu</span>
      <span className=" text-red-600 ml-[5px]">*</span>

      </label>
      <input
      className="rounded-[6px] px-[16px]  h-[50px] w-full font-[600] text-[14px] outline-none"
      type="password"
      name="password"
      id="password"
      placeholder=""
      required={true}
      />
     </div>
     <button
     type="submit"
     className="h-[50px] w-full bg-[#00ADEF] rounded-[6px] font-[700] text-[16px] text-white "
     >
      Đăng nhập
     </button>
    </form>
        </>
    )
}