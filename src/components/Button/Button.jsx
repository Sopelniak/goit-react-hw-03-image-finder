import PropTypes from 'prop-types';
import './Button.scss';

export const Button = props => {
  return (
    <button className="Button" type="button" onClick={props.onBtnClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
