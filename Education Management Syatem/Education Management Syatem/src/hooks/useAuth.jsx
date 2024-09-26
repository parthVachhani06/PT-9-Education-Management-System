import { useAuthContext } from '../context/AuthContext'; // Make sure the import is correct


// Define the useAuth hook
const useAuth = () => {
  const { authState, setAuthState } = useAuthContext(); // Access the context values

  const login = (username, password) => {
    // Example login function
    // Replace this with actual login logic
    setAuthState({ username });
  };

  const logout = () => {
    // Example logout function
    setAuthState(null); // Reset auth state
  };

  return { authState, login, logout }; // Return the auth state, login, and logout functions
};

// Export the useAuth hook as a default export
export default useAuth;



