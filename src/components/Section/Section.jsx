import PropTypes from 'prop-types';

import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <p className={s.feedback__title}>{title}</p>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
