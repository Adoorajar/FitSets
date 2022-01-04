import React from "react";
import PropTypes from "prop-types";
import { Card } from "@mui/material";
import ExerciseLogEntryTable from "./ExerciseLogEntryTable";

const ExerciseTrackerDisplay = (props) => {
  return (
    <Card>
      <ExerciseLogEntryTable />
    </Card>
  );
};

ExerciseTrackerDisplay.propTypes = {};

export default ExerciseTrackerDisplay;
