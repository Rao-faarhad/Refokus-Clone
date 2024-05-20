import React from "react";
import { IoIosReturnRight } from "react-icons/io";


function Button({title = "Get Started"}) {
   return(
        <>
           <div className="min-w-30 px-4 py-2 mt-3 bg-zinc-100 text-black rounded-full flex items-center justify-end ">
             <span className="text-sm font-semibold">{title}</span>
             <IoIosReturnRight/>
            </div>
        </>
   )
}
export default Button;