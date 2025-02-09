"use client"

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export const FormRegister = ()=>{
    const router=useRouter();
    const handleRegister=(event: any)=>{
  event.preventDefault();
  const fullname=event.target.fullName.value;
  const email=event.target.email.value;
  const password=event.target.password.value;
console.log(fullname,email,password)
if(fullname && email && password){
   
        createUserWithEmailAndPassword(authFirebase, email, password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              if(user){
                set(ref(dbFirebase,'users/'+ user.uid),{
                    fullname:fullname
                }).then(()=>{
                    router.push("/")
                })
             
              }
              // ...
            })
            .catch((error) => {
              console.log(error)
            });
        
}
    }
    return(
        <>
         <form className="" onSubmit={handleRegister}>
        <div className="mb-[15px]">
         <label
         className="block mb-[5px] font-[600] text-[14px]"
         htmlFor="fullName"
         >
         <span className=" text-white">Họ tên</span>
         <span className=" text-red-600 ml-[5px]">*</span>
   
         </label>
         <input
         className="rounded-[6px] px-[16px]  h-[50px] w-full font-[600] text-[14px] outline-none"
         type="text"
         name="fullName"
         id="fullName"
         placeholder="Ví dụ: Le Van A"
         required={true}
         />
        </div>
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
         Đăng Ký
        </button>
       </form>
        </>
    )
}