import { useEffect, useState } from "react";

import countriesService from "./services/countries.service";
import { CountryDetail } from "./components/CountryDetail";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countriesService.getAllCountries().then((data) => {
      setAllCountries(data);
    });
  }, []);

  const filterCountries = (e) => {
    const value = e.target.value;
    const filteredCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setShownCountries(filteredCountries);
    setSelectedCountry(null);
  };

  const handleShowDetail = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Data countries</h1>

      <div>
        <span>Find countries </span>
        <input type="text" onChange={filterCountries} />

        {shownCountries.length >= 2 && shownCountries.length < 10 && (
          <ul>
            {shownCountries.map((country) => (
              <li key={country.name.common}>
                {country.name.common}
                <button onClick={() => handleShowDetail(country)}>Show</button>
              </li>
            ))}
          </ul>
        )}

        {selectedCountry && (
          <CountryDetail shownCountries={[selectedCountry]} />
        )}

        {shownCountries.length === 1 && (
          <CountryDetail shownCountries={shownCountries} />
        )}
      </div>
    </div>
  );
};

export default App;
