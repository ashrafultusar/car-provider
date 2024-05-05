import { Children, useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({Children}) => {

    const { user ,loading} = useContext(AuthContext);

    if (loading) {
    return <span className="loading loading-bars loading-lg"></span>

}

    if (user?.email) {
    return Children
}


    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;