import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import useAuth from "./useAuth";
import { ToastContainer } from "react-toastify";


const Navbar = () => {
    const{user,userSignOut}=useAuth()

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/addblog"}>Add Blog</NavLink></li>
        <li><NavLink to={"/"}>All Blogs</NavLink> </li>
        <li><NavLink to={"/"}>Featured Blogs</NavLink> </li>
        <li><NavLink to={"/"}>Wishlist</NavLink> </li>
    </>
    return (
       
        <div className="navbar bg-base-100">
             <ToastContainer></ToastContainer>
            <div className="navbar-start">                
                <a className="btn btn-ghost text-xl">LiftStyle Circuit</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>            
            <div className="navbar-end gap-4">
          {user ? 
          <>  <img className="h-10 border-2 rounded-xl" src={user?.photoURL} alt="" /> <button className="btn btn-secondary" onClick={() => userSignOut()}>SignOut</button>
          </> : 
          <> <Link className="btn btn-primary" to={"/register"}>Register</Link>
            <Link className="btn btn-secondary" to={"/login"}>Login</Link></>}
        </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <HiMenu className="text-3xl"></HiMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
       
    );
};

export default Navbar;