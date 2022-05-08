import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import  Screens2  from './components/Screens2';

import {RootNavigator} from './components/ScneensContainer'
export default function App() {

  

  return (
    <NavigationContainer>
         <RootNavigator/>
    </NavigationContainer>
  
  )
}

