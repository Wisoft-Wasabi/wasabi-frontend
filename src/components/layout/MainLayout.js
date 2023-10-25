import {Outlet} from "react-router-dom";
import SearchContainer from "../../containers/search/SearchContainer";

const MainLayout = () => {
    return (
        <>
            <SearchContainer/>
            <Outlet/>
        </>
    );
};

export default MainLayout;