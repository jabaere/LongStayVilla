import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//

import {Home} from "./components/Home"
import {Login} from "./components/Login"
import { FirstScreen } from './components/FirstScreen';
import { Profile } from './components/Profile';
const Stack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
    <Stack.Screen name="LongStay Villa" component={FirstScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    
    </Stack.Navigator>
    
  </NavigationContainer>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
