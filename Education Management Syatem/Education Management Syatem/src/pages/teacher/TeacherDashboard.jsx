import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import ManageAssignments from './ManageAssignments.jsx';
import TrackStudentProgress from './TrackStudentProgress.jsx';

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <Navbar />
      <Sidebar />
      <div className="content">
        <ManageAssignments />
        <TrackStudentProgress />
      </div>
    </div>
  );
};

export default TeacherDashboard;
