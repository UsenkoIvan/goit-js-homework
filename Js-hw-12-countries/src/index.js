import './styles.css';
import countryTemplate from './template/countryTemplates.hbs';
import refs from './js/refs';
import fetchCountry from './API/fetchCountries';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
// import { debounce } from 'lodash';
const deBounce = require('lodash.debounce');

refs.input.addEventListener('input', deBounce(inputCountryHandler, 500));

function inputCountryHandler(evt) {
  const inputValue = evt.target.value;

  fetchCountry
    .fetchCountries(inputValue)
    .then(country => {
      // console.log(country);
      const markup = country[0];
      if (country.length >= 10) {
        moreCountryHandler();
      } else if (country.length > 1) {
        createListCountry(country);
      } else {
        refs.countryInfo.insertAdjacentHTML(
          'beforeend',
          createTemplateToHTML(markup),
        );
      }
    })
    .catch(error => console.error(error));
}

function moreCountryHandler(items) {
  clearHTML();
  PNotify.alert({
    text: 'Too many matches found. Please enter a more specific query!',
    type: 'notice',
  });
}

function createListCountry(drowListItems) {
  clearHTML();
  const markup = drowListItems
    .map(({ name }) => {
      return `<li class="list_item">${name}</li>`;
    })
    .join(' ');

  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

function createTemplateToHTML(items) {
  clearHTML();
  return countryTemplate(items);
}

function clearHTML() {
  refs.countryList.innerHTML = ' ';
  refs.countryInfo.innerHTML = ' ';
}
