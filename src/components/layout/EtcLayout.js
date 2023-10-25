import EtcHeader from "../base/EtcHeader";
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