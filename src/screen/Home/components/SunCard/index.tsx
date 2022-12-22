/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Image, Text} from 'react-native';
import styles from './styles';
import Layouts from '../../../../components/Layouts';
import GlobalStyle from '../../../../components/Globalstyle/styles';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
const sunriceIcon = require('../../../../assets/image/sunrice.png');
const sunsetIcon = require('../../../../assets/image/sunset.png');
import {dateHourandMinute} from '../../../../utils/common';

const SunCard = (): React.ReactElement => {
  const {dataWeatherLonglan} = useSelector(
    (state: RootState) => state?.weather,
  );

  const timeSun = moment.unix(dataWeatherLonglan?.sys?.sunrise);
  const timeSunSet = moment.unix(dataWeatherLonglan?.sys?.sunset);
  const sunriceTime = dateHourandMinute(timeSun);
  const sunsetTime = dateHourandMinute(timeSunSet);

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
