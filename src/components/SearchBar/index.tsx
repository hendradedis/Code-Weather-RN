import * as React from 'react';
import {Alert, KeyboardAvoidingView, TextInput, ViewStyle} from 'react-native';
import {WARNING_TEXTINPUT} from '../../constants/weather.const';
import {wordToLowerCase} from '../../utils/common';
import Layouts from '../Layouts';
import styles from './styles';

interface IFormInputProps {
  label?: string;
  placeholder?: string;
  onClearButton?: () => void;
  style?: ViewStyle;
  marginTop?: number;
  keyboardType?: 'numeric' | 'default';
}

const SearchBar = ({
  placeholder = 'Search something',
  style = {},
  marginTop,
  keyboardType = 'default',
}: IFormInputProps) => {
  const [textValue, setTextValue] = React.useState<string>('');

  const onPressSearch = () => {
    if (textValue.length > 0) {
      Alert.alert(wordToLowerCase(textValue));
    } else {
      Alert.alert(WARNING_TEXTINPUT);
    }
    setTextValue('');
  };
  return (
    <KeyboardAvoidingView
      style={[styles.formInputContainer, style, {marginTop}]}>
      <Layouts style={styles.textInputContainer}>
        <TextInput
          keyboardType={keyboardType}
          style={styles.textInput}
          value={textValue}
          placeholder={placeholder}
          onChangeText={text => {
            setTextValue(text);
          }}
          onSubmitEditing={() => {
            onPressSearch();
          }}
        />
      </Layouts>
    </KeyboardAvoidingView>
  );
};

export default React.memo(SearchBar);
