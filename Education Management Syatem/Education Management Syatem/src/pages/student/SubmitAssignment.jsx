import React from 'react';
import useCourses from '../../hooks/useCourses'; // Correctly import useCourses as a default import

const SubmitAssignment = () => {
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

export default SubmitAssignment; // Export the component
