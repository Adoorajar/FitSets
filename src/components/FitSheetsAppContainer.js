import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './navigation/NavBar';
import DayPicker from './navigation/DayPicker';
import ExerciseLog from './exercise-log/ExerciseLog';

const FitSheetsAppContainer = (props) => {
  return (
    <div>
      <NavBar />
      <DayPicker />
      <ExerciseLog />
    </div>
  );
};

FitSheetsAppContainer.propTypes = {};

export default FitSheetsAppContainer;
