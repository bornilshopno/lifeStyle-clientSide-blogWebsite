import { Link } from "react-router-dom";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css';


const CardforAllBlogs = ({ blog }) => {
    Aos.init()
    const { user } = useAuth()
    const { _id, category, thumbnail, title, shortDescription, longDescription, email, name, photo } = blog;
    const wishlistHandler = () => {
        const wishOf = user.email;
        const { _id, photo, longDescription, ...restItems } = blog;
        const blogId = _id;
        console.log(restItems);
        const wishBlog = { blogId, wishOf, ...restItems }
        console.log(wishBlog)

        axios.post(`http://localhost:5000/wishlist`, wishBlog)
            .then(res => {
                if (res.data.insertedId) {
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
        <div className="" >
            {/* <div className="card card-compact bg-base-100">
                <figure>
                    <img
                        src={thumbnail}
                        alt="blogImage"
                        className="w-80 h-60" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between flex-row-reverse">
                        <p>Blog Category : {category}</p>
                        <p>Blog Posted By: {name}</p>
                    </div>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/blog/${_id}`}><button className="btn btn-primary">Details</button></Link>
                        <button className="btn btn-primary" onClick={wishlistHandler}>Add to Wishlist</button>
                    </div>
                </div>
            </div> */}


            <div className="card card-side bg-gray-500 shadow-xl h-80" data-aos="fade-up"
        data-aos-duration="3000">
                <figure>
                    <img
                        src={thumbnail}
                        alt="blogImage"
                        className="w-80 h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between flex-col">
                        <p>Blog By: {name}</p>
                        <p>Category : {category}</p>
                        <p>{shortDescription}</p>
                       

                    </div>

                  
                    <div className="card-actions justify-end">
                        <Link to={`/blog/${_id}`}><button className="btn btn-primary btn-sm">Details</button></Link>
                        <button className="btn btn-primary btn-sm" onClick={wishlistHandler}>Add to Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardforAllBlogs;