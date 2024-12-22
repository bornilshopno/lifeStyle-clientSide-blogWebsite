import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../SharedCompoents/ErrorPage";
import LogIn from "../Auths/LogIn";
import Register from "../Auths/Register";
import AddBlogs from "../Components/Blogs/AddBlogs";


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
            }
        ]
    },
]);

export default Routes;