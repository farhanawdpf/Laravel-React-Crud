import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, roles = [] }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (roles.length && !roles.includes(role)) {
    // unauthorized for this role
    return <Navigate to="/login" replace />;
  }
  return children;
}
