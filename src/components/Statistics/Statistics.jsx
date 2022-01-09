import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return(
        <ul className={s.statistic__area}>
            <li className={s.statistic__option}>Good: <span>{good}</span></li>
            <li className={s.statistic__option}>Neutral: <span>{neutral}</span></li>
            <li className={s.statistic__option}>Bad: <span>{bad}</span></li>
            <li className={s.statistic__option}>Total: <span>{total}</span></li>
            <li className={s.statistic__option}>Positive Feedback: <span>{positivePercentage}%</span></li>
        </ul>
  );
};

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistics;