// import PropTypes from 'prop-types';

import s from '../App/App.module.css';

const Section = ({title, children}) => {
    return(
        <div>
            <p className={s.feedback__title}>{title}</p>
            {children}
        </div>
    );
  };
  
  export default Section;