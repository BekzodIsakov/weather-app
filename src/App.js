import {
  Switch,
  Location,
  WeatherStatusImg,
  WeatherDegree,
  Pill,
} from './components/atoms';
import cloud from './assets/images/cloud.png';

import { Humidity, WindSpeed, Sunrise, Sunset } from './components/molecules';
import Setting from './components/atoms/setting/Setting';

const App = () => {
  return (
    <div className='app'>
      <Switch />
      <Location>San Fransisco, California, USA</Location>
      <WeatherStatusImg src={cloud} alt='cloud' size={'large'} />
      <WeatherDegree weatherUnit={'C'}>20</WeatherDegree>
      <Pill>Cloudy</Pill>

      <Humidity percentage={92} />
      <WindSpeed speed={7} />
      <Sunrise time={'07:48'} />
      <Sunset time={'17:13'} />

      <Setting />
    </div>
  );
};

export default App;
