import SubHeader from "../base/header/SubHeader";
import {Outlet} from "react-router-dom";

const SubLayout = () => {
    return (
        <>
            <SubHeader/>
            <Outlet/>
       </>
    );
};

export default SubLayout;