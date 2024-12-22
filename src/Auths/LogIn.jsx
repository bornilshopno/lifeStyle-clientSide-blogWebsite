import { FcGoogle } from "react-icons/fc";
import regSignIn from "../assets/LogInAnimation.json"
import Lottie from "lottie-react";
import useAuth from "../SharedCompoents/useAuth";


const LogIn = () => {
const {loginUser, setLoading, setUser} = useAuth()
    const handleSignIn=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        loginUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const loggedinUser = userCredential.user;
            setUser(loggedinUser);
            setLoading(false)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
 
    }
    return (
        <div>
               
        <div className="hero bg-base-200 min-h-screen ">
        
            <div className="hero-content flex-col lg:flex-row lg:gap-20">
                <div className="text-center lg:text-center lg:flex-1">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                   <Lottie animationData={regSignIn} className=""></Lottie>
                </div>
                <div className="card bg-base-100 shadow-2xl lg:flex-1">
                    <form className="card-body " onSubmit={handleSignIn}>
                    <h1 className="text-center text-xl py-3 my-3 bg-gray-200">Sign Up for LifeStyle CirCuit</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
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

export default LogIn;