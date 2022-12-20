import {StyleSheet, ViewStyle} from 'react-native';
import GlobalStyle from '../Globalstyle/styles';

interface IStyles {
  layout: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  layout: {
    backgroundColor: GlobalStyle.DEFAULT_COLOUR,
  },
});

export default styles;
