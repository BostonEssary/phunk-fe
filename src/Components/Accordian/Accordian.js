import { Fragment } from "react";
import { useState } from "react";
import { animated, useSpring, } from '@react-spring/web';
import { motion } from "framer-motion"
import "./Accordian.css";

// Returns a link where link text == title and link url == url
function NavItem({title, url}){
    return (
      <a href={url}>
      {title}
      </a>
      );
  }
  
  // Adds logo image to the NavBar
  function Logo({logo, size}){
    return(
      <img 
      src={logo}
      width={size}
      height={size}
      />
    )
  }

  // Puts all NavItems into one container
  function NavLinks(){
    return(
    <div id="accordian-items" className="flex flex-col h-96 items-center justify-between m-6">
        <NavItem title="Home" url=""/>
                    <NavItem title="Blogs" url=""/>
                    <NavItem title="Reviews" url=""/>
                    <NavItem title="Podcasts" url=""/>
                    <NavItem title="Login" url=""/>
    </div>
    )
  }

  // Main component. Displays Navbar with an Accordian button where, when pressed, 
  // creates a window for the user to select a page
  export default function NavbarAccordian(){
    const [isActive, setIsActive] = useState(false);
  
    
    
    
    return (
        <Fragment>
            <div className="accordian bg-white ">
              <div className=" w-screen flex flex-row justify-between content-center bg-transparent" >
                <div className="flex items-center">
                  <Logo logo={"https://u.cubeupload.com/bostonessary/phunkplain.png"} size={50}/>
                  <p className="m-2">the Phunk</p>
                </div>
                  <div className="accordian-symbol " onClick={() => setIsActive(!isActive)}>
                    <img src="https://svgshare.com/i/t84.svg" width={50} height={50}/>
                  
              </div>
            </div>
                    
                <div className=" w-100 ">
                  {isActive && <div id="accordian-links" className="absolute w-screen h-screen flex justify-center items-start backdrop-blur text-white">
                      <NavLinks  />
                  </div>}
                </div>
               
                    
                
                    
                
                
                
            </div>
        </Fragment>
    )
}