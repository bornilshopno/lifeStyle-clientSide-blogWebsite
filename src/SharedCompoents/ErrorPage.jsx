import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-gray-600 min-h-screen flex items-center flex-col justify-center space-y-10">
            <h1 className="font-semibold text-center max-w-sm"><span className="text-5xl">Oppppppps!!!</span><br></br><br />
                <span className="text-xl font-thin">Sorry, we couldnot find the page you are looking for!
                    Check the URL again or click below to redirect to ChillGamer Homepage. </span></h1>

            <Link to={"/"}><button className="btn w-52 mx-auto btn-secondary">ChillGamer Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;