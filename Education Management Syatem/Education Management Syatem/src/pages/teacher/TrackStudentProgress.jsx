import React from 'react';
import useCourses from '../../hooks/useCourses.jsx'; // Correctly import useCourses

const TrackStudentProgress = () => {
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

export default TrackStudentProgress; // Export the component
