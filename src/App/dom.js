import { cityNames, data } from './data';
const suggestions = document.querySelector('.suggestions');
const cityName = document.querySelector('.city-name');
const wIcon = document.querySelector('.country-name');
const tempC = document.querySelector('#temparature-c');
const tempF = document.querySelector('#temparature-F');
const weatherStatus = document.querySelector('.status');



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
  const cityInfo = await data(input);

  cityName.textContent = cityInfo.displayWeather;
  wIcon.innerHTML = cityInfo.icon;
  tempF.textContent = cityInfo.temperature;
  tempC.textContent = `${Math.round(cityInfo.temperature / 32 * 5/9)}`;
  weatherStatus.textContent = cityInfo.status;

  suggestions.innerHTML = ' ';
};

export { displayMatches, displayWeather };