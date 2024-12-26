import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
    return (
        <div className="bg-gray-800 text-white">
            <footer className="footer py-5 px-10 place-items-center">
                <aside>
                <Link to={"/"}><a className="btn btn-ghost text-xl">LiftStyle Circuit</a></Link>
                    <p className="text-center">A Page for Blogs
                    </p>
                </aside>
                <nav>
                    <Link to={"/developer-details"} className="text-base font-bold">About Developer</Link>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link><BsTwitterX className="text-xl"/></Link>
                        <Link><IoLogoYoutube className="text-xl"/></Link>
                        <Link><FaFacebookF className="text-xl"/></Link>
                    </div>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;