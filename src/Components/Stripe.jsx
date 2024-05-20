import { motion } from 'framer-motion';
import React from 'react';

function Stripe({val}){
    
    return(
        <>  
            <motion.div 
            
                initial={{x : "0"}} animate={{x:"-100%"}} 
            
                transition={{ease: "linear", duration: 10, repeat: Infinity}} 
                
                className='h-[5vh] w-[30.3%] py-10  px-8  border-zinc-700 flex justify-center items-center '>
                
                 <img className='w-[100%] h-[10vh] bg-black' src={val.url} alt="" />
                
                 <span className='font-semi- ml-[30%]'>{val.number}</span>
            
            </motion.div>
          
    

            
        </>  
    )
}

export default Stripe