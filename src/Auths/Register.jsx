import Lottie from "lottie-react";
import regAnimation from "../assets/RegisterAnimation.json"
import { FcGoogle } from "react-icons/fc";
import useAuth from "../SharedCompoents/useAuth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const [visible, setVisible] = useState(false)
    const[passErr,setPassErr]=useState("")
    const { setLoading, createUser,  setUser, auth, googleSignIn, userSignOut } = useAuth()
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;

        setPassErr("")
        let regExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
        if (!regExp.test(password)) {
          setPassErr("Password to be atleast 6 characters & atleast one Uppercase ,one special character & one digit");
          toast.error("Please check requirement above the REGISTER button")
          return;
        }

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const newUser = userCredential.user;
                setUser(newUser);
                setLoading(false);
                updateProfile(auth.currentUser, { photoURL: photo, displayName: name })
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        console.log(error)
                    });
                userSignOut()
                Swal.fire({
                    title: "Registration Complete",
                    text: "LogIn to Explore",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "LogIn Now!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/login")
                    }
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setPassErr(errorCode,errorMessage)
        toast.error(`Resgistration Failed due to ${passErr}`)


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
        <div className="bg-[url('/network.jpg')] bg-cover bg-center">
   <Helmet>
                 <title>LifeStyle Circuit || Register</title>
               </Helmet>
            <div className="hero  min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 w-10/12 lg:w-11/12 mx-auto">
                    <div className="text-center lg:text-center lg:flex-1 ">
                        <Lottie animationData={regAnimation} className="w-full"></Lottie>
                    </div>
                    <div className="card w-full shadow-2xl lg:flex-1 text-white  pb-5">
                        <form className="card-body p-2 relative" onSubmit={handleRegister}>
                            <h1 className="text-center font-extrabold text-xl py-3 bg-[#00bba6] text-gray-700 rounded-xl">Sign Up</h1>
                           <div className="grid grid-cols-1  gap-3">
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email :</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-gray-700" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name :</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered text-gray-700" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password :</span>
                                </label>
                                <input type={visible ? "text" : "password"} name="password" placeholder="password" className="input input-bordered text-gray-700" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL :</span>
                                </label>
                                <input type="url" name="photo" placeholder="Your Photo Url" className="input input-bordered text-gray-700" required />
                            </div>
                           
                           </div>
                           <p className="text-red-500 font-bold text-center">{passErr}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Register</button>
                            </div>
                        </form>

                        <button className="absolute right-4 top-72 py-5" onClick={() => setVisible(!visible)}>
                                {visible ? <IoMdEyeOff className="text-2xl text-gray-400"></IoMdEyeOff> : <IoEye className="text-gray-400 text-2xl"></IoEye>}
                            </button>

                        <h1 className="font-bold text-center text-white my-5">----  OR  ----</h1>

                        <button className="btn btn-accent " onClick={useGmail}>
                            <FcGoogle></FcGoogle>
                            Login with Google</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;