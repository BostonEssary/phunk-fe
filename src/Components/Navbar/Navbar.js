import { Fragment } from "react";
import { useState } from "react";


//This entire component functions the same as Accordian, but the difference is that the Nav Items are showed in the navbar row, instead of being hidden


function NavItem({title, url}){
    return (
      <a href={url}>
      {title}
      </a>
      );
  }
  
  function Logo({logo, size}){
    return(
      <img 
      src={logo}
      width={size}
      height={size}
      />
    )
  }

  
export default function Navbar({}) {
    return (
      <div className="">
        <nav className="flex justify-between items-center bg-white w-screen "> 
          <div className="flex flex-row items-center">
              <div>
                  <Logo logo={"https://u.cubeupload.com/bostonessary/phunkplain.png"} size={50}/>
              </div>
              
              <div>
              <p className="m-2">the Phunk</p>
              </div>
          </div>
          <div className="flex justify-between w-1/2 m-6">
              <NavItem title={"Home"} url={""}/>
              <NavItem title={"Blog"} url={""}/>
              <NavItem title={"Reviews"} url={""}/>
              <NavItem title={"Podcasts"} url={""}/>
              <NavItem title={"Login"} url={""}/>
          </div>
      </nav>
     </div>
    );
}
  