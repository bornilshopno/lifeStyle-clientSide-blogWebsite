import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";



const BlogDetails = () => {
    const blog = useLoaderData();
    const { user } = useAuth()
    const [blogComments, setComment] = useState([])
    const { _id, category, thumbnail, title, shortDescription, longDescription, email, name } = blog;
    // const { blogID, name, photo,email,comment}=blogComments;
    const commentHandler = e => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const email = user.email;
        const name = user.displayName;
        const photo = user.photoURL;
        const blogID = _id;

        const commentInfo = { blogID, name, photo, email, comment }
        console.log(commentInfo)


        axios.post("https://server-side-life-style.vercel.app/comments", commentInfo)
            .then(result => {
                console.log(result.data);
                const increasedComments = [...blogComments, commentInfo]
                toast.success(" your comment added")
                setComment(increasedComments)

            })
    }

    useEffect(() => {
        axios.get(`https://server-side-life-style.vercel.app/comment/${_id}`)
            .then(res => { setComment(res.data) })
    }, [_id])


    return (
        <div className=" pb-10">
            <Helmet>
                <title>LifeStyle Circuit || Blog</title>
            </Helmet>
            <div className=" min-h-screen py-5 lg:py-10">
                <div className="flex flex-col gap-5 w-11/12 mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row gap-10 items-center ">
                        <div className="w-3/4 max-w-lg  mx-auto"> <img
                            src={thumbnail}
                            className=" rounded-lg shadow-2xl h-full w-full object-cover" /></div>

                        <div className=" w-9/12 lg:w-1/2 mx-auto lg:space-y-3">
                            <div className="flex items-center">

                            </div>
                            <h1 className="text-xl text-[#6a609f] font-bold text-center italic">{title}</h1>
                            <h1 className="text-[#6a609f] text-center"> Author :<span className="font-semibold italic"> {name ? name : "Anonymous"}</span></h1>
                            <p className="text-[#6a609f] text-center">Category : <span className="font-semibold italic">{category}</span></p>
                            <h3 className="italic p-2 lg:p-5 border-4 rounded-lg border-[#6a609f] lg:max-w-lg mx-auto bg-gray-200 bg-opacity-50 mt-4 text-gray-700">Summary : {shortDescription} </h3>

                        </div>
                    </div>
                    <p className="py-6 px-4 w-10/12 text-gray-800 lg:max-w-4xl mx-auto bg-[#a49ccd] rounded-xl">
                        {longDescription}
                    </p>

                    <div className="w-11/12 lg:w-9/12 mx-auto">
                        <div className="Comment-Section">
                            {user?.email === email ?
                                <div className="py-2 px-5 lg:px-10 lg:max-w-lg mx-auto bg-[#9186c7] flex flex-col-reverse items-center justify-center gap-3 lg:gap-5 rounded-xl border-white border-4 ">
                                    <Link to={`/updateBlog/${_id}`}>  <button className="btn btn-sm border-none ">Update Blog</button></Link>
                                    <h2>Author of the Blog are not entertained to add Comments</h2>
                                </div>
                                : <>
                                    <form className="flex gap-2 w-full justify-center" onSubmit={commentHandler}>
                                        <div className="form-control">

                                            <textarea
                                                placeholder="==Write your comments here==" name="comment"
                                                className="w-60 md:w-72 lg:w-96 h-20  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>

                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn bg-[#6a609f]">Publish</button>
                                        </div>
                                    </form>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 lg:w-9/12 mx-auto pt-3 px-5 lg:px-10 pb-10 bg-[#6a609f] rounded-3xl">
                <h1 className="pb-3 text-gray-700 font-bold italic">Comments :</h1>
                {/* comment section */}
                <div className="">

                    {blogComments?.map(bcomment =>
                        <div key={bcomment._id} className="flex flex-col lg:flex-row lg:gap-2 item-center border-2 bg-gray-300 rounded-lg mb-2">
                            <div className="text-gray-600 flex gap-2 items-center ">
                                <img src={bcomment.photo} alt="" className="w-10 border border-indigo-400 rounded-full" />
                                <h3 className="italic">{bcomment.name}</h3>
                                <p className="italic">wrote:</p>
                            </div>
                            <div className="flex items-center text-center italic text-[#6a609f] ml-10 lg:ml-0">
                                {bcomment.comment}
                            </div>


                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;