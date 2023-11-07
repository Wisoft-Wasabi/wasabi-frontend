import MyLikeListContainer from "../containers/mypage/MyLikeListContainer";
import ProtectedRoute from "../routes/ProtectedRoute";

const MyLikePage = () => {
    return (
        <ProtectedRoute>
            <MyLikeListContainer/>
        </ProtectedRoute>
    );
};

export default MyLikePage;