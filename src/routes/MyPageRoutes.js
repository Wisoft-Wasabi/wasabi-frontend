import ProfilePage from "../pages/ProfilePage";
import MyLikePage from "../pages/MyLikePage";
import {Route, Routes} from "react-router-dom";
import MyBoardPage from "../pages/MyBoardPage";

const MyPageRoutes = () => {
    return (
        <Routes>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="likes" element={<MyLikePage/>}/>
            <Route path="boards" element={<MyBoardPage/>}/>
        </Routes>
    );
};

export default MyPageRoutes;