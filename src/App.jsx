import React from "react";
import Navbar  from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes  from "./Components/Stripes";
import Products  from "./Components/products";
import Marquess from "./Components/Marquess";
import Cards  from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';





function App  ()  {

  const locomotiveScroll = new LocomotiveScroll();
  
  return(
    <>
       <div className='w-full text-white bg-black font-[satoshi]'>
          <Navbar/>
          <Work/>
          <Stripes/>
          <Products/>
          <Marquess/>
          <Cards/>
          <Footer/>
     
        
        </div>
      
    </> 

  )
}

export default App;

