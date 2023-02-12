import * as React from 'react';
import {ImageBackground} from 'react-native';
import Layouts from '../../components/Layouts';
import SearchBar from '../../components/SearchBar';
import {SEARCH_CITIES} from '../../constants/weather.const';
import Cities from './components/Cities';
import CloudStatus from './components/CloudsStatus';
import SunCard from './components/SunCard';
import WeatherContent from './components/WeatherContent';
import WeatherMain from './components/WeatherMain';
import styles from './styles';

const BgImage = require('../../assets/image/backgroundImage.jpeg');
const HomeScreen = (): React.ReactElement => {
  return (
    <Layouts style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={BgImage}>
        <SearchBar placeholder={SEARCH_CITIES} />
        <Layouts style={styles.containerContent}>
          {/* Cloud */}
          <CloudStatus />
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
