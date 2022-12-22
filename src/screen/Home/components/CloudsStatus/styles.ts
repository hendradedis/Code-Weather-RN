import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
  },
});

export default styles;
