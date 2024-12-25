import Marquee from 'react-fast-marquee';
import photo1 from "../assets/petAdoption.png"
import photo2 from "../assets/dream-eleven.png"
import photo3 from "../assets/gadgetHeaven.png"
import { Link } from 'react-router-dom';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import Aos from 'aos';



const DevDetails = () => {
Aos.init()

    return (
        <div>
            <div>
                <h2 className='text-center bg-gradient-to-b from-[#273344] to-[#234668] py-10 font-bold text-5xl text-amber-400 underline'>Skills and Expertises</h2>
                <Marquee autoFill={true} pauseOnHover={true} className="bg-gradient-to-b from-[#234668] to-[#495765]">
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold text-center'>HTML 5</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold text-center'>CSS 3</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold '>Tailwind CSS</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>JavaScript</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>React.JS</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-3 text-amber-400 font-bold'>Firebase<br /><span className='text-xl'>Authentication</span></h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-3 text-amber-400 font-bold'>MONGO DB<br /><span className='text-xl'>Basic CRUD</span></h1>
                    </div>
                </Marquee>
            </div>
            <div>
                <h2 className='text-center bg-gradient-to-t from-gray-400 to-[#495765] py-10 font-bold text-5xl text-white underline'>Recent Projects</h2>
                <div className="grid gird-cols-1 lg:grid-cols-3 gap-5 px-10 lg:px-20 pb-16 bg-gradient-to-b from-gray-400 to-gray-800">
                    {/* number-1 */}
                    <div className="card card-compact bg-sky-100  border-2 border-amber-400" data-aos="fade-up"
     data-aos-duration="3000">
                        <figure>
                            <img
                                src={photo1} className='h-52 w-full object-cover'
                                alt="Peddy Website" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Peddy</h2>
                            <p>A Pet Adoption Platform </p>
                            <div className="card-actions justify-end">
                                <Link to="https://peddy-pet-adoption-place.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Page</Link>
                            </div>
                        </div>
                    </div>
                    {/* number-2 */}
                    <div className="card card-compact bg-sky-100 border-2 border-amber-400" data-aos="fade-up"
     data-aos-duration="3000">
                        <figure>
                            <img
                                src={photo2} className='h-52'
                                alt="Dream 11" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Dream 11</h2>
                            <p>A Fantasy Gaming Platform </p>
                            <div className="card-actions justify-end">
                                <Link to="https://dreameleven.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Page</Link>
                            </div>
                        </div>
                    </div>
                    {/* number-3 */}
                    <div className="card card-compact bg-sky-100  border-2 border-amber-400" data-aos="fade-up"
     data-aos-duration="3000">
                        <figure>
                            <img
                                src={photo3} className='h-52'
                                alt="Gadget Heaven" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Gadget Heaven</h2>
                            <p>Gadget Selling Platform </p>
                            <div className="card-actions justify-end">
                                <Link to="https://gadget-gallary.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer bg-gradient-to-b from-gray-800 to-black text-white px-10 lg:px-20 flex items-center justify-between flex-col md:flex-row py-5 lg:py-10 '>
                <div>
                    <h2 className='mx-auto font-bold'>Md. Ashraf Manna</h2>
                    <p className=' font-semibold'>Junior Front End Developer</p>
                </div>
                <div className=''>
                    <p className='font-semibold mx-auto'>Connect to Social Media</p>
                   <div className='flex gap-5'>
                   <a href="https://www.facebook.com/hopefulmanna/" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-12"><FaSquareFacebook className='text-4xl'></FaSquareFacebook></a>
                    <a href="https://github.com/bornilshopno" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-12"><FaSquareGithub className='text-4xl'></FaSquareGithub></a>
                    <a href="https://www.linkedin.com/in/md-ashraf-hossain-a8772284/" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-12"><IoLogoLinkedin className='text-4xl'></IoLogoLinkedin></a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default DevDetails;