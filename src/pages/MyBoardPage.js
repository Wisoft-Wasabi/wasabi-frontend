import MyBoardListContainer from "../containers/mypage/MyBoardListContainer";
import ProtectedRoute from "../routes/ProtectedRoute";

const MyBoardPage = () => {
    return (
        <ProtectedRoute>
            <MyBoardListContainer/>
        </ProtectedRoute>
    );
};

export default MyBoardPage;