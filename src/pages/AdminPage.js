import SignUpListDataContainer from "../containers/admin/SignUpListDataContainer";
import ProtectedRoute from "../routes/ProtectedRoute";

const AdminPage = () => {
    return (
        <ProtectedRoute>
            <SignUpListDataContainer/>
        </ProtectedRoute>
    );
};

export default AdminPage;