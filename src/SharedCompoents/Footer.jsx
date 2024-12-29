import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
    return (
        <div className="bg-gray-800 text-white">
            <footer className="footer py-5 px-10 lg:place-items-center text-gray-300">
                <aside>
                <Link to={"/"}><h1 className="text-xl font-bold ">LiftStyle Circuit</h1></Link>
                    <p className="">A Page for Blogs
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