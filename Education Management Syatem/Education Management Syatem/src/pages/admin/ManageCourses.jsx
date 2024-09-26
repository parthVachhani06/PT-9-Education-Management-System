import React from 'react';
import Table from '../../components/Table.jsx';

const ManageCourses = () => {
  const columns = ['Title', 'Description', 'Start Date', 'End Date', 'Assigned Teacher'];
  const data = [
    { Title: 'Math 101', Description: 'Basic Mathematics', 'Start Date': '2024-09-01', 'End Date': '2025-06-30', 'Assigned Teacher': 'Mr. Smith' },
  ];

  return (
    <div className="manage-courses">
      <h2>Manage Courses</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ManageCourses;
