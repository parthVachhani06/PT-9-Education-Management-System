import React from 'react';
import Table from '../../components/Table.jsx';

const ManageUsers = () => {
  const columns = ['Name', 'Role', 'Email'];
  const data = [
    { Name: 'John Doe', Role: 'Teacher', Email: 'john@example.com' },
  ];

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ManageUsers;
