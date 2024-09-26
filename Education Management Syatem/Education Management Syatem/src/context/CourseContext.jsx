import React, { createContext, useContext, useState } from 'react';

// Create the CourseContext
const CourseContext = createContext();

// Create a provider component
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]); // Example state management

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook to use the CourseContext
export const useCoursesContext = () => {
  return useContext(CourseContext);
};

// Default export of the context
export default CourseContext;
