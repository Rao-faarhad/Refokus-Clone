import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
 

function Product({val, mover, count, hover}) {
    // var Product =[ue
    //     {}
    
    return(
        <div className="w-full py-20 h-[23rem] text-white" >
            <motion.div  onMouseEnter={()=> {mover(count)}}  whileHover={{ padding:"25px"}} className="max-w-screen-xl mx-auto bg-zinc-800 text-white h-[30vh] rounded-md flex items-center  justify-between ">
                
                <h1 className="text-6xl ">{val.title}</h1>
                
                <div className="dets w-1/3 capitilize font-medium">
                    
                    <p className="mr-[20%]"> {val.description} </p>
                    <div className="flex items-center justify-between">
                        {/* //for all buttons */}
                        {val.live && <Button/>}
                        {val.case && <Button title="case study" />}  
                        
                    </div> 
                    
                </div>
            </motion.div>
        
        </div>
    )
 }
 export default Product;