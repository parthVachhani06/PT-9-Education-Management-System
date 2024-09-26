import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const StudentRoute = ({ children }) => {
  const { authState } = useAuth();
  return authState && authState.role === 'student' ? children : <Navigate to="/login" />;
};

export default StudentRoute;
