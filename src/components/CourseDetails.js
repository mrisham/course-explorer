import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CourseDetails = () => {
  const { id } = useParams();
  const courseData = useSelector((state) => state.course.data);
  const selectedCourse = courseData.find((course) => course.id === id);

  if (!selectedCourse) {
    return (
      <Container>
        <Typography variant="h6">Course not found!</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{selectedCourse.name}</Typography>
      <Typography variant="subtitle1">
        Instructor: {selectedCourse.instructor}
      </Typography>
      <Typography variant="body1">
        Description: {selectedCourse.description}
      </Typography>
      <Typography variant="body1">
        Enrollment Status: {selectedCourse.enrollmentStatus}
      </Typography>
      <Typography variant="body1">
        Duration: {selectedCourse.duration}
      </Typography>
      <Typography variant="body1">
        Schedule: {selectedCourse.schedule}
      </Typography>
      <Typography variant="body1">
        Location: {selectedCourse.location}
      </Typography>
      <Typography variant="body1">
        Pre-requisites: {selectedCourse.prerequisites.join(", ")}
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ mt: 3 }}>
          Course Curriculum
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {selectedCourse.syllabus.map((item) => (
              <li key={item.week}>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default CourseDetails;
