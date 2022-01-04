import React from "react";
import PropTypes from "prop-types";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const AddExerciseButton = (props) => {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <AddIcon />
    </IconButton>
  );
};

AddExerciseButton.propTypes = {};

export default AddExerciseButton;
