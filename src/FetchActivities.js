import { useEffect, useState } from "react";
import fetch from "node-fetch";

export default function FetchActivities(limit) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(`https://happy-haddocks.herokuapp.com/activities?limit=${limit}`)
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((error) => console.error(error));
  }, []);

  return apiData;
}

export function FetchCategories() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://happy-haddocks.herokuapp.com/categories")
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((error) => console.error(error));
  }, []);

  return apiData;
}

export function SearchActivities(query) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(
      `https://happy-haddocks.herokuapp.com/search?cost=${query.cost}&categories=${query.category}&accessibility=${query.accessibility}`
    )
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((error) => console.error(error));
  }, []);

  return apiData;
}
