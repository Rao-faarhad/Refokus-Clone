import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


            
// we make hover value by default false 
function Card({width, start, para, hover="false"}){

    return(
        <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding:"25px"}} className={`text-black  bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between` }>
           <div className="w-full ">
                <div className="w-full flex justify-between items-center text-white">
                     <h3>one heading </h3>
                     <FaLongArrowAltRight />
                    
                     
                </div>
                <h1 className="text-3xl text-medium mt-10 mt-60 text-white">whatEver who are you</h1>
            </div>
            <div className="down w-full ">
                {
                    start  && (
                        <>
                           <h1 className="text-6xl font-semibold tracking-tighter leading-none text-white"> start a Project</h1>
                            <button className="rounded-full mt-5 px-4 border-2 border-zinc-200 text-white">Contact us</button>
            
                        </>
                    )
                }
                {para && (
                    <p className="text-sm text-zinc-500 font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                )}
                
            </div>
        </motion.div>
    )
}
export default Card;