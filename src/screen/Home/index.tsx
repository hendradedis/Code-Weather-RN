import * as React from 'react';
import {ImageBackground, Text} from 'react-native';
import {IWeather} from '../../appTypes/weather.type';
import GlobalStyle from '../../components/Globalstyle/styles';
import Layouts from '../../components/Layouts';
import SearchBar from '../../components/SearchBar';
import {WEATHER_DUMMY} from '../../constants/dummyApi';
import {SEARCH_CITIES} from '../../constants/weather.const';
import Cities from './components/Cities';
import SunCard from './components/SunCard';
import WeatherContent from './components/WeatherContent';
import WeatherMain from './components/WeatherMain';
import styles from './styles';

const BgImage = require('../../assets/image/backgroundImage.jpeg');
const HomeScreen = (): React.ReactElement => {
  const [dataWeather, setDataWeather] = React.useState<IWeather>();

  React.useEffect(() => {
    setDataWeather(WEATHER_DUMMY);
  }, []);
  return (
    <Layouts style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={BgImage}>
        <SearchBar placeholder={SEARCH_CITIES} />
        <Layouts style={styles.containerContent}>
          <Text style={GlobalStyle.styles.textWhiteBold}>
            {dataWeather?.weather[0]?.main}
          </Text>
          <Text style={GlobalStyle.styles.textNormalWhite}>
            {dataWeather?.weather[0]?.description}
          </Text>
          {/* Weather Main */}
          <WeatherMain />
          {/* cities  */}
          <Cities />
          {/* weather content */}
          <WeatherContent />
          {/* SunCard */}
          <SunCard />
        </Layouts>
      </ImageBackground>
    </Layouts>
  );
};

export default HomeScreen;
