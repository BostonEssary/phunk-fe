
import "./Header.css";

// haha, it boops
export function Button({text}){
  return(
    <button>{text}</button>
  )
}

//Makes header with given title 
export default function Header({title}){
        
       return (
        <div className="flex bg-bud bg-cover bg-center h-96 justify-center items-center md:justify-start xl:h-128">
           
          <div className="bg-transparent flex flex-col items-center md:items-start md:m-20 w-content xl:m-40">

              <h1 id="header-title" className=" text-green-400 font-bold m-2 text-3xl 2xl:text-5xl">
                {title}
              </h1>
             
              <div id="btn-container" className="flex ">
                <div className="bg-purple-600  p-2 text-white m-2 transition ease-in-out duration-300 hover:bg-green-400 hover:text-purple-abyss">
                  <Button text='Login'/>
                </div>
                <div className="bg-purple-600 p-2 text-white m-2 transition ease-in-out duration-300 hover:bg-green-400 hover:text-purple-abyss">
                  <Button text='Signup'/>
                </div>

                
                
                
              </div>
          </div>
        </div>
       )
}