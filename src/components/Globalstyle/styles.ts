import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import * as appTheme from '../../assets/custom-theme.json';

export default class GlobalStyle {
  static DEFAULT_COLOUR = 'rgba(0,0,0,0)'; // used for loading color
  static styles = StyleSheet.create({
    textGreenBold: {
      color: appTheme['color-green'],
      fontSize: moderateScale(12),
      lineHeight: 18,
      letterSpacing: 0.3,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    textLightRed: {
      color: appTheme['color-primary-800'],
      fontSize: moderateScale(20),
      fontWeight: 'bold',
      letterSpacing: 1.5,
    },
    textLightBold: {
      color: appTheme['color-black-100'],
      fontSize: moderateScale(14),
    },
    textBoldBlack: {
      fontSize: moderateScale(20, 0.25),
      letterSpacing: 0.5,
      lineHeight: moderateScale(20, 0.25),
      fontWeight: 'bold',
    },
    textNormalBlack: {
      color: appTheme['color-black-100'],
      fontSize: moderateScale(12, 0.25),
      fontWeight: '400',
    },
    textNormalWhite: {
      color: appTheme['color-white'],
      fontSize: moderateScale(12, 0.25),
      fontWeight: '400',
    },
    textLitleWhite: {
      color: appTheme['color-white'],
      fontSize: moderateScale(11, 0.25),
      fontWeight: '400',
    },
    textWhiteBold: {
      color: appTheme['color-white'],
      fontSize: moderateScale(24, 0.25),
      lineHeight: 30,
      letterSpacing: 1.5,
      fontWeight: 'bold',
    },
    textWhiteBoldLarge: {
      color: appTheme['color-white'],
      fontSize: moderateScale(50, 0.25),
      letterSpacing: 1.5,
      fontWeight: 'bold',
    },
    textSunSet: {
      color: appTheme['color-warning-alert'],
      fontSize: moderateScale(20, 0.25),
      lineHeight: 30,
      letterSpacing: 1.5,
      fontWeight: 'bold',
    },
    textSunrice: {
      color: appTheme['color-downy'],
      fontSize: moderateScale(20, 0.25),
      lineHeight: 30,
      letterSpacing: 1.5,
      fontWeight: 'bold',
    },
  });
}
