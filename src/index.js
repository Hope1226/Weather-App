import './style.scss';
import { data, cityNames} from './App/data';

const weather = async () => {
  const weatherInfo = await data('Moscow');

  console.log(weatherInfo.cityName);
}

