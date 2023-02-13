import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   console.log(options);
  return options.map(option => (
    <button
      key={option}
      type="button"
      data-name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
