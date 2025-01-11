import { Link } from "react-router-dom";
import DevDetails from "./DevDetails";
import { Helmet } from "react-helmet-async";
import { IoGameControllerSharp } from "react-icons/io5";

const Deveoper = () => {
    // let navigate=useNavigate()

        
    return (
        <div className="bg-gradient-to-t from-[#273344] to-[#283848]">
           <Helmet>
                <title>Discount Pro || Developer</title>
            </Helmet>
        <div className="flex flex-col-reverse md:flex-row justify-evenly md:justify-between items-center gap-5 md:gap-10 w-11/12 lg:w-10/12 mx-auto text-white pb-5 md:pb-0 border-b-4 border-amber-400 md:border-none pt-3">
            <div className="">
                <h2 className="text-4xl font-semibold text-center text-[#a04d72] border-2 px-3 lg:px-6 border-[#a04d72] rounded-md pb-2 pt-1">Developer Portfolio</h2>
            </div>
            <div className=""><Link to={"/"} className="" ><Link to="/"><span className="text-center">Go Back To</span> <div className="flex gap-3 items-center"><span className="text-2xl font-bold">LifeStyle Cuicuit</span></div></Link></Link></div>
        </div>

        
        <div
  className="hero "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/hdkH7W3/shutterstock-535124956-scaled.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg border-2 border-amber-400 p-5 rounded-3xl border-">
      <h1 className="mb-5 text-3xl font-bold text-amber-400">Hello there!</h1>
      <hr/>
      <div className="flex items-center justify-center gap-5 flex-col md:flex-row pt-5">
        <img src="https://i.ibb.co.com/gjycxrZ/IMG-6639.jpg" alt="profile" className=" w-24 rounded-3xl border-x-indigo-700 border-y-amber-400 border-2" />
        <div>
        <p className="text-amber-400 font-bold">This is Ashraf Hossain Manna. I am a Junior Front End Developer, an enthusiast about programming. Currently working with react.js and javaScript. Always interested to learn something new. Thanks for visiting my profile. </p>
        <button className="btn bg-amber-400 text-lg text-gray-800 mt-5">Contact Me</button>
        </div>
      </div>
      
    </div>
  </div>
</div>
<DevDetails></DevDetails>
       </div>
    );
};

export default Deveoper;