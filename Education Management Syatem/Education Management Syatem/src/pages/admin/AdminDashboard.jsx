import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import ManageCourses from './ManageCourses.jsx';
import ManageUsers from './ManageUsers.jsx';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Navbar />
      <Sidebar />
      <div className="content">
        <ManageCourses />
        <ManageUsers />
      </div>
    </div>
  );
};

export default AdminDashboard;
