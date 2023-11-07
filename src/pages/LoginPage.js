import LoginForm from "../containers/auth/LoginForm";
import UnProtectedRoute from "../routes/UnProtectedRoute";

const LoginPage = () => {
    return (
        <UnProtectedRoute>
            <LoginForm/>
        </UnProtectedRoute>
    );
};

export default LoginPage;