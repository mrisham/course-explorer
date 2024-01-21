// StudentDashboard.js
import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import CardInfo from "./CardInfo";

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) =>
    state.course.data.filter((course) => course.enrolled === "true")
  );

  return (
    <Container>
      <h2>Your Enrolled Courses</h2>
      {enrolledCourses.map((course) => (
        <CardInfo key={course.id} course={course} />
      ))}
    </Container>
  );
};

export default StudentDashboard;
