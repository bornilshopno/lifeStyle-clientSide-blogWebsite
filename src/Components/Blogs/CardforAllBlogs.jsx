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
    
    return (
        <div className="" >
     
     {/* Aos.init()
     import Aos from "aos";
import 'aos/dist/aos.css';
     data-aos="zoom-in"
     data-aos-duration="1000" */}

            <div className="card pt-4 rounded-md bg-gray-100" >
                <figure className="">
                    <motion.img
                        src={thumbnail} animate={{scale:1.2}} 
                        transition={{duration:5, repeat:Infinity, delay:1}}
                        alt="blogImage"
                        className="w-80 h-52 object-fill " />
                </figure>
                <div className="card-body px-4 pt-0 pb-4">
                    <h2 className="card-title py-2">{title}</h2>
                    <div className="flex justify-between flex-col">
                        <p className="italic">Blog By: <span className="font-semibold">{name}</span></p>
                        <p className="italic">Category :<span className="font-semibold">{category}</span> </p>
                        <p className="pt-2">{shortDescription}</p>
                       

                    </div>

                  
                    <div className="card-actions justify-end">
                        <Link to={`/blog/${_id}`}><button className="btn btn-primary btn-sm">Details</button></Link>
                        <button className="btn btn-primary btn-sm" onClick={wishlistHandler}>Add in Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardforAllBlogs;