import Lottie from "lottie-react";
import regAnimation from "../assets/RegisterAnimation.json"
import { FcGoogle } from "react-icons/fc";
import useAuth from "../SharedCompoents/useAuth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Register = () => {

    const { setLoading, createUser, user, setUser, auth, googleSignIn, userSignOut } = useAuth()
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;

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
                console.log(errorCode, errorMessage)
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


    console.log(user)
    return (
        <div className="bg-[url('/network.jpg')] bg-cover bg-center">

            <div className="hero  min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 w-11/12 md:w-10/12 mx-auto">
                    <div className="text-center lg:text-center lg:flex-1 ">
                        <Lottie animationData={regAnimation} className="w-full"></Lottie>
                    </div>
                    <div className="card w-full shadow-2xl lg:flex-1 text-white  pb-5">
                        <form className="card-body p-0" onSubmit={handleRegister}>
                            <h1 className="text-center font-extrabold text-4xl pb-3">Sign Up</h1>
                           <div className="grid grid-cols-1  gap-3">
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email :</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name :</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL :</span>
                                </label>
                                <input type="url" name="photo" placeholder="Your Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password :</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                           </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        <h1 className="font-bold text-center text-white my-5">----  OR  ----</h1>

                        <button className="btn btn-primary " onClick={useGmail}>
                            <FcGoogle></FcGoogle>
                            Login with Google</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;