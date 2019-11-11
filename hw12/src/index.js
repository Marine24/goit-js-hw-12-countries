import './styles.css';
import fetch from './js/fetch';
import template from './template.hbs';
import setPNotifySettings from './js/PNotify';
import setPNotifySettings1 from './js/PNotify2';
import { debounce } from 'lodash';

const countryListContainer = document.querySelector('.country-list');
const searchInput = document.querySelector('.search__input');
const searchForm = document.querySelector('.search');
const allCountriesList = document.querySelector('.countries-list');

const renderCountry = countries => {
  const markup = countries.map(country => template(country)).join('');
  countryListContainer.innerHTML = markup;
};
const renderCountries = countries => {
  const markup = countries
    .map(({ name }) => `<li class="country-title">${name}</li>`)
    .join('');
  allCountriesList.innerHTML = markup;
};
searchForm.addEventListener('keydown', function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});
searchInput.addEventListener(
  'input',
  debounce(e => {
    const searchValue = searchInput.value;
    fetch
      .search(searchValue)
      .then(result => {
        if (result.length > 10) {
          setPNotifySettings();
        } else if (result.length > 1 && result.length < 10) {
          renderCountries(result);
        } else {
          renderCountry(result);
        }
      })
      .catch(error => {
        setPNotifySettings1();
      });
  }, 500),
);
