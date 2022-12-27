import PropTypes from 'prop-types';
import {
  ControlList,
  ControlItem,
  ControlButton,
} from './FeedbackOption.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ControlList>
      {options.map(option => (
        <ControlItem key={option}>
          <ControlButton onClick={() => onLeaveFeedback(option)}>
            {option}
          </ControlButton>
        </ControlItem>
      ))}
    </ControlList>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
