import {Route, Routes} from "react-router-dom";
import BoardListPage from "./pages/BoardListPage";
import AuthRoutes from "./routes/AuthRoutes";
import WritePage from "./pages/WritePage";
import BoardPage from "./pages/BoardPage";
import AdminPage from "./pages/AdminPage";
import MyPageRoutes from "./routes/MyPageRoutes";
import NotFound from "./components/base/NotFound";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<BoardListPage/>}/>
            <Route path="/auth/*" element={<AuthRoutes/>}/>
            <Route path="/write" element={<WritePage/>}/>
            <Route path="/boards/:boardId" element={<BoardPage/>}/>
            <Route path="/mypage/*" element={<MyPageRoutes/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
};

export default App;