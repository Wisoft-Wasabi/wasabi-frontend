import {useAuthContext} from "../context/AuthContext";
import {Navigate} from "react-router-dom";

const UnProtectedRoute = ({children}) => {
    const member = useAuthContext();

    if (member) {
        return <Navigate to='/' replace />;
    }

    return children;
};

export default UnProtectedRoute;