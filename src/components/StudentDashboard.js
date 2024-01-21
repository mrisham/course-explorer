import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import { setCourse } from "../utils/courseSlice";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) =>
    state.course.data.filter((course) => course.enrolled)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/notes");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const notesArray = data.notes;

        dispatch(setCourse(notesArray));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const [completedCourses, setCompletedCourses] = useState({});

  const handleMarkAsCompleted = (courseId) => {
    setCompletedCourses((prevCompletedCourses) => ({
      ...prevCompletedCourses,
      [courseId]: !prevCompletedCourses[courseId],
    }));
  };

  return (
    <Container>
      <h2>Your Enrolled Courses</h2>
      {enrolledCourses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>Instructor: {course.instructor}</p>
          <img
            src={course.thumbnail}
            alt={course.name}
            style={{ maxWidth: "100px" }}
          />
          <p>Due Date: {course.dueDate}</p>
          <LinearProgress
            variant="determinate"
            value={
              completedCourses[course.id] ? 100 : parseInt(course.progress, 10)
            }
          />
          <Button
            variant={completedCourses[course.id] ? "contained" : "outlined"}
            onClick={() => handleMarkAsCompleted(course.id)}
          >
            {completedCourses[course.id] ? "Completed" : "Mark as Completed"}
          </Button>
          <hr />
        </div>
      ))}
    </Container>
  );
};

export default StudentDashboard;
