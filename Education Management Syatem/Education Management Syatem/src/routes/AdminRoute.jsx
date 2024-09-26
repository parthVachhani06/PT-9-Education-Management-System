import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ensure this path is correct

const AdminRoute = ({ children }) => {
  const { authState } = useAuth();
  return authState && authState.role === 'admin' ? children : <Navigate to="/login" />;
};

export default AdminRoute;
