import { Link } from "react-router-dom";
import Stats from "./Stats";


const Banner = () => {
    return (
        <div
  className="hero min-h-screen relative"
  style={{
    backgroundImage: "url('/sky.webp')",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">Publish Your Passion in Your Way!</h1>
      <p className="mb-5">
      Whether sharing your expertise or what is in your mind through blogs, you will be connected with all our registered bloggers alongside. Get yourself registered with us and keep blogging!
      </p>
     <Link to={"/addblog"} >
     <button className="btn px-10">Create A Blog</button>
     </Link>
    </div>
  </div>
<div className="stats absolute -bottom-12">  <Stats></Stats></div>
</div>
    );
};

export default Banner;