import { Link } from "react-router-dom";
import Stats from "./Stats";
import { motion } from "motion/react"


const Banner = () => {
    return (
        <div
  className="hero min-w-screen min-h-96 relative "
  style={{
    backgroundImage: "url('/blogg.webp')",
  }}>
  <div className="hero-overlay bg-opacity-60 dark:bg-opacity-80 "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-2xl sm:text-5xl font-bold">
      Publish Your Passion in Your Way!
  
        </h1>
      <p className="mb-5">Whether sharing your expertise or what is in your mind through blogs, you will be connected with all our registered bloggers alongside. Get yourself registered with us and keep blogging!!
                 
      </p>
     <Link to={"/register"} >
     <button className="btn px-10">Get Registered</button>
     </Link>
    </div>
  </div>
 <motion.div animate={{x:[0,60,-60,0]}} transition={{duration:10, repeat:Infinity, delay:1}} className="stats absolute z-40 -bottom-12 overflow-x-hidden">
 <Stats></Stats>
 </motion.div>
 
{/* <div className="stats absolute -bottom-12">  <Stats></Stats></div> */}
</div>
    );
};





export default Banner;