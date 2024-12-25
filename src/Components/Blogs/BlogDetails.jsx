import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


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

        axios.post("http://localhost:5000/comments", commentInfo)
            .then(result => {
                console.log(result.data);
                alert(" your comment added")
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/comment/${_id}`)
            .then(res => { setComment(res.data) })
    }, [_id])

    console.log(blogComments)
    return ( 
        <div className="bg-[url('/river.jpg')] bg-cover bg-center">
            <div className=" min-h-screen">
                <div className="flex flex-col gap-5 w-11/12 mx-auto">
                  <div className="flex flex-col lg:flex-row gap-10 items-center ">
                  <div className="h-72 lg:h-96 w-9/12 lg:w-1/2 mx-auto"> <img
                        src={thumbnail}
                        className=" rounded-lg shadow-2xl h-full w-full object-cover" /></div>
                       
                    <div className="border-red-600 border-2 w-9/12 lg:w-1/2 mx-auto lg:space-y-5">
                    <div className="flex items-center">
                    <h2 className="w-24 text-bold">TAGLINES :</h2>
                    <Marquee autoFill={true} speed={40} className="bg-gray-200">
                            <h1 className="mr-5 ">{shortDescription}</h1>
              
                        </Marquee>
                    </div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <h1> Author :<span className="font-semibold italic"> {name}</span></h1>
                        <p>Category : <span className="font-semibold italic">{category}</span></p>
                        

                    </div>
                  </div>
                    <p className="py-6">
                            {longDescription}
                        </p>

                    <div className="w-11/12 lg:w-9/12 mx-auto">
                    <div className="Comment-Section">
                        {user?.email === email ?
                            <div>
                                <Link to={`/updateBlog/${_id}`}>  <button className="btn btn-primary">Update Blog</button></Link>
                                <h2>Author of the Blog are not entertained to add Comments</h2>
                            </div>
                            :<><h1>Comment Section</h1>
                            <form className="flex gap-2 w-full justify-center" onSubmit={commentHandler}>
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Add Comment</span>
                                    </label> */}
                                    <textarea
                                        placeholder="==Write your comments here==" name="comment"
                                        className="w-72 h-40  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Publish</button>
                                </div>
                            </form>
                            </>
                        }

                    </div>
                    </div>
                </div>
            </div>


            {/* comment section */}
            <div className="w-11/12 lg:w-9/12 mx-auto py-10">
                {blogComments?.map(bcomment =>
                    <div key={bcomment._id} className="grid grid-cols-1 lg:grid-cols-5 border-2  ">
                        <div className="lg:col-span-2 flex gap-2 items-center bg-gray-300">
                            <img src={bcomment.photo} alt="" className="w-10 border border-indigo-400 rounded-full" />
                            <h3>{bcomment.name}</h3>
                        </div>
                        <div className="lg:col-span-3">
                            {bcomment.comment}
                        </div>


                    </div>)}
            </div>
        </div>
    );
};

export default BlogDetails;