import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options = {}, onLeaveFeedback = {} }) => {
  return (
    <div className={css.buttonsWrap}>
      {options.map((option, index) => {
        return (
          <button key={index} className={css.buttons} onClick={onLeaveFeedback}>
            {firstLetterToUpperCase(option)}
          </button>
        );
      })}
    </div>
  );
};

function firstLetterToUpperCase(word) {
  const arrOfLetters = word.split('');
  arrOfLetters[0] = arrOfLetters[0].toUpperCase();
  return arrOfLetters.join('');
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
