import { Link } from "react-router-dom";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const CardforAllBlogs = ({ blog }) => {
    const { user } = useAuth()
    const { _id, category, thumbnail, title, shortDescription, longDescription, email, name, photo } = blog;
    const wishlistHandler = () => {
        const wishOf = user.email;
        const { _id, photo, thumbnail, longDescription, ...restItems } = blog;
        const blogId = _id;
        console.log(restItems);
        const wishBlog = { blogId, wishOf, ...restItems }
        console.log(wishBlog)

        axios.post(`http://localhost:5000/wishlist`,wishBlog)
        .then(res=>{
            if(res.data.insertedId)    {
                                Swal.fire({
                                    title: 'Blog Added!',
                                    text: 'Check All Blogs to see its existence',
                                    icon: 'success',
                                    confirmButtonText: 'Done'
                                  })
                            }
        })
    }
    return (
        <div>
            <div className="card card-compact bg-base-100">
                <figure>
                    <img
                        src={thumbnail}
                        alt="blogImage" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between flex-row-reverse">
                        <p>Category : {category}</p>
                        <p>Author: {name}</p>
                    </div>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/blog/${_id}`}><button className="btn btn-primary">Details</button></Link>
                        <button className="btn btn-primary" onClick={wishlistHandler}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardforAllBlogs;