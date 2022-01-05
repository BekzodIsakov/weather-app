import {
  Switch,
  Location,
  WeatherStatusImg,
  WeatherDegree,
} from './components/atoms';
import cloud from './assets/images/cloud.png';

import { IoWaterOutline } from 'react-icons/io5';

const App = () => {
  return (
    <div className='app'>
      <Switch />
      <Location>San Fransisco, California, USA</Location>
      <WeatherStatusImg src={cloud} alt='cloud' size={'large'} />
      <WeatherDegree>20</WeatherDegree>

      <IoWaterOutline title='water-drop' />
    </div>
  );
};

export default App;
