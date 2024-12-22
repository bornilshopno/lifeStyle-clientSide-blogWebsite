import { Link } from "react-router-dom";

const CardforAllBlogs = ({ blog }) => {
    const { _id, category, thumbnail, title, shortDescription, longDescription, email, name } = blog;
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
                        <button className="btn btn-primary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardforAllBlogs;