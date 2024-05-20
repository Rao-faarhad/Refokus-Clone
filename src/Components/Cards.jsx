import React from "react";
import Card from  "./Card"

function Cards(){
    return(
        <div className="w-full">
           
            <div className="max-w-screen-xl mx-auto p-20 flex gap-3 ">
           {/* now make with prop for cards &&&&&& make logic for hide paragraph*/}
            <Card width={"basis-1/3"} start={false}    para={true} />
                                                             {/* //now we make hover effect throuhh prop */}
            <Card width={"basis-2/3"}start={true} para={false} hover={"true"}/>
            </div>
            
        </div>
    )
}
export default Cards;