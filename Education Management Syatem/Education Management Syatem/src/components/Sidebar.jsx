import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar bg-gray-200 w-60 h-full p-4">
      <ul>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/teacher">Teacher Dashboard</Link></li>
        <li><Link to="/student">Student Dashboard</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
