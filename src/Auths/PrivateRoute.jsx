import { useContext } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return <div> {children} </div>
    }

    else return (<Navigate to={"/login"} state={location.pathname}></Navigate>

    )
};

export default PrivateRoute;