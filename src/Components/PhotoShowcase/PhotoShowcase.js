import "./PhotoShowcase.css";

//Component to make a title for the main component
function Title({text}){
    return (
        <h3 className="text-3xl underline font-black text-purple-abyss m-2">
            {text}
        </h3>
    )
}

//Component to add a photo to main component
function Photo({url}){
    return(
    <img className="showcase-photo w-fit md:w-3/5 border-8 border-purple-abyss m-2 rounded" src={url}/>

    )
}

//Main component. Shows a set number of images to user
export default function PhotoShowcase({}){
   
return(
        <>
            <div className="m-4 bg-green-400 h-fit flex flex-col justify-between items-center p-4 lg: items-start">
               
                <Title className="" text="Check out these phunky shots!"/>
                
                <div className="w-fit h-fit flex flex-col items-center justify-between h-fit md:flex-row">
                    <Photo id="image-1" url="https://u.cubeupload.com/bostonessary/1.jpg"/>

                    <Photo url={"https://u.cubeupload.com/bostonessary/2.jpg"}/>
                    <Photo url={"https://u.cubeupload.com/bostonessary/3.jpg"}/>
                </div>
            </div>
        </>
    )
}