import React from 'react';
import Stripe from "./Stripe";

function Stripes(){
    var data = [
        {url:  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",  number: 48},
        {url:  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",  number: 11},
        {url:  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",  number: 10},
        {url:  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",  number: 8},
        {url:  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",  number: 8},
        {url:  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",  number: 11} 
    
       
    ]
    return(
       <div className='flex items-center justify-between items-center  bg-black w-[100%] gap-20 border-t-2 border-b-2 border-zinc-700 mt-32'>
            {/* step to send data through prop to other file */}
        
                
            {data.map((elem, index) => (
                <Stripe 
                key={index} val={elem}  />
            ))}

        </div>
    )
}

export default Stripes;