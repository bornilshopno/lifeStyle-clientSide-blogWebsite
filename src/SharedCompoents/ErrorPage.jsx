import { Link } from "react-router-dom";
import photo from "../assets/errorpage.png"
import Typewriter from 'typewriter-effect';

const ErrorPage = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex items-center flex-col justify-center space-y-10 pb-10">
         <div className="bg-[#6A609F] p-5 rounded-2xl mt-10">
         <img src={photo} alt="" className="rounded-xl" />
         </div>
            <h1 className="text-center max-w-sm text-[#6A609F] font-bold text-xl">
            <Typewriter
                    options={{
                        strings: ["Sorry, we couldnot find the page you are looking for! Check the URL again or click below to redirect to Homepage."],
                        autoStart: true,
                        loop: 1,
                        typeSpeed: 50,
                        cursor: "",
                    }}
                /> 
             
                <span className="text-xl"> </span></h1>

            <Link to={"/"}><button className="btn w-52 mx-auto bg-[#6A609F] border-none text-white">LifeStyle Circuit Homepage</button></Link>
        </div>
    );
};



export default ErrorPage;