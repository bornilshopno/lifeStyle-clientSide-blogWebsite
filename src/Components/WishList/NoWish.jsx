import { Link } from "react-router-dom";


const NoWish = () => {
    return (
        <div className="w-3/4 md:w-2/3 mx-auto bg-white p-2  rounded-2xl">
            <h1 className=" bg-[#335d67] text-[#268bd2] rounded-xl py-5 md:py-10 text-center text-3xl">Unforenately no Blogs in your wish list now! Visit <Link><span className="font-bold text-white underline">ALL BLOGS</span></Link> and add some in your Wishlist Bucket!</h1>
        </div>
    );
};

export default NoWish;