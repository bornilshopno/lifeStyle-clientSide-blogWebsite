import { useEffect, useState } from "react";
import { app } from "../Auths/firebase";
import AuthContext from "./AuthContext"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";



// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [allBlogs, setAllBlogs] = useState([])
    const [featuredBlog, setFeaturedBlog] = useState([])
   
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
            setLoading(false)
        })

        return () => unSubscribe();
    }, [auth])

    useEffect(() => {
        axios.get("http://localhost:5000/blogs")
            .then(res => {
                setAllBlogs(res.data);
                console.log(res.data)
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



    const authInfo = { loading, setLoading, createUser, loginUser, user, setUser, userSignOut, googleSignIn, auth, allBlogs, setAllBlogs, featuredBlog }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;