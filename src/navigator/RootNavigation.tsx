import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../introscreen';
import HomeScreen from '../screen/Home';

export type RootStackParamList = {
  Home: undefined;
  Intro: undefined;
  route?: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
