import ProfilePage from "../pages/ProfilePage";
import MyLikePage from "../pages/MyLikePage";
import {Route, Routes} from "react-router-dom";
import MyPostPage from "../pages/MyPostPage";

const MyPageRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="likes" element={<MyLikePage/>}/>
                <Route path="post" element={<MyPostPage/>}/>
            </Routes>
        </div>
    );
};

export default MyPageRoutes;