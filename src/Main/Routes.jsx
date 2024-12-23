import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../SharedCompoents/ErrorPage";
import LogIn from "../Auths/LogIn";
import Register from "../Auths/Register";
import AddBlogs from "../Components/Blogs/AddBlogs";
import AllBlogs from "../Components/Blogs/AllBlogs";
import BlogDetails from "../Components/Blogs/BlogDetails";
import UpdateBlog from "../Components/Blogs/UpdateBlog";
import WishList from "../Components/WishList/WishList";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>,
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/addblog",
                element:<AddBlogs></AddBlogs>
            },
            {
                path:"/allblogs",
                element:<AllBlogs></AllBlogs>
            },
            {
                path:"/wishlist",
                element:<WishList></WishList>
            },
            {
                path:"/blog/:id",
                element:<BlogDetails></BlogDetails>,
                loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path:"/updateBlog/:id",
                element: <UpdateBlog></UpdateBlog>,
                loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
            }
        ]
    },
]);

export default Routes;