import './style.scss';
import './index.html';
import { displayMatches, displayWeather } from './App/dom';
import { data } from './App/data';

const searchInt = document.querySelector('#search-location');
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  displayWeather(searchInt.value);
  searchForm.reset();
})

searchInt.addEventListener('change', displayMatches);
searchInt.addEventListener('keyup', displayMatches);


