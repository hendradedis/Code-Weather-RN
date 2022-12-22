import * as React from 'react';
import {Alert, KeyboardAvoidingView, TextInput, ViewStyle} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchWeatherCities} from '../../service/weather/Queries/useFetchWeatherCities';
import {setDataWeatherLonglan} from '../../store/Weather';
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
  const dispatch = useDispatch();
  const [citiesValue, setCitiesValue] = React.useState<string>('');

  const onPressSearch = async () => {
    if (citiesValue.length > 0) {
      const response = await fetchWeatherCities(citiesValue);
      if (!response) {
        Alert.alert('city not found');
      } else {
        dispatch(setDataWeatherLonglan(response));
      }
    } else {
      Alert.alert('city not found');
    }
    setCitiesValue('');
  };
  return (
    <KeyboardAvoidingView
      style={[styles.formInputContainer, style, {marginTop}]}>
      <Layouts style={styles.textInputContainer}>
        <TextInput
          keyboardType={keyboardType}
          style={styles.textInput}
          value={citiesValue}
          placeholder={placeholder}
          onChangeText={text => {
            setCitiesValue(text);
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
