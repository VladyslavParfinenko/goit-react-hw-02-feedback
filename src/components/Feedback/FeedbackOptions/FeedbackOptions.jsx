import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'



const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div className={css.container}>
        {options.map((option) => (
          <button key={option} className={css.button} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };





  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;