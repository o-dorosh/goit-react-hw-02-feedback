// import PropTypes from 'prop-types';

import s from '../App/App.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <ul className={s.feedback__btns__area}>
            {options.map(option => {
                return <button className={s.feedback__btn} key={option} name = {option} type="button" onClick={onLeaveFeedback}>{option}</button>
            })}
        </ul>
    );
  };
  
  export default FeedbackOptions;