import { useEffect, useState } from "react";
import AuthContext from "./AuthContext"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";
import useAxiosSecure from "../SharedCompoents/useAxiosSecure";
import { app } from "../Auths/firebase.init";




// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [allBlogs, setAllBlogs] = useState([])
    const [featuredBlog, setFeaturedBlog] = useState([])
    const [myWishes, setMywishes] = useState(null);
   
    const axiosSecure=useAxiosSecure()
    const auth = getAuth(app);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth)
    }
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          
            if(currentUser?.email){
                const user={email: currentUser.email};
                axiosSecure.post("/jwt" ,user)
                // axios.post("https://server-side-life-style.vercel.app/jwt", user, {withCredentials:true})
                .then(res=> {
                    setLoading(false)
                })
            }
            else{
                axiosSecure.post("/logout" ,{})
                // axios.post("https://server-side-life-style.vercel.app/logout" ,{}, {withCredentials:true})
                .then(res=> {console.log(res.data);
                    setLoading(false)
                })
                .catch(error => {
                    console.error('Error during logout:', error);
                });
            }
        
        })

        return () => unSubscribe();
    }, [auth, axiosSecure])

    useEffect(() => {
        axios.get("https://server-side-life-style.vercel.app/blogs")    
            .then(res => {
                setAllBlogs(res.data);
            })
    },
        []
    )

    const sortedData = [...allBlogs].sort((a, b) => { b.longDescription.length - a.longDescription.length })
    useEffect(() => {
        if (sortedData.length > 10) {
            setFeaturedBlog(sortedData.slice(0, 10));
        } else {
            setFeaturedBlog(sortedData);
        }
    }, [allBlogs]);



    const authInfo = { loading, setLoading, createUser, loginUser, user, setUser, userSignOut, googleSignIn, auth, allBlogs, setAllBlogs, featuredBlog,myWishes, setMywishes }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;