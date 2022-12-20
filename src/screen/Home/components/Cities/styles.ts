import {StyleSheet, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    paddingTop: moderateScale(45),
    alignItems: 'center',
  },
});

export default styles;
