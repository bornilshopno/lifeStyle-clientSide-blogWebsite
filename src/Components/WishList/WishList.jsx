import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../SharedCompoents/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiSolidDetail } from "react-icons/bi";
import useAxiosSecure from "../../SharedCompoents/useAxiosSecure";



const WishList = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [myWishes, setMywishes] = useState(null);
    useEffect(() => {
        axiosSecure.get(`/myWishes?email=${user?.email}`)
        .then(res =>  setMywishes(res.data) )
    }, [user?.email , axiosSecure])

    const wishDeleteHandler = (id) => {
        axiosSecure.delete(`/wish/${id}`)

            .then(res => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Selected Blog removed from your Wishlist',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    });
                    console.log(myWishes)
                    const remaining= myWishes.filter((wish)=>wish._id !== id)
                    setMywishes(remaining)
                }

            })
    }

    return (
        <div className="min-h-72 lg:min-h-96">
            <h1>Blogs In Wishlist</h1>
            <h3>No of wishes: {myWishes?.length} </h3>
            <div className="bg-[#002b36] text-[#268bd2]">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center bg-[#002b36] text-white">
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
                            <tr className="text-center">
                                <th></th>
                                <th>Blog</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WishList;