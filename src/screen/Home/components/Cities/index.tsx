/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Layouts from '../../../../components/Layouts';
import GlobalStyle from '../../../../components/Globalstyle/styles';
import {CITIES} from '../../../../constants/weather.const';
import {WEATHER_DUMMY} from '../../../../constants/dummyApi';
import {IWeather} from '../../../../appTypes/weather.type';
import {wordCapitalCase} from '../../../../utils/common';

const Cities = (): React.ReactElement => {
  const [dataWeather, setDataWeather] = React.useState<IWeather>(WEATHER_DUMMY);
  const citiesName = wordCapitalCase(dataWeather?.name);
  return (
    <Layouts style={styles.container}>
      <Text style={GlobalStyle.styles.textNormalWhite}>{CITIES}</Text>
      <Text style={GlobalStyle.styles.textWhiteBold}>{citiesName}</Text>
    </Layouts>
  );
};

export default Cities;
