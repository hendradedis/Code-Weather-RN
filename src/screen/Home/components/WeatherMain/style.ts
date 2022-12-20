import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    paddingTop: moderateScale(16),
    alignItems: 'center',
  },
  imageStyle: {
    width: moderateScale(50),
    height: moderateScale(50),
    alignSelf: 'center',
  },
});

export default styles;
