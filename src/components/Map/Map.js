import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Map.scss';
import L from 'leaflet';
import * as cst from '../../utils/constants';

function Map(props) {
  const [map, setMap] = useState('');
  const [marker, setMarker] = useState('');

  useEffect(() => {
    setMap(
      L.map('map', {
        center: [47, 4],
        zoom: 4,
        layers: [
          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }),
        ],
      })
    );
  }, []);

  useEffect(() => {
    if (props.data.location.lat !== cst.errorData.location.lat) {
      if (marker !== '') {
        map.removeLayer(marker);
      }
      map.setView([props.data.location.lat, props.data.location.lng], 7);
      setMarker(
        L.marker([props.data.location.lat, props.data.location.lng]).addTo(map)
      );
    }
  }, [props.data]);

  return <div id="map"></div>;
}

Map.propTypes = {
  data: PropTypes.object,
};

export default Map;
