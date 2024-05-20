import { motion } from "framer-motion";
import React from "react";   
  

function Marque ({imagesurls, direction}) {

    return(
          
        <div className="flex w-full  overflow-hidden">
            {/* initial means where from we animate */}
            <motion.div 
                initial={{x: direction === 'left' ? "0" :"-100%"}} 
                animate={{x: direction === "left" ? "-100%" : "0"}} 
                transition={{ease: "linear", duration: 15, repeat: Infinity}}  
                className="w-62 flex flex-shrink-0 gap-40 py-10 pr-40" >
               {imagesurls.map((url, index) => (
                <img key={index}  src={url} />
                ))}
            </motion.div>
            <motion.div 
                initial={{x: direction === 'left' ? "0" :"-100%"}} 
                animate={{x: direction === "left" ? "-100%" : "0"}} 
                transition={{ease: "linear", duration: 15, repeat: Infinity}}  
                className="w-62 flex flex-shrink-0 gap-40 py-10 pr-40" >
               {imagesurls.map((url, index) => (
                <img key={index}  src={url} />
                ))}
            </motion.div>
            
        
        </div>
              
    );
};

export default Marque;
