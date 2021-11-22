import './style.scss';
import './index.html';
import { displayMatches, displayWeather, displayWeatherByNav } from './App/dom';
const geolocationOn = document.querySelector('#geo-location');

geolocationOn.addEventListener('click', () => {
  let long;
  let lat;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      displayWeatherByNav(lat, long);
    });
  } else {
    
  };

})

const searchInt = document.querySelector('#search-location');
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  displayWeather(searchInt.value);
  document.querySelector('.suggestions').innerHTML = " ";
  searchForm.reset();
})

searchInt.addEventListener('change', displayMatches);
searchInt.addEventListener('keyup', displayMatches);


