import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {store} from './../../store';
import {setLocationApp} from '../../store/Location';

export const requestLocationPermission = async (): Promise<void> => {
  const getLocationPermission = async () => {
    Geolocation.getCurrentPosition(
      (location: any) => {
        store.dispatch(setLocationApp(location));
      },
      error => {
        console.info('error', error);
        throw error;
      },
      {timeout: 20000, enableHighAccuracy: true, maximumAge: 1000},
    );
  };

  try {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();

      return await getLocationPermission();
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool your App need Location Permission',
          message: 'Cool App needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.info('You can use the Location');

        return await getLocationPermission();
      } else {
        console.info('Location permission denied');
      }
    }
  } catch (err) {
    console.warn(err);
  }
};
