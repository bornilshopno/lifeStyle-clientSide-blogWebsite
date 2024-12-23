import { useLoaderData } from "react-router-dom";


const Featured = () => {
    const allBlogs= useLoaderData()
    console.log(allBlogs)
    return (
        <div>
           Featured 
        </div>
    );
};

export default Featured;