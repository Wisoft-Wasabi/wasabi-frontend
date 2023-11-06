import AuthHeader from "../base/header/AuthHeader";
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            <AuthHeader/>
            <Outlet/>
        </>
    );
};

export default AuthLayout;