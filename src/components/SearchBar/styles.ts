import {Platform, StyleSheet, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import * as appTheme from './../../assets/custom-theme.json';

interface IStyles {
  textInputContainer: ViewStyle;
  clearIcon: ViewStyle;
  textInput: ViewStyle;
  formInputContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  formInputContainer: {
    borderWidth: 1,
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(12),
    paddingVertical:
      Platform.OS === 'android' ? moderateScale(0) : moderateScale(14),
    borderColor: appTheme['color-ghost-white'],
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    fontSize: moderateScale(14),
    color: appTheme['color-white'],
    letterSpacing: 1,
  },
  clearIcon: {
    justifyContent: 'center',
  },
});

export default styles;
