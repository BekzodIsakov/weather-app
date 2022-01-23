import {
  Switch,
  Location,
  WeatherStatusImg,
  WeatherDegree,
  Pill,
} from './components/atoms';
import cloud from './assets/images/cloud.png';
import { useSetTheme } from './hooks/useSetTheme';

import Setting from './components/atoms/setting/Setting';
import {
  WaterDropIcon,
  PercentageIcon,
} from './components/atoms/svg-components';

import './styles.scss';
import WeatherFeature from './components/molecules/weather-feature/WeatherFeature';

const App = () => {
  const { setTheme, currentMode } = useSetTheme();

  return (
    <div className="app">
      <Switch checked={currentMode === 'dark'} onClick={setTheme} />
      <Location>San Fransisco, California, USA</Location>
      <WeatherStatusImg src={cloud} alt="cloud" size={'large'} />
      <WeatherDegree unit={'c'}>20</WeatherDegree>
      <Pill>Cloudy</Pill>
      <WeatherFeature
        icon={<WaterDropIcon />}
        data={'07:48'}
        unit={<PercentageIcon size={'1em'} />}
      />
      <Setting />
    </div>
  );
};

export default App;
