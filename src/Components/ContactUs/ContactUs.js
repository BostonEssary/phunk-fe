


export default function ContactUs(){
    return (
       
            <form id="contact-us" className="bg-green-400 flex flex-col items-center justify-center m-4">
                <div className="m-4">
                    <div className="flex flex-col items-center m-4">
                        <img src="https://u.cubeupload.com/bostonessary/phunkplain.png" className=" w-1/2 md: max-w-1/3"/>
                        <p className="w-full">Got a suggestion? Complaint? Compliment? Funny Joke? Haiku? We want to hear it!</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="m-4">
                            <label for="name" className="m-2">Name: </label>
                            <input type="text" name="name"></input>
                        </div>
                        <div className="m-4">
                            <label for="email" className="m-2">Email:  </label>
                            <input type="email" name="email"></input>
                        </div>
                        <div className="m-4">
                            <label for="comment">Whats on your mind? </label>
                            <textarea name="comment" form="contact-us" className="w-full "></textarea>
                        </div>
                        <input type="submit" value="Send" className="bg-purple-500 p-1 w-1/5"></input>
                    </div>
                </div>
            </form>
        
    )
}