import {Dimensions, ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import * as appTheme from './../assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  imgLogo: ImageStyle;
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: appTheme['color-purple'],
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
});

export default styles;
