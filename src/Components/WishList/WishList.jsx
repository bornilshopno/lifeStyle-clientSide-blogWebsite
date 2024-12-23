import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../SharedCompoents/useAuth";


const WishList = () => {
    const{user}=useAuth()
    const [myWishes,setMywishes]=useState(null);
    useEffect (()=>{
        axios.get(`http://localhost:5000/myWishes?email=${user?.email}`)
        .then(res=>{ setMywishes(res.data)})
    } ,[user])



    return (
        <div>
            <h1>Blogs In Wishlist</h1>
            <h3>No of wishes: {myWishes?.length} </h3>
        </div>
    );
};

export default WishList;