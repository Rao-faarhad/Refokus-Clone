import React from "react";
import Button from "./Button";


function Navbar  () {
  
  return(
    <div className="max-w-screen  mx-auto flex items-center justify-between border-b-[2px] border-zinc-200 px-8 py-6 bg-black">
      
      <div className="nleft flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="links flex gap-10 ml-20 text-white">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
              <a key={index} className="font-regular text-sm flex items-center gap-1" href="#">
              {elem.length === 0 ? (
                <span  className="w-[2px] h-9 "></span>
              ) : (
                <>
                  {index === 1 && (
                    <span style={{ boxShadow: "0 0 0.75em #00FF19" }} className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  )}
                  {elem}
                </>
              )}
              </a>
            ))}
        </div>

      </div>
      <Button/>
        {/* //smART  Way of putting links through map in jsx */}            
            

      
    </div>
    
  )
}

export default Navbar;