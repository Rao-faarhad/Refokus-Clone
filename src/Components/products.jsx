import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

 

function Products() {
    var Products =[
        {title: "Cula", 
            description: "arqitel product  are the best products is the are we are we thankfull to arqitel there are many product which are in verey high rating",
            live: true,
            case: false,
            URL:"",
        },
        {title: "TTR", 
            description: "arqitel product  are the best products is the are we are we thankfull to arqitel there are many product which are in verey high rating",
            live: true,
            case: false,
            URL:"",
        },
        {title: "YIR 2022", 
            description: "arqitel product  are the best products is the are we are we thankfull to arqitel there are many product which are in verey high rating",
            live: true,
            case: true,
            URL:"",
        },
        {title: "Layout Land", 
            description: "arqitel product  are the best products is the are we are we thankfull to arqitel there are many product which are in verey high rating",
            live: false,
            case: true,
             URL:"",
        },
        {title: "YAHOO", 
            description: "arqitel product  are the best products is the are we are we thankfull to arqitel there are many product which are in verey high rating",
            live: true,
            case: false,
             URL:"",
        }
    ];
    
    //function to animate
    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val*23);

    }
    return(
        <>
           
            <div  className="mt-32 relative">
                                                                           {/* //now i send mover & count for index function into props */}
            {Products.map((val, index) =>  <Product key={index}  val= {val} mover={mover} count={index} hover={true}/> )}
            <div className="w-full h-full absolute pointer-events-none top-0">
                {/* //convert every div into framer motion to animated */}
                <motion.div 
                    initial={{y:pos, x:"-50%"}}
                    animate={{y:pos+ `rem`}} 
                    transition={{ease:[0.83, 0, 0.17, 1], duration: .6}}
                    className="window w-[32rem] h-[23rem] absolute left-[44%] overflow-hidden">
                        <img className="w-[30rem] h-[23rem]" src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                       
                    <motion.div animate={{y: -pos+ `rem`}} transition={{ease:[0.83, 0, 0.17, 1], duration: .4}}  className="w-full h-full ">
                        <img className="w-[30rem] h-[23rem] " src="https://plus.unsplash.com/premium_photo-1675793714917-dd0f7efc0165?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </motion.div>
                    <motion.div className="w-[30rem] h-[23rem]">
                        <img className="w-full" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </motion.div>
                    
                    <motion.div animate={{y: -pos+ `rem`}} transition={{ease:[0.83, 0, 0.17, 1], duration: .4}} className="w-full h-full">
                        <img className="w-[30rem] h-[23rem]" src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </motion.div>
                    <motion.div animate={{y: -pos+ `rem`}} transition={{ease:[0.83, 0, 0.17, 1], duration: .4}} className="w-full h-full">
                         
                    </motion.div>
                    <motion.div animate={{y: -pos+ `rem`}} transition={{ease:[0.83, 0, 0.17, 1], duration: .4}} className="w-full h-full">
                        <img className="w-[30rem] h-[23rem]" src="https://images.unsplash.com/photo-1563126072-6457fc59c1cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </motion.div>
                </motion.div>
            </div>
                
            </div>
        </>    
    )
}
 export default Products;