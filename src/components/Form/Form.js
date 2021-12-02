import arrow from '../../images/icon-arrow.svg';
import './Form.scss';
import PropTypes from 'prop-types';

function Form(props) {
  const handleChange = (e) => {
    props.onChange(e.target.value);
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label className="sr-only" for="ipAddress-Domain">
        Search for any IP adress or domain
      </label>
      <input
        id="ipAddress-Domain"
        onChange={handleChange}
        value={props.value}
        type="text"
        placeholder="Search for any IP adress or domain"
      />
      <button type="submit">
        <img src={arrow} alt="arrow icon" />
      </button>
    </form>
  );
}

Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};

export default Form;
