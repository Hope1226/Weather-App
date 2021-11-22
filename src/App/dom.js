import { cityNames, data, dataByNav } from './data';
const suggestions = document.querySelector('.suggestions');
const cityName = document.querySelector('.city-name');
const wIcon = document.querySelector('.country-name');
const tempC = document.querySelector('#temparature-c');
const tempF = document.querySelector('#temparature-F');
const weatherStatus = document.querySelector('.status');
const weatherIcon = document.querySelector('#weather-icon');

const findMatches = async (matchingWord) => {
  const cities = await cityNames();

   return cities.filter((city) => {
   const regax = new RegExp(matchingWord, 'gi');
   return city.match(regax);
 });
};

const displayMatches = async (e) => {
  const matchArr = await findMatches(e.target.value);
  const html = matchArr.map((city) => {
    return`
  <li class="matches">
    <span>${city}</span>
  </li>`;
  }).join('');
  suggestions.innerHTML = html;
};

const displayWeather = async (input) => {
  suggestions.innerHTML = ' ';
  const cityInfo = await data(input);

  cityName.textContent = cityInfo.cityName;
  weatherIcon.src = `http://openweathermap.org/img/w/${cityInfo.icon}.png`;
  tempF.textContent = `${Math.round(cityInfo.temperature)} F`;
  tempC.textContent = `${Math.round(cityInfo.temperature / 32 * 5/9)} C`;
  weatherStatus.textContent = cityInfo.status;

  suggestions.innerHTML = ' ';
};

const displayWeatherByNav = async (lat, lon) => {
  const cityInfo = await dataByNav(lat, lon);
  cityName.textContent = cityInfo.cityName;
  weatherIcon.src = `http://openweathermap.org/img/w/${cityInfo.icon}.png`;
  tempF.textContent = `${Math.round(cityInfo.temperature)} F`;
  tempC.textContent = `${Math.round(cityInfo.temperature / 32 * 5/9)} C`;
  weatherStatus.textContent = cityInfo.status;
  suggestions.innerHTML = ' ';
};

export { displayMatches, displayWeather, displayWeatherByNav };