const apiWeatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '9cde3a28309a37c07f4f1fee395e2214';
const apiCitiesUrl = 'https://countriesnow.space/api/v0.1/countries'

const data = async (city) => {
  const response = await fetch(`${apiWeatherApi}${city}&appid=${apiKey}`);
  const data = await response.json();
  const temperature = data.main.temp;
  const feelsLike = data.main.feels_like;
  const status = data.weather[0].description;
  const icon = data.weather[0].icon;
  const cityName = data.name;

  return { cityName, temperature, feelsLike, status, icon };
};

const cityNames = async () => {
  const response = await fetch(apiCitiesUrl);
  const rowData = await response.json();
  const arrCountries = rowData.data;
  let cityList = [];

  arrCountries.forEach((obj) => {
    obj.cities.forEach ((city) => {
      cityList.push(city);
    });
  });

  return cityList;
};

export { cityNames, data };