import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null); // Initialize auth state

  const login = (username, password) => {
    // Implement your login logic here
    if (username === 'admin' && password === 'admin') {
      setAuthState({ username, role: 'admin' });
    } else if (username === 'teacher' && password === 'teacher') {
      setAuthState({ username, role: 'teacher' });
    } else if (username === 'student' && password === 'student') {
      setAuthState({ username, role: 'student' });
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setAuthState(null); // Clear auth state on logout
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Default export of AuthContext
export default AuthContext;
    