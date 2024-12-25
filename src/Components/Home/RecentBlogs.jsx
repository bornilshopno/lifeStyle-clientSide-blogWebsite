import axios from "axios";
import { useEffect, useState } from "react";
import CardforAllBlogs from "../Blogs/CardforAllBlogs";
import Marquee from "react-fast-marquee";

const RecentBlogs = () => {
    const [latestBlogs,setLatestBlogs]=useState(null)
    console.log(latestBlogs)
    useEffect( ()=>{
        axios.get("http://localhost:5000/latest-blogs")
        .then(res=>{
            setLatestBlogs(res.data)
        })
    } , [])

    return (
        <div className="min-h-96 py-16" style={{
            backgroundImage: "url('/blogdetail.jpg')",
          }}>
           <h1 className="text-5xl text-center">Explore Latest Blogs</h1>

           <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-11/12 lg:w-10/12 mx-auto">
            {latestBlogs?.map(blog=> <CardforAllBlogs key={blog._id} blog={blog}></CardforAllBlogs>)}
           </div>
        </div>
    );
};

export default RecentBlogs;