import SubHeader from "../base/SubHeader";
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