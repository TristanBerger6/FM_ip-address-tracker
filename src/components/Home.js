import './Home.scss';
import Form from './Form/Form';
import Infos from './Infos/Infos';
import Map from './Map/Map';
import * as cst from '../utils/constants';
import { useEffect, useState } from 'react';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [enteredValue, setEnteredValue] = useState('');
  const [data, setData] = useState(cst.defaultData);
  const [searchWith, setSearchWith] = useState('ipAddress');

  useEffect(() => {
    setData(cst.defaultData); // Loading
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${cst.API_KEY}&${searchWith}=${enteredValue}`;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (res.status === cst.VALID) {
          const data = await res.json();
          setData(data);
        } else {
          setData(cst.errorData);
          alert('Unable to get IP details');
        }
      } catch (error) {
        alert('Request failed');
      }
    };
    fetchData();
  }, [enteredValue]);

  const handleChange = (newValue) => {
    setInputValue(newValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.match(/[a-zA-Z]/g)) {
      setSearchWith('domain');
    } else {
      setSearchWith('ipAddress');
    }
    setEnteredValue(inputValue);
  };

  return (
    <div className="home">
      <div className="home__text flex">
        <h1 className="text-white fs-700 fw-500">IP Address Tracker</h1>
        <Form
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={inputValue}
        />
        <Infos data={data} />
      </div>
      <Map data={data} />
    </div>
  );
}

export default Home;
