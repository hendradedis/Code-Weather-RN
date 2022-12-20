import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import * as appTheme from './../../../../assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  boxSunrice: ViewStyle;
  imageStyle: ImageStyle;
  boxSunset: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
  },
  boxSunrice: {
    width: '40%',
    backgroundColor: appTheme['color-transparat'],
    alignItems: 'center',
    borderRadius: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  boxSunset: {
    width: '40%',
    backgroundColor: appTheme['color-transparat'],
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 10,
  },
});

export default styles;
