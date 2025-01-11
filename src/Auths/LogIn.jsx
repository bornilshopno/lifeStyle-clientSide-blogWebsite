import { FcGoogle } from "react-icons/fc";
import regSignIn from "../assets/LogInAnimation.json"
import Lottie from "lottie-react";
import useAuth from "../SharedCompoents/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Helmet } from "react-helmet-async";


const LogIn = () => {
    const { loginUser, setLoading, setUser, googleSignIn } = useAuth()
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedinUser = userCredential.user;
                setUser(loggedinUser);
                setLoading(false)
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage)
            });
    }

    const useGmail = () => {
        googleSignIn()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                setLoading(false);
                navigate(location?.state ? location.state : "/")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error("googlesign in error: ", errorCode, errorMessage)

                /* The email of the user's account used.
                 const email = error.customData.email;
                 The AuthCredential type that was used.
                 const credential = GoogleAuthProvider.credentialFromError(error);*/

            });

    }
    return (
        <div className="bg-[url('/network.jpg')] bg-cover bg-center text-white">
            <Helmet>
                <title>LifeStyle Circuit || LogIn</title>
            </Helmet>
            <div className="hero min-h-96 ">

                <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-20 w-10/12 lg:w-11/12 mx-auto">
                    <div className="text-center lg:text-center lg:flex-1">

                        <Lottie animationData={regSignIn} className=""></Lottie>
                    </div>
                    <div className="card w-full shadow-2xl lg:flex-1 relative bg-[#6A609F] p-4">
                        <form className="card-body p-0" onSubmit={handleSignIn}>
                            <h1 className="text-center font-extrabold text-xl py-3 bg-gray-400 text-gray-700 rounded-xl">Login to LifeStyle CirCuit</h1>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-white">Email :</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-gray-700" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password :</span>
                                </label>
                                <input type={visible ? "text" : "password"} name="password" placeholder="password" className="input input-bordered text-gray-700" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gray-400">Login</button>
                            </div>
                        </form>
                        <button className="absolute right-8 top-52 py-2" onClick={() => setVisible(!visible)}>
                            {visible ? <IoMdEyeOff className="text-2xl text-gray-400"></IoMdEyeOff> : <IoEye className="text-gray-400 text-2xl"></IoEye>}
                        </button>
                        <div className="divider divider-accent">or</div>

                        <button className="btn bg-gray-400" onClick={useGmail}>
                            <FcGoogle></FcGoogle>
                            Login with Google</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LogIn;