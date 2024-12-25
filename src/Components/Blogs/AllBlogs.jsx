import axios from "axios";
import { useEffect, useState } from "react";
import CardforAllBlogs from "./CardforAllBlogs";
import useAuth from "../../SharedCompoents/useAuth";

const AllBlogs = () => {
const {allBlogs}=useAuth()
   const [filter, setFilter] = useState("")
   const [showBlogs, setShowBlogs] = useState(allBlogs);
   const [search, setSearch] = useState("");

  
   //sort er kaj ar search er kaj milaiya korte hobe
   useEffect(() => {
      const fetchAllBlogs = async()=>{
         const data= await axios.get(`http://localhost:5000/allblogs?filter=${filter}&search=${search}`)
         setShowBlogs(data.data);
         console.log(data.data)
         
      };
      fetchAllBlogs()
   }, [filter,search])

   return (
      <div>
         <h1>All Blogs</h1>
         <div className="flex justify-center gap-10 flex-col md:flex-row-reverse items center py-5 w-10/12 mx-auto">
            <div className="flex justify-between items center overflow-hidden border border-gray-400 rounded-xl focus-within:ring">
               <input onBlur={e=>setSearch(e.target.value)} type="text" name="searchbox" id="" placeholder="Enter Blog Title" className="focus:outline-none bg-white text-gray-600" />
               <button className="btn btn-primary" onClick={(e)=>setSearch(e.target.searchbox.value)}> Search</button></div>
            <div className="dropdown dropdown-bottom dropdown-end">
               <div tabIndex={0} role="button" >
                  {filter ?  <h1 className="btn bg-blue-700 text-white">Filtered by ${filter}</h1> :  <h1 className="btn bg-white text-gray-700">Filter by Category?</h1>}
                 
                 
               </div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li onClick={() => setFilter("Book")}><a>Book</a></li>
                  <li onClick={() => setFilter("Food")}><a>Food</a></li>
                  <li onClick={() => setFilter("LifeStyle")}><a>LifeStyle</a></li>
                  <li onClick={() => setFilter("Technology")}><a>Technology</a></li>
                  <li onClick={() => setFilter("Travel")}><a>Travel</a></li>
                  <li onClick={() => setFilter("")}><a>Reset</a></li>
               </ul>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {showBlogs?.map(blog => <CardforAllBlogs key={blog._id} blog={blog}></CardforAllBlogs>)}
         </div>
      </div>
   );
};

export default AllBlogs;