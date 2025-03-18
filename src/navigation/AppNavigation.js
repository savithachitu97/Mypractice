import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import Login from '../auth/Login';
import SingUp from '../auth/SingUp';

const Stack = createStackNavigator();

export default function AppNaviation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile"component={ProfileScreen}/>
        <Stack.Screen name="Setting"component={SettingScreen}/>
        <Stack.Screen name="Login"component={Login}/>
        <Stack.Screen name="SingUp"component={SingUp}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
