import axios from "axios";

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => {
  const request = axios.get(`${BASE_URL}/all`);
  return request.then((response) => response.data);
};

const getCountry = (name) => {
  const request = axios.get(`${BASE_URL}/name/${name}`);
  return request.then((response) => response.data);
};

export default { getAllCountries, getCountry };
