import {StyleSheet, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import * as appTheme from './../../../../assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  contentBox: ViewStyle;
  contentBoxLeft: ViewStyle;
  card: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    padding: moderateScale(16),
    marginTop: moderateScale(44),
    width: '92%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: appTheme['color-transparat'],
    borderRadius: moderateScale(10),
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentBoxLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
  },
  card: {
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
  },
});

export default styles;
