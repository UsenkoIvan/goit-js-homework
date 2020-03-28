const baseURL = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchCountries(country) {
    return fetch(baseURL + country)
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
  },
};
