import React from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/material";
import ExerciseLogEntryDisplay from "./ExerciseLogEntryDisplay";

const ExerciseLog = (props) => {
  return (
    <Container>
      <ExerciseLogEntryDisplay />
      Exercise Log
    </Container>
  );
};

ExerciseLog.propTypes = {};

export default ExerciseLog;
