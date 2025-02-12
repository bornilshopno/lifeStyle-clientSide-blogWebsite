import { toast } from "react-toastify";
import useAuth from "../../SharedCompoents/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import Typewriter from 'typewriter-effect';
import { Helmet } from "react-helmet-async";

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
        const photo = user.photoURL;


        if (category === "Blog Category") {
            toast.error("please select category to create blog");
            return;
        }

        const newBlog = { category, thumbnail, title, shortDescription, longDescription, email, name, photo }
      

        axios.post("https://server-side-life-style.vercel.app/blogs", newBlog)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Blog Added!',
                        text: 'Check All Blogs to see its existence',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                };
                form.reset();
            })


    }
    return (
        <div className=" bg-gray-200 dark:bg-gray-800" >
            
            <Helmet>
                <title>LifeStyle Circuit || Add Blog</title>
            </Helmet>
            <h1 className="py-5 md:py-10 pt-10 text-center text-xl lg:text-4xl font-bold text-[#6A609F] dark:text-gray-200">
                <Typewriter
                    options={{
                        strings: ["Add Your New Blog!"],
                        autoStart: true,
                        loop: 1,
                        typeSpeed: 20,
                        cursor: "",
                    }}
                />     </h1>
            <div className="card w-full shrink-0 shadow-2xl ">
                <form className="card-body " onSubmit={addBlogHandler}>

                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#6A609F] dark:text-white">Blog Title :</span>
                            </label>
                            <input type="text" name="title" placeholder="Blog Title" className="input input-bordered bg-[#F4F0FF] placeholder-gray-600" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#6A609F] dark:text-white">Category :</span>
                            </label>
                            <select className="select w-full  input-bordered text-gray-600 bg-[#F4F0FF]" name="category" defaultValue={"Blog Category"}>
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
                                <span className="label-text text-[#6A609F] dark:text-white">Blog Image :</span>
                            </label>
                            <input type="url" name="thumbnail" placeholder="URL of Blog Image" className="input input-bordered bg-[#F4F0FF] placeholder-gray-600" required />
                        </div>
                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text text-[#6A609F] dark:text-white">Short Description :</span>
                            </label>
                            <textarea
                                placeholder="Short Descripton(apprx 50 words)" name="shortDescription"
                                className="textarea textarea-bordered textarea-sm bg-[#F4F0FF] placeholder-gray-600" required></textarea>

                        </div>



                        <div className="form-control lg:col-span-2">
                            <label className="label">
                                <span className="label-text text-[#6A609F] dark:text-white">Long Description :</span>
                            </label>
                            <textarea
                                placeholder="Detail Blog" name="longDescription"
                                className="textarea textarea-bordered textarea-md bg-[#F4F0FF] placeholder-gray-600" required></textarea>

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent bg-[#6A609F] border-none">Submit Your Blog</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddBlogs;