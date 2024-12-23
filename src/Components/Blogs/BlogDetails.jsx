import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";


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
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <img
                        src={thumbnail}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h1> Author : {name}</h1>
                        <p>Category : {category}</p>
                        <p className="py-6">
                            {longDescription}
                        </p>

                    </div>


                    <div className="Comment-Section">
                        {user?.email === email ?
                            <div>
                                <Link to={`/updateBlog/${_id}`}>  <button className="btn btn-primary">Update Blog</button></Link>
                                <h2>Author of the Blog are not entertained to add Comments</h2>
                            </div>
                            :
                            <form className="flex gap-2" onSubmit={commentHandler}>
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Add Comment</span>
                                    </label> */}
                                    <textarea
                                        placeholder="==Write your comments here==" name="comment"
                                        className="textarea textarea-bordered textarea-sm" required></textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Publish</button>
                                </div>
                            </form>
                        }

                    </div>
                </div>
            </div>


            {/* comment section */}
            <div>
                {blogComments?.map(bcomment =>
                    <div key={bcomment._id} className="grid grid-cols-1 lg:grid-cols-5 border-2  ">
                        <div className="lg:col-span-2 flex gap-2 items-center bg-gray-300">
                            <img src={bcomment.photo} alt="" className="w-10 rounded-full" />
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