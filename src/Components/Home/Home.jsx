import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import RecentBlogs from "./RecentBlogs";
import Subscribe from "./Subscribe";



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LifeStyle Circuit || Home</title>
      </Helmet>
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>
      <div className=" py-10">
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;