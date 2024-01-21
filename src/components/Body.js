import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourse } from "../utils/courseSlice";
import Container from "@mui/material/Container";
import CardInfo from "./CardInfo";
import SearchBar from "./SearchBar";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.course.data);
  const [filteredCourses, setFilteredCourses] = useState(courseData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/notes");
        const data = await response.json();
        const notesArray = data.notes;

        dispatch(setCourse(notesArray));
        setFilteredCourses(notesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleSearch = (searchQuery) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = courseData.filter(
      (course) =>
        course.name.toLowerCase().includes(lowerCaseQuery) ||
        course.instructor.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredCourses(filtered);
  };

  return (
    <Container>
      <Grid marginTop={3} marginLeft={2} xs={100}>
        <item>
          <SearchBar width="100%" onSearch={handleSearch} />
        </item>
      </Grid>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          "& > *": { marginY: 2 },
        }}
      >
        {filteredCourses.map((course) => (
          <Link
            to={`/course/${course.id}`}
            key={course.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardInfo course={course} />
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default Body;
