import React from "react";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const ExerciseLogEntryRow = ({ weight, reps, time }) => {
  return (
    <TableRow>
      <TableCell>{weight}</TableCell>
      <TableCell>{reps}</TableCell>
      <TableCell>{time}</TableCell>
    </TableRow>
  );
};

ExerciseLogEntryRow.propTypes = {};

export default ExerciseLogEntryRow;
