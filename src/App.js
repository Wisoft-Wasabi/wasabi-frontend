import {Route, Routes} from "react-router-dom";
import BoardListPage from "./pages/BoardListPage";
import AuthRoutes from "./routes/AuthRoutes";
import WritePage from "./pages/WritePage";
import BoardPage from "./pages/BoardPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./components/base/NotFound";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/MainLayout";
import MyLikePage from "./pages/MyLikePage";
import MyBoardPage from "./pages/MyBoardPage";
import SubLayout from "./components/layout/SubLayout";
import MyProfilePage from "./pages/MyProfilePage";
import EtcLayout from "./components/layout/EtcLayout";
import {AuthContextProvider} from "./context/AuthContext";
import ErrorRoutes from "./routes/ErrorRoutes";

const App = () => {
    return (
        <AuthContextProvider>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<BoardListPage/>}/>
                    <Route path="/mypage/boards" element={<MyBoardPage/>}/>
                    <Route path="/mypage/likes" element={<MyLikePage/>}/>
                </Route>
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/*" element={<AuthRoutes/>}/>
                </Route>
                <Route element={<SubLayout/>}>
                    <Route path="/boards/:boardId" element={<BoardPage/>}/>
                    <Route path="/mypage/profile" element={<MyProfilePage/>}/>
                </Route>
                <Route element={<EtcLayout/>}>
                    <Route path="/write" element={<WritePage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
                <Route path='/error/*' element={<ErrorRoutes/>}/>
            </Routes>
        </AuthContextProvider>
    );
};

export default App;