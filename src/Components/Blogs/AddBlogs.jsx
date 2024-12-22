import { toast } from "react-toastify";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlogs = () => {
    const { user } = useAuth()
    console.log(user)
    const addBlogHandler = e => {
        e.preventDefault()
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const email = user.email;
        const name = user.displayName;


        if (category === "Blog Category") {
            toast.error("please select category to create blog");
            return;
        }

        const newBlog = { category, thumbnail, title, shortDescription, longDescription, email, name }
        console.log(newBlog)

        axios.post("http://localhost:5000/blogs", newBlog)
            .then(res => { 
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
            <h1>Add a New Blog</h1>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={addBlogHandler}>

                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Blog Title :</span>
                            </label>
                            <input type="text" name="title" placeholder="Blog Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category :</span>
                            </label>
                            <select className="select w-full  input-bordered" name="category" defaultValue={"Blog Category"}>
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
                            <input type="url" name="thumbnail" placeholder="URL of Blog Image" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea
                                placeholder="Short Descripton" name="shortDescription"
                                className="textarea textarea-bordered textarea-sm" required></textarea>

                        </div>



                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <textarea
                                placeholder="Detail Blog" name="longDescription"
                                className="textarea textarea-bordered textarea-md" required></textarea>

                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered bg-slate-100" value={user?.email} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered bg-slate-100" value={user?.displayName || "anonymous"} readOnly />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit your Review</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddBlogs;