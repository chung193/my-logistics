import { Navigate } from 'react-router-dom';
import { useAuth } from '@providers/authProvider';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return element;
};

export default PrivateRoute;
