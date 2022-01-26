import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ExerciseLogEntryRow from "./ExerciseLogEntryRow";
import { v4 as uuidv4 } from "uuid";

function createData(weight, reps, time) {
  return { weight, reps, time };
}

const rows = [
  createData(0, 10, "10:30am"),
  createData(0, 8, "10:35am"),
  createData(0, 12, "10:40am"),
  createData(1, 2, "11:30am"),
];

const ExerciseLogEntryTable = (props) => {
  return (
    <TableContainer>
      <Container>
        <h2>Pullups</h2>
      </Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Weight</TableCell>
            <TableCell>Reps</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <ExerciseLogEntryRow
              key={uuidv4()}
              weight={row.weight}
              reps={row.reps}
              time={row.time}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ExerciseLogEntryTable.propTypes = {};

export default ExerciseLogEntryTable;
