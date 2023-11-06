import EtcHeader from "../base/header/EtcHeader";
import {Outlet} from "react-router-dom";

const EtcLayout = () => {
    return (
        <>
            <EtcHeader/>
            <Outlet/>
        </>
    );
};

export default EtcLayout;