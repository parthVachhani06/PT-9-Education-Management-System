import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const TeacherRoute = ({ children }) => {
  const { authState } = useAuth();
  return authState && authState.role === 'teacher' ? children : <Navigate to="/login" />;
};

export default TeacherRoute;
