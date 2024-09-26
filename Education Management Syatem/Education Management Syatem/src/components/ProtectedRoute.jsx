import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
