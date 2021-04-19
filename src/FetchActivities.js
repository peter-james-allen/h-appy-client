import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

export default function FetchActivities() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('https://happy-haddocks.herokuapp.com/activities')
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((error) => console.error(error));
  }, []);

  return apiData;
}
