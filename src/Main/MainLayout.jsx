
import Navbar from '../SharedCompoents/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedCompoents/Footer';

const MainLayout = () => {
    return (
        <div className="">
        <Navbar></Navbar> 
        <Outlet></Outlet>
        <Footer></Footer>  
      </div>
    );
};

export default MainLayout;