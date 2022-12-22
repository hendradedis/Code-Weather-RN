/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {requestLocationPermission} from '../utils/locationUtils';
import {useFetchWeatherLontitude} from '../service/sample';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {setDataWeatherLonglan} from '../store/Weather';

const IntroScreen = (): React.ReactElement => {
  const dispatch = useDispatch();
  const {location} = useSelector((state: RootState) => state?.location);
  let longtitude = location?.coords?.longitude || 106.774124;
  let latitude = location?.coords?.latitude || -6.121435;
  const navigation = useNavigation<any>();
  const {refetch: refetchWeatherLontitude} = useFetchWeatherLontitude(
    latitude,
    longtitude,
    {
      enabled: true,
    },
  );

  const getWeatherLontitude = async () => {
    const {data: weatherData}: any = await refetchWeatherLontitude();
    dispatch(setDataWeatherLonglan(weatherData));
  };

  React.useEffect(() => {
    setTimeout(() => {
      getWeatherLontitude();
    }, 1000);
  }, [location]);

  React.useEffect(() => {
    (async () => {
      await requestLocationPermission();

      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/image/iconss.png')}
        resizeMode="center"
        style={styles.imgLogo}
      />
    </SafeAreaView>
  );
};

export default IntroScreen;
