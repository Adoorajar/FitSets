import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import ExerciseLog from "../exercise-log/ExerciseLog";

function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return (
    <Container>
      <ExerciseLog />
    </Container>
  );
}

export default Home;
