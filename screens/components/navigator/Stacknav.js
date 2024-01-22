import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Drawernav from './Drawernav';
import Details from '../Details';

const Stack = createStackNavigator();

const Stacknav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawernav" component={Drawernav} options={{headerShown:false}} />
      <Stack.Screen name="Movie Details" component={Details}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default Stacknav;