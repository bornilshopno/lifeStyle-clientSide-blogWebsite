import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoGameControllerSharp } from "react-icons/io5"

const Footer = () => {
    return (
        <div className="bg-amber-400 dark:bg-gray-800 text-gray-800 dark:text-white">
            <footer className="footer py-5 px-10 place-items-center">
                <aside>
                <Link to="/"> <div className="flex gap-3 items-center"><IoGameControllerSharp className="text-2xl" /><span className="text-2xl font-bold">ChillGamer</span></div></Link>
                    <p>A Game Review Application
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