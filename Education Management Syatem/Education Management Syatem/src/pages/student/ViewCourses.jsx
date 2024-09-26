import React from 'react';
import useCourses from '../../hooks/useCourses.jsx'; // Correctly import useCourses as a default import

const ViewCourses = () => {
  const { courses } = useCourses(); // Use the hook

  return (
    <div>
      {/* Render the list of courses */}
      {courses.map(course => (
        <div key={course.id}>{course.name}</div> // Example rendering
      ))}
    </div>
  );
};

export default ViewCourses; // Export the component
