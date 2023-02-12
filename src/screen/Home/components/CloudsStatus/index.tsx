import * as React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Layouts from '../../../../components/Layouts';
import GlobalStyle from '../../../../components/Globalstyle/styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';

const CloudStatus = (): React.ReactElement => {
  const {dataWeatherLonglan} = useSelector(
    (state: RootState) => state?.weather,
  );
  return (
    <Layouts style={styles.container}>
      <Text style={GlobalStyle.styles.textWhiteBold}>
        {dataWeatherLonglan?.weather[0]?.main}
      </Text>
      <Text style={GlobalStyle.styles.textNormalWhite}>
        {dataWeatherLonglan?.weather[0]?.description}
      </Text>
    </Layouts>
  );
};

export default CloudStatus;
