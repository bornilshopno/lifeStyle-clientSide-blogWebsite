/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react"


const CardforAllBlogs = ({ blog }) => {

    const { user,myWishes, setMywishes } = useAuth()
    const[inWishes, setInWishes]=useState(null)
    const { _id, category, thumbnail, title, shortDescription,   name, } = blog;
    // const wishlistHandler = () => {
    //     const wishOf = user.email;
    //     const { _id, photo, longDescription, ...restItems } = blog;
    //     const blogId = _id;   
    //     let existing=myWishes?.find(wish=>wish.blogId === blogId)
    //     setInWishes(existing)
    //     console.log(blogId,existing,myWishes)
    //     if(inWishes){
    //         return toast.info("This Blog already in your wish")
    //     }

    //     const wishBlog = { blogId, wishOf, ...restItems }
 

    //     axios.post(`https://server-side-life-style.vercel.app/wishlist`, wishBlog)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 Swal.fire({
    //                     title: 'Blog Added!',
    //                     text: 'Check All Blogs to see its existence',
    //                     icon: 'success',
    //                     confirmButtonText: 'Done'
    //                 })
    //             }
    //         })
    // }
    const wishlistHandler = () => {
        const wishOf = user.email;
        const { _id, photo, longDescription, ...restItems } = blog;
        const blogId = _id;
    
        
        let existing = myWishes?.find(wish => wish.blogId === blogId);
    

        if (existing) {
            return toast.info("This Blog is already in your wish");
        }
    

        const wishBlog = { blogId, wishOf, ...restItems };
    
        axios.post(`https://server-side-life-style.vercel.app/wishlist`, wishBlog)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Blog Added!',
                        text: 'Check All Blogs to see its existence',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            });
    

        setInWishes(existing);
    };
    const box = {
        borderRadius: 5,
    }
    
    return (
        <div className=" " >
     
     {/* Aos.init()
     import Aos from "aos";
import 'aos/dist/aos.css';
     data-aos="zoom-in"
     data-aos-duration="1000" */}

            <motion.div className="card  rounded-md bg-white text-gray-600"  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={box} >
                <figure className="">
                    <img
                        src={thumbnail}                         
                        alt="blogImage"
                        className="h-28 w-2/3 mx-auto lg:w-full object-cover" />
                </figure>
                <div className="card-body px-4 pt-0 pb-4 relative">
                   <div className="h-28 mt-2">
                   <h2 className="font-semibold py-2 text-base">
                       {(title.length>20) ? `${title.slice(0,40)}...` : title}
                    </h2>
                    {/* <h2 className="card-title py-2">{title}</h2> */}
                  
                        <p className="italic">Blog By: <span className="font-semibold">{name}</span></p>
                   </div>
                        
                        {/* <p className="pt-2 h-[120px]">{shortDescription.slice(0,100)}...</p> */}
                       

                  

                  
                    <div className="card-actions justify-end">
                        <Link to={`/blog/${_id}`}><button className="btn bg-[#9d96c9] dark:bg-[#6A609F] btn-sm">Details</button></Link>
                        <button className="btn bg-[#9d96c9] dark:bg-[#6A609F] btn-sm" onClick={wishlistHandler}>Add in Wishlist</button>
                    </div>
                    <div className="absolute border border-b-gray-600 border-l-gray-600 rounded-lg -top-4 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 p-1 bg-white text-white">
                    <p className="italic bg-gray-600 rounded-md px-1"><span className="font-semibold">{category}</span> </p>
                    </div>
                </div>
              
            </motion.div>

        </div>
    );
};

export default CardforAllBlogs;