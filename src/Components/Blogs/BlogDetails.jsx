import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../SharedCompoents/useAuth";


const BlogDetails = () => {
    const blog = useLoaderData();
    const { user } = useAuth()
    const { _id, category, thumbnail, title, shortDescription, longDescription, email, name } = blog;
    const commentHandler=e=>{
        e.preventDefault();
        const comment=e.target.comment.value;
        console.log("comment posted by", user.email , comment)
    }
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
                    <div>
                        {user?.email===email ?
                        <Link>  <button className="btn btn-primary">Update</button></Link> :
                        <form className="card-body" onSubmit={commentHandler}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Comment</span>
                                </label>
                                <textarea
                                    placeholder="==Write your comments here==" name="comment"
                                    className="textarea textarea-bordered textarea-sm" required></textarea>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Publish Comment</button>
                            </div>
                        </form>
}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;