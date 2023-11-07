import MyProfileContainer from "../containers/mypage/MyProfileContainer";
import ProtectedRoute from "../routes/ProtectedRoute";

const MyProfilePage = () => {
    return (
        <ProtectedRoute>
            <MyProfileContainer/>
        </ProtectedRoute>
    );
};

export default MyProfilePage;