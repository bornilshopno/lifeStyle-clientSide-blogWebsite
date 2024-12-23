import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const UpdateBlog = () => {
    const selectedBlog = useLoaderData()
    const navigate=useNavigate()
    const { _id, category, thumbnail, title, shortDescription, longDescription, email, name } = selectedBlog;
    const {user}=useAuth()
    const updateBlogHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const email = user.email;
        const name = user.displayName;
        const photo= user.photoURL;

        const updateBlog = { category, thumbnail, title, shortDescription, longDescription, email, name , photo }
        console.log(updateBlog);

        axios.put(`http://localhost:5000/blogs/${_id}`, updateBlog)
        .then(res=>{
            if (res.data.modifiedCount){
                Swal.fire({
                    title: 'Blog Updated!',
                    text: 'Happy Blogging',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  });
                  navigate("/allblogs")
            }
        })
    }
  
    return (
        <div>
            <h1>Add a New Blog</h1>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={updateBlogHandler}>

                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Blog Title :</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} placeholder="Blog Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category :</span>
                            </label>
                            <select className="select w-full  input-bordered" name="category" defaultValue={category} >
                                <option disabled >Blog Category</option>
                                <option>LifeStyle</option>
                                <option>Technology</option>
                                <option>Travel</option>
                                <option>Food</option>
                                <option>Books</option>
                            </select>
                        </div>

                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Blog Image :</span>
                            </label>
                            <input type="url" name="thumbnail" defaultValue={thumbnail} placeholder="URL of Blog Image" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea
                                placeholder="Short Descripton" name="shortDescription" defaultValue={shortDescription}
                                className="textarea textarea-bordered textarea-sm" required></textarea>

                        </div>



                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <textarea
                                placeholder="Detail Blog" name="longDescription" defaultValue={longDescription}
                                className="textarea textarea-bordered textarea-md" required></textarea>

                        </div>



                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={email} className="input input-bordered bg-slate-100" value={user?.email} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} className="input input-bordered bg-slate-100" value={user?.displayName || "anonymous"} readOnly />

                        </div> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit your Review</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateBlog;