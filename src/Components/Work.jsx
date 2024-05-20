import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { data } from 'autoprefixer';
// first i npm install framer-motion// then import motion from framer-motion ..//

function Work ( ) {

    const [images, setImages] = useState( [
      

        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top:"45%", left: "50%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "55%", left: "40%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "50%", left: "44%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "48%", left: "44%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "51%", left: "49%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "60%", left: "48%", isActive: false}
    ]);
         // this scrolly tells us how much lines we scrolled

        // to use framer-motion use hook called use scroll then copy its code from site
        
        // now we make a function to show or hide pictures
        const { scrollYProgress } = useScroll();
        scrollYProgress.on("change", (data) => {
            function imagesShow(arr){
                setImages(prev => (
                    prev.map((item, index) => (
                        arr.indexOf(index) === -1 ? (
                            {...item, isActive: false}
                        )
                        :{...item, isActive: true}
                    ))
                ))
            }
            switch(Math.floor(data * 100)) {
                case 0:
                    imagesShow([]);
                    break;
                case 1:
                    imagesShow([0]);
                    break;
                case 2:
                    imagesShow([0,1]);
                    break;
                case 3:
                    imagesShow([0,1,2]);
                    break;
                case 4:
                    imagesShow([0,1,2,3]);
                    break;
                case 5:
                    imagesShow([0,1,2,3,4,5]);
                    break;
                
            } 
        });    

    return(
        <>
            <div className='w-full '>
                <div className=' relative max-w-screen bg-mx-auto text-center font-medium select-none text-white bg-black tracking-tight mt-5 '>
                    <h1 className='text-[30vw] leading-none px-5 py-5 '>WORK</h1>
                    {/* now we rander image through props */}
                    <div className='w-full h-full absolute top-0'>
                        {images.map((elem, index) => 
                            elem.isActive && (
                                <img 
                                    key={index} 
                                    className='absolute w-60 rounded-lg' 
                                     style={{ 
                                         top: elem.top, 
                                         left: elem.left, 
                                         transform: 'translate(-50%, -50%)' 
                                     }} 
                                    src={elem.url} 
                                    alt="" 
                                 />
                            )
                        )}
                   </div>

                </div>
                
            </div>
        </>    
    )
        
}

export default Work;  