

export default function Footer(){
    return(
        <footer className="bg-green-400 h-72 mt-4 flex justify-around items-center">
            <div className="flex flex-col items-center">
                <p className="underline">Made by Boston Essary</p>
                <a className="hover:text-purple-600" href="https://github.com/BostonEssary">Github</a>
                <a className="hover:text-purple-600" href="https://www.linkedin.com/in/boston-essary/">LinkedIn</a>
            </div>
            <div className="w-1/3">
                <p className="underline"> About Us</p>
                <p>We are a place where people can come and communicate about some of their favorite types of cannabis and even write reviews about them! Come and give it a try!</p>
            </div>
            <div className="w-1/3">
                <p className="underline">Our Mission</p>
                <p>The mission is simple...just enjoy ourselves and the company around us, and the cannabis!</p>
            </div>
        </footer>
    )
}