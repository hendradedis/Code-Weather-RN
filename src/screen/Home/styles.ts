import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import * as appTheme from './../../assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  imageBackground: ImageStyle;
  containerContent: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: appTheme['color-transparat'],
  },
  imageBackground: {
    flex: 1,
    paddingTop: moderateScale(50),
  },
  containerContent: {
    justifyContent: 'center',
    paddingTop: moderateScale(16),
    alignItems: 'center',
  },
});

export default styles;
