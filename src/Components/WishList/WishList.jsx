import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../SharedCompoents/useAuth";
import WishTable from "./WishTable";


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
            <div>
                {myWishes?.map(wish=><WishTable key={wish._id} wish={wish}></WishTable>)}
            </div>
        </div>
    );
};

export default WishList;