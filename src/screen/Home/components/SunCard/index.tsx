/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Image, Text} from 'react-native';
import styles from './styles';
import Layouts from '../../../../components/Layouts';
import GlobalStyle from '../../../../components/Globalstyle/styles';
import {WEATHER_DUMMY} from '../../../../constants/dummyApi';
import {IWeather} from '../../../../appTypes/weather.type';
import moment from 'moment';
const sunriceIcon = require('../../../../assets/image/sunrice.png');
const sunsetIcon = require('../../../../assets/image/sunset.png');
// import {dateHourandMinute} from '../../../../utils/common';

const SunCard = (): React.ReactElement => {
  const [dataWeather, setDataWeather] = React.useState<IWeather>(WEATHER_DUMMY);

  const timeSun = moment.unix(dataWeather?.sys?.sunrise);
  const timeSunSet = moment.unix(dataWeather?.sys?.sunset);
  const sunriceTime = timeSun.format('h:mm');
  const sunsetTime = timeSunSet.format('h:mm');

  return (
    <Layouts style={styles.container}>
      <Layouts style={styles.boxSunrice}>
        <Image style={styles.imageStyle} source={sunriceIcon} />
        <Text
          style={GlobalStyle.styles.textSunrice}>{`${sunriceTime} AM`}</Text>
      </Layouts>
      <Layouts style={styles.boxSunset}>
        <Image style={styles.imageStyle} source={sunsetIcon} />
        <Text style={GlobalStyle.styles.textSunSet}>{`${sunsetTime} PM`}</Text>
      </Layouts>
    </Layouts>
  );
};

export default SunCard;
