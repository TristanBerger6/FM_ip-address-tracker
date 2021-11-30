import React from 'react';
import PropTypes from 'prop-types';
import './Infos.scss';

function Infos(props) {
  return (
    <div className="infos grid">
      <div className="infos__item">
        <span>IP address</span>
        <p>{props.data.ip}</p>
      </div>
      <div className="infos__item">
        <span>Location</span>
        <p>
          {props.data.location.city}, {props.data.location.country}{' '}
          {props.data.location.postalCode}
        </p>
      </div>
      <div className="infos__item">
        <span>Timezone</span>
        <p>UTC {props.data.location.timezone}</p>
      </div>
      <div className="infos__item">
        <span>ISP</span>
        <p>{props.data.isp}</p>
      </div>
    </div>
  );
}

Infos.propTypes = {
  data: PropTypes.object,
};

export default Infos;
