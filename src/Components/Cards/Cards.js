import React, { Component } from 'react';
import "./Cards.css";

// creates a card with given title, img and info
function Card({title, img, info}){
    return( 
                <div className="card  m-4 bg-green-400 text-purple-abyss  
                 p-4  justify-around flex flex-col  lg: p-8">
                    
                    <div >
                        
                        <h4 className=" underline relative">{title}</h4>

                        <img className="card-img border-4 border-purple-abyss flex" src={img}></img>

                        <p className="">{info}</p>

                    </div>
                    <div id="card-dot" className="bg-purple-600 relative flex-none"></div>
                </div>
            
      
    )
}


// Main Function. Puts all given cards into one container
export default function Cards(){
    return (
        <div className="flex w-content justify-center justify-around flex-col items-center md:flex-row">
            <div >
                <h3 className='text-green-400 text-3xl m-4  underline font-black'>Latest Blog</h3>
                <Card title={"This is the latest blog title...."} img={"https://u.cubeupload.com/bostonessary/2.jpg"} info={"This is the latest blog post date and author"}></Card>
            </div>
            <div>
            <h3 className='text-green-400 text-3xl m-4 underline font-black'>Latest Review</h3>
                <Card title={"This is the latest blog title...."} img={"https://u.cubeupload.com/bostonessary/2.jpg"} info={"This is the latest blog post date and author"}></Card>
            </div>
            <div>
            <h3 className='text-green-400 text-3xl m-4 underline font-black'>Latest Podcast</h3>
                <Card title={"This is the latest blog title...."} img={"https://u.cubeupload.com/bostonessary/2.jpg"} info={"This is the latest blog post date and author"}></Card>
            </div>
        </div>
    )
}