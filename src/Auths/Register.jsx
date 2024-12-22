import Lottie from "lottie-react";
import regAnimation from "../assets/RegisterAnimation.json"
import { FcGoogle } from "react-icons/fc";
import useAuth from "../SharedCompoents/useAuth";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { setLoading, createUser, user, setUser, auth } = useAuth()

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
                updateProfile(auth.currentUser, { photoURL: photo ,  displayName: name })
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        console.log(error)
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }
    console.log(user)
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
                    <div className="text-center lg:text-center lg:flex-1">
                        {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                        <Lottie animationData={regAnimation} className=""></Lottie>
                    </div>
                    <div className="card bg-base-100 shadow-2xl lg:flex-1">
                        <form className="card-body" onSubmit={handleRegister}>
                            <h1 className="text-center text-xl py-3 my-3 bg-gray-200">Sign Up for LifeStyle CirCuit</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="Your Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className="divider"> <h1>or</h1></div>

                        <button className="btn btn-primary">
                            <FcGoogle></FcGoogle>
                            Login with Google</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;