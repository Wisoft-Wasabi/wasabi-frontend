import {Route, Routes} from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import AuthRoutes from "./routes/AuthRoutes";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";
import AdminPage from "./pages/AdminPage";
import MyPageRoutes from "./routes/MyPageRoutes";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PostListPage/>}/>
            <Route path="/auth/*" element={<AuthRoutes/>}/>
            <Route path="/write" element={<WritePage/>}/>
            <Route path="/post" element={<PostPage/>}/>
            <Route path="/mypage/*" element={<MyPageRoutes/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
    )
};

export default App;