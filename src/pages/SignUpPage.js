import SignUpForm from "../containers/auth/SignUpForm";
import UnProtectedRoute from "../routes/UnProtectedRoute";

const SignUpPage = () => {
    return (
        <UnProtectedRoute>
            <SignUpForm/>
        </UnProtectedRoute>
    );
};

export default SignUpPage;