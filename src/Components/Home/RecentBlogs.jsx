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
        <div className="min-h-96 py-16 md:py-16 bg-opacity-40 backdrop-blur-md" >

{/* style={{backgroundImage: "url('/bg.jpg')",backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
           <h1 className="text-center font-bold text-xl py-3  w-96 mx-auto border-2 my-4 rounded-md">
           LATEST BLOGS
           
           </h1>

           <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-11/12 lg:w-10/12 lg:grid-cols-4 mx-auto">
            {latestBlogs?.map(blog=> <CardforAllBlogs key={blog._id} blog={blog}></CardforAllBlogs>)}
           </div>
           <Faqs></Faqs>
        </div>
    );
};

export default RecentBlogs;