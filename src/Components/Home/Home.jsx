import Banner from "./Banner";
import RecentBlogs from "./RecentBlogs";
import Subscribe from "./Subscribe";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
        <RecentBlogs></RecentBlogs>
        <div className="bg-gradient-to-b from-[#051A1D] to-gray-700 py-10">
        <Subscribe></Subscribe>
        </div>
        </div>
    );
};

export default Home;