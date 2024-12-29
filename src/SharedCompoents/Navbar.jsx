import { Link,  NavLink, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import useAuth from "./useAuth";
import { ToastContainer } from "react-toastify";


const Navbar = () => {
    const { user, userSignOut } = useAuth();
    const navigate =useNavigate()

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/addblog"}>Add Blog</NavLink></li>
        <li><NavLink to={"/allblogs"}>All Blogs</NavLink> </li>
        <li><NavLink to={"/featured-blogs"}>Featured Blogs</NavLink> </li>
        <li><NavLink to={"/wishlist"}>Wishlist</NavLink> </li>
    </>

const linksForBurger = <>
<li><NavLink to={"/"}>Home</NavLink></li>
<li><NavLink to={"/addblog"}>Add Blog</NavLink></li>
<li><NavLink to={"/allblogs"}>All Blogs</NavLink> </li>
<li><NavLink to={"/featured-blogs"}>Featured Blogs</NavLink> </li>
<li><NavLink to={"/wishlist"}>Wishlist</NavLink> </li>
{ (!user) ? <li><NavLink to={"/register"}>Register</NavLink></li>
 : <li><button className="" onClick={() => {userSignOut(); navigate("/")}}>SignOut</button></li>}
</>
    return (
<>
<div className="navbar bg-gradient-to-b from-[#051A1D] to-[#1D3160] text-white border-b z-50 fixed backdrop-filter backdrop-blur-l bg-opacity-40">
            <ToastContainer></ToastContainer>
            <div className="navbar-start">
          <Link to={"/"}><h1 className="btn btn-ghost text-xl">LiftStyle Circuit</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 lg:gap-4">
                {user ?
                    <>  <img className="h-10 border-2 rounded-xl" src={user?.photoURL} alt="" /> 
                    <button className="btn btn-secondary btn-sm hidden lg:flex" onClick={() => {userSignOut(); navigate("/")}}>SignOut</button>
                    </> :
                    <> <Link className="btn btn-secondary btn-sm hidden lg:flex" to={"/register"}>Register</Link>
                        <Link className="btn btn-secondary btn-sm" to={"/login"}>Login</Link></>}
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <HiMenu className="text-3xl"></HiMenu>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#1D3160] rounded-box z-[1] mt-0 w-28 p-1 ">
                    {linksForBurger}
                </ul>
            </div>




        </div>
        <div className="h-16"></div>
</>
     

    );
};

export default Navbar;