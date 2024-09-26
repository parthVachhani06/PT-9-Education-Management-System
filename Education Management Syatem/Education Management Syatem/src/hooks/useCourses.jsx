import { useCoursesContext } from '../context/CourseContext'; // Import the context hook

// Define the useCourses hook
const useCourses = () => {
  const { courses, setCourses } = useCoursesContext(); // Use the context hook
  return { courses, setCourses }; // Return the state and setter function
};

// Export the useCourses hook as a default export
export default useCourses; // Ensure this is the default export
