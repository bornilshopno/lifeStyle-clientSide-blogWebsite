import axios from "axios";
import { useEffect, useState } from "react";
import CardforAllBlogs from "../Blogs/CardforAllBlogs";
import Faqs from "./Faqs";


const RecentBlogs = () => {
    const [latestBlogs,setLatestBlogs]=useState(null)

    useEffect( ()=>{
        axios.get("https://server-side-life-style.vercel.app/latest-blogs")
        .then(res=>{
            setLatestBlogs(res.data)
        })
    } , [])

    return (
        <div className="min-h-96 py-16 bg-opacity-40 backdrop-blur-md" style={{
            backgroundImage: "url('/bg.jpg')",backgroundRepeat: "no-repeat", backgroundSize: "cover"
          }}>
           <h1 className="text-5xl text-center text-gray-300 font-bold mt-6 mb-12 px-6 py-3 bg-[#4b4d4f] rounded-lg w-96 mx-auto">
           LATEST BLOGS
           
           </h1>

           <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-11/12 lg:w-10/12 mx-auto">
            {latestBlogs?.map(blog=> <CardforAllBlogs key={blog._id} blog={blog}></CardforAllBlogs>)}
           </div>
           <Faqs></Faqs>
        </div>
    );
};

export default RecentBlogs;