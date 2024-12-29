import { useEffect, useState } from "react";
import useAuth from "../../SharedCompoents/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiSolidDetail } from "react-icons/bi";
import useAxiosSecure from "../../SharedCompoents/useAxiosSecure";
import Typewriter from 'typewriter-effect';
import NoWish from "./NoWish";
import { Helmet } from "react-helmet-async";


const WishList = () => {
    const axiosSecure = useAxiosSecure()
    const { user, myWishes, setMywishes } = useAuth()
    useEffect(() => {
        axiosSecure.get(`/myWishes?email=${user?.email}`)
            .then(res => setMywishes(res.data))
    }, [user?.email, axiosSecure])

    // const wishDeleteHandler = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         axiosSecure.delete(`/wish/${id}`)
    //             .then(res => {
    //                 if (res.data.deletedCount) {
    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your file has been deleted.",
    //                         icon: "success"
    //                     });
    //                     const remaining = myWishes.filter((wish) => wish._id !== id)
    //                     setMywishes(remaining)
    //                 })

    //     }

    const wishDeleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) { 
                axiosSecure.delete(`/wish/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myWishes.filter((wish) => wish._id !== id);
                            setMywishes(remaining);
                        }
                    }).catch(error => {
                        console.error("Error deleting wish:", error);
                    });
            }
        }); 
    }; 
    

    return (
            <div className="min-h-72 lg:min-h-96 " style={{
                backgroundImage: "url('/water.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
                <Helmet>
                    <title>LifeStyle Circuit || WishLists</title>
                </Helmet>
                <h1 className="py-5 text-center text-xl lg:text-4xl font-bold text-[#335d67]">
                    <Typewriter
                        options={{
                            strings: ["BLOGS IN WISHLIST"],
                            autoStart: true,
                            loop: 1,
                            typeSpeed: 20
                        }}
                    />     </h1>
                {/* <div className="bg-[#002b36] text-[#268bd2] my-auto">       */}
                <div className=" my-auto">
                    {myWishes?.length !== 0 ?
                        <div className="overflow-x-auto bg-[#335d67] text-[#268bd2]">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-center bg-[#7c979e] text-white">
                                        <th></th>
                                        <th>Blog</th>
                                        <th>Author</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myWishes?.map((wish, index) =>
                                        <tr key={wish._id} className="text-center" >
                                            <th> {index + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={wish.thumbnail}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{wish.title}</div>
                                                        {/* <div className="text-sm opacity-50">United States</div> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {wish?.name ? wish.name : "Anonoymas"}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">{wish.email}</span>
                                            </td>
                                            <td>{wish.category}</td>
                                            <td>{wish.shortDescription}</td>
                                            <th >
                                                <div className="flex gap-2 items-center justify-center my-auto">
                                                    <button className="" onClick={() => wishDeleteHandler(wish._id)}><RiDeleteBin2Fill className="text-2xl text-red-400" /></button>
                                                    <Link to={`/blog/${wish.blogId}`}><button className=" "><BiSolidDetail className="text-2xl text-green-400" /></button></Link>
                                                </div>
                                            </th>
                                        </tr>)}
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr className="text-center bg-[#335d67] text-white">
                                        <th></th>
                                        <th>Blog</th>
                                        <th>Author</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div> : <NoWish></NoWish>}

                </div>
            </div>
        );
    };

    export default WishList;