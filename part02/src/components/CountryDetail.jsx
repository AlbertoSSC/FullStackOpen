import { WeatherConditions } from "./Weather";

export const CountryDetail = ({ shownCountries }) => {
  return (
    <div>
      <p>Name: {shownCountries[0].name.common}</p>
      <p>Oficial name: {shownCountries[0].name.official}</p>
      <p>Capital: {shownCountries[0].capital}</p>
      <p>
        Area: {shownCountries[0].area} km<sup>2</sup>
      </p>
      <img
        style={{ maxWidth: "300px" }}
        src={shownCountries[0].flags.svg}
        alt={shownCountries[0].flags.alt}
      />
      <p>Population: {shownCountries[0].population}</p>
      {!shownCountries[0].borders ? (
        <p>No borders</p>
      ) : (
        <p>Borders: {shownCountries[0].borders.toString()}</p>
      )}

      <WeatherConditions city={shownCountries[0].capital[0]} />
    </div>
  );
};
