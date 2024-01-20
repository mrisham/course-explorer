// CourseModal.js
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const CourseModal = ({ isOpen, handleClose, course }) => {
  console.log("Course Modal Data:", course);

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5">{course.name}</Typography>
        <Typography variant="subtitle1">
          Instructor: {course.instructor}
        </Typography>
        <Typography variant="body1">
          Description: {course.description}
        </Typography>
        <Typography variant="body1">
          Enrollment Status: {course.enrollmentStatus}
        </Typography>
        <Typography variant="body1">Duration: {course.duration}</Typography>
        <Typography variant="body1">Schedule: {course.schedule}</Typography>
        <Typography variant="body1">Location: {course.location}</Typography>
        <Typography variant="body1">
          Pre-requisites: {course.prerequisites.join(", ")}
        </Typography>

        <Accordion>
          <AccordionSummary>Expand Syllabus</AccordionSummary>
          <AccordionDetails>
            <ul>
              {course.syllabus.map((item) => (
                <li key={item.week}>
                  <strong>Week {item.week}:</strong> {item.topic} -{" "}
                  {item.content}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>

        <Button onClick={handleClose} variant="contained" color="primary">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CourseModal;
