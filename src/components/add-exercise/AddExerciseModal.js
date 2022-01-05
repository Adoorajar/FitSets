import React, { useState } from "react";
import PropTypes from "prop-types";
import AddExerciseButton from "../navigation/AddExerciseButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const AddExerciseModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddExerciseButton onClick={handleOpen} />
    </div>
  );
};

AddExerciseModal.propTypes = {};

export default AddExerciseModal;
