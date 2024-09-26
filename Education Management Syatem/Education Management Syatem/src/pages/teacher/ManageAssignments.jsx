import React from 'react';
import useCourses from '../../hooks/useCourses.jsx'; // Import useCourses as a default import

const ManageAssignments = () => {
  const { courses } = useCourses(); // Use the hook

  return (
    <div>
      {/* Render your component logic using courses */}
      {courses.map(course => (
        <div key={course.id}>{course.name}</div> // Example rendering
      ))}
    </div>
  );
};

export default ManageAssignments; // Export the component
