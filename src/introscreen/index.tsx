import * as React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const IntroScreen = (): React.ReactElement => {
  const navigation = useNavigation<any>();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1500);
  });
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
