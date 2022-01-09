import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <ul className={s.feedback__btns__area}>
            {options.map(option => {
                return <button className={s.feedback__btn} key={option} name = {option} type="button" onClick={onLeaveFeedback}>{option}</button>
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;