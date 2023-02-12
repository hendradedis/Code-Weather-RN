import * as React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Layouts from '../../../../components/Layouts';
import GlobalStyle from '../../../../components/Globalstyle/styles';
import {CITIES} from '../../../../constants/weather.const';
import {wordCapitalCase} from '../../../../utils/common';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';

const Cities = (): React.ReactElement => {
  const {dataWeatherLonglan} = useSelector(
    (state: RootState) => state?.weather,
  );
  const citiesName = wordCapitalCase(dataWeatherLonglan?.name);
  return (
    <Layouts style={styles.container}>
      <Text style={GlobalStyle.styles.textNormalWhite}>{CITIES}</Text>
      <Text style={GlobalStyle.styles.textWhiteBold}>{citiesName}</Text>
    </Layouts>
  );
};

export default Cities;
