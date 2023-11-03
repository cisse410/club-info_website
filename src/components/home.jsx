import React from "react";
import Footer from './footer';
import Header from './header.jsx'
import HeroSection from './heroSection.jsx' 
import Events from './event.jsx';
function Home() {
    return(
        <div className="overflow-x-hidden h-screen w-full all">
       
       <Header/>
       <HeroSection/> 
       <Footer/>
 
     </div>
    )
}
export default Home;