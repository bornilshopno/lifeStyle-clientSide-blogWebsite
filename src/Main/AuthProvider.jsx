import { useEffect, useState } from "react";
import { app } from "../Auths/firebase";
import AuthContext from "./AuthContext"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
const [loading,setLoading]=useState(true)
const[user,setUser]=useState(null)
const[userPhoto,setUserPhoto]=useState(null)
    const auth = getAuth(app);
    const createUser=(email,password)=>{
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

    const authInfo = { loading,setLoading, createUser, loginUser,user,setUser,userSignOut,googleSignIn,auth}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;