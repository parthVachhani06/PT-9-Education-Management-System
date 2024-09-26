import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import TeacherDashboard from './pages/teacher/TeacherDashboard.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import Auth from './pages/Auth.jsx';
import AdminRoute from './routes/AdminRoute.jsx';
import TeacherRoute from './routes/TeacherRoute.jsx';
import StudentRoute from './routes/StudentRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx'; // Import AuthProvider from context
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/admin" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
          <Route path="/teacher" element={
            <TeacherRoute>
              <TeacherDashboard />
            </TeacherRoute>
          } />
          <Route path="/student" element={
            <StudentRoute>
              <StudentDashboard />
            </StudentRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App; // Export the App component
