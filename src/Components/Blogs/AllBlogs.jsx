import axios from "axios";
import { useEffect, useState } from "react";
import CardforAllBlogs from "./CardforAllBlogs";

const AllBlogs = () => {

 const [allBlogs,setAllBlogs]=useState([])

 useEffect(()=>{
    axios.get('http://localhost:5000/blogs')
    .then(res=>{
  setAllBlogs(res.data)
    })
 } , [])


    return (
        <div>
     <h1>All Blogs</h1>
     <div>
        {allBlogs?.map(blog=><CardforAllBlogs key={blog._id} blog={blog}></CardforAllBlogs>)}
     </div>
        </div>
    );
};

export default AllBlogs;