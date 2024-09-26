import React from 'react';
import Form from '../../components/Form.jsx';
import Table from '../../components/Table.jsx';

const ManageCourses = () => {
  const columns = ['Title', 'Description', 'Start Date', 'End Date', 'Assigned Teacher'];
  const data = [
    { Title: 'Math 101', Description: 'Basic Mathematics', 'Start Date': '2024-09-01', 'End Date': '2025-06-30', 'Assigned Teacher': 'Mr. Smith' },
  ];

  // Define form fields
  const fields = [
    { name: 'title', label: 'Course Title', type: 'text', placeholder: 'Enter course title', required: true },
    { name: 'description', label: 'Course Description', type: 'text', placeholder: 'Enter course description', required: true },
    { name: 'startDate', label: 'Start Date', type: 'date', required: true },
    { name: 'endDate', label: 'End Date', type: 'date', required: true },
    { name: 'teacher', label: 'Assigned Teacher', type: 'text', placeholder: 'Enter teacher name', required: true },
  ];

  // Handle form submission
  const handleSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    // Perform API call or update state with new course data
  };

  return (
    <div className="manage-courses">
      <h2>Manage Courses</h2>
      <Form fields={fields} onSubmit={handleSubmit} />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ManageCourses;
