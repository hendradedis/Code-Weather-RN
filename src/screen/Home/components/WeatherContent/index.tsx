/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Text} from 'react-native';
import {IWeather} from '../../../../appTypes/weather.type';
import GlobalStyle from '../../../../components/Globalstyle/styles';
import Layouts from '../../../../components/Layouts';
import {WEATHER_DUMMY} from '../../../../constants/dummyApi';
import {
  GRANDLEVEL,
  HUMIDITY,
  PRESSURE,
  SEA_LEVEL,
  VISIBILITY,
  WIND,
} from '../../../../constants/weather.const';
import {convertToKM} from '../../../../utils/common';
import styles from './styles';

const WeatherContent = (): React.ReactElement => {
  const [dataWeather, setDataWeather] = React.useState<IWeather>(WEATHER_DUMMY);
  const visibility = convertToKM(dataWeather?.visibility);
  return (
    <Layouts style={styles.container}>
      <Layouts style={styles.contentBox}>
        <Layouts style={styles.card}>
          <Text style={GlobalStyle.styles.textLitleWhite}>{WIND}</Text>
          <Text style={GlobalStyle.styles.textLitleWhite}>
            {`${dataWeather?.wind?.speed}m/s SW`}
          </Text>
        </Layouts>
        <Layouts style={styles.card}>
          <Text style={GlobalStyle.styles.textLitleWhite}>{HUMIDITY}</Text>
          <Text
            style={
              GlobalStyle.styles.textLitleWhite
            }>{`${dataWeather?.main?.humidity}%`}</Text>
        </Layouts>
        <Layouts style={styles.card}>
          <Text style={GlobalStyle.styles.textLitleWhite}>{PRESSURE}</Text>
          <Text
            style={
              GlobalStyle.styles.textLitleWhite
            }>{`${dataWeather?.main?.pressure} hPa`}</Text>
        </Layouts>
      </Layouts>
      <Layouts style={styles.contentBoxLeft}>
        <Layouts style={styles.card}>
          <Text style={GlobalStyle.styles.textLitleWhite}>{VISIBILITY}</Text>
          <Text
            style={
              GlobalStyle.styles.textLitleWhite
            }>{`${visibility} Km`}</Text>
        </Layouts>
        <Layouts style={styles.card}>
          <Text style={GlobalStyle.styles.textLitleWhite}>{SEA_LEVEL}</Text>
          <Text style={GlobalStyle.styles.textLitleWhite}>{`${
            dataWeather?.main?.sea_level || 0
          } hPa`}</Text>
        </Layouts>
        <Layouts style={styles.card}>
          <Text style={GlobalStyle.styles.textLitleWhite}>{GRANDLEVEL}</Text>
          <Text style={GlobalStyle.styles.textLitleWhite}>{`${
            dataWeather?.main?.grnd_level || 0
          } hPa`}</Text>
        </Layouts>
      </Layouts>
    </Layouts>
  );
};

export default WeatherContent;
