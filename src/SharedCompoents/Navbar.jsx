import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import useAuth from "./useAuth";


const Navbar = () => {
    const{name}=useAuth()

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/"}>Add Blog</NavLink></li>
        <li><NavLink to={"/"}>All Blogs</NavLink> </li>
        <li><NavLink to={"/"}>Featured Blogs</NavLink> </li>
        <li><NavLink to={"/"}>Wishlist</NavLink> </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                
                <a className="btn btn-ghost text-xl">LiftStyle Circuit</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
            {/* <div className="navbar-end gap-4">
          {user ? <>  <p>{user.email}</p> <button className="btn btn-secondary" onClick={() => handleSignOut()}>SignOut</button>
          </> : <>   <Link className="btn btn-primary" to={"/register"}>Register</Link>
            <Link className="btn btn-secondary" to={"/login"}>Login</Link></>}
        </div> */}
                <a className="btn">{name}</a>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <HiMenu></HiMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;