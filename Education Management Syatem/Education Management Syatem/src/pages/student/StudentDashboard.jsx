import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import ViewCourses from './ViewCourses.jsx';
import SubmitAssignment from './SubmitAssignment.jsx';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <Navbar />
      <Sidebar />
      <div className="content">
        <ViewCourses />
        <SubmitAssignment />
      </div>
    </div>
  );
};

export default StudentDashboard;
