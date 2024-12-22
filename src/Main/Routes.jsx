import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../SharedCompoents/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default Routes;