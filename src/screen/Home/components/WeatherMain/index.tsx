/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Image, Text} from 'react-native';
import styles from './style';
import GlobalStyle from '../../../../components/Globalstyle/styles';
import Layouts from '../../../../components/Layouts';
import {convertToCelcius} from '../../../../utils/common';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';

const WeatherMain = (): React.ReactElement => {
  const {dataWeatherLonglan} = useSelector(
    (state: RootState) => state?.weather,
  );
  const codeIcons = dataWeatherLonglan?.weather[0]?.icon;
  const iconWeather = `https://openweathermap.org/img/w/${codeIcons}.png`;
  const tempCelcius = convertToCelcius(dataWeatherLonglan?.main?.temp);
  const tempFeels = convertToCelcius(dataWeatherLonglan?.main?.feels_like);
  return (
    <Layouts style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: iconWeather}} />
      <Text style={GlobalStyle.styles.textWhiteBoldLarge}>
        {`${tempCelcius}`}&#8451;
      </Text>
      <Text style={GlobalStyle.styles.textNormalWhite}>
        {`feels like ${tempFeels}`}&#8451;
      </Text>
    </Layouts>
  );
};

export default WeatherMain;
