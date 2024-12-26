import { GoBell } from "react-icons/go";
import { toast } from "react-toastify";

const Subscribe = () => {
const subscriberHandler=(e)=>{
e.preventDefault();
toast.success("Thanks for being with us!")
}

    return (
        <div className="flex flex-col py-10  md:flex-row justify-between items-center gap-3 p-4 border-2 w-11/12 lg:w-10/12 mx-auto rounded-3xl bg-gray-600 ">
            <div className="md:w-1/2 flex gap-10 items-center mb-auto">
                <GoBell className="text-7xl text-gray-800"></GoBell>
                <h2 className="font-semibold text-gray-800">Subscribe to our email now and never miss our best coupons available!</h2>
            </div>

            <form className="form-control w-11/12 md:w-1/2 " onSubmit={subscriberHandler}>
                <div className="grid grid-cols-5  gap-4">
                    <input className="input input-bordered col-span-3" placeholder="Enter your Email" required />

                    <div className="form-control col-span-2">
                    <button className="btn rounded-xl btn-outline " >Subscribe</button>
                    </div>
                    
                </div>
                <label className="label">
                    <p className="label-text-alt">By clicking to the Subscribe button, I agree to the <span className="text-red-500">Terms and Policy</span> of LifeStyle Circuit Website.</p>
                </label>
            </form>
        </div>
    );
};

export default Subscribe;