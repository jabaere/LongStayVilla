import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import  Screens2  from './components/ScneensContainer';

import ScneensContainer from './components/ScneensContainer'
import { AuthProvider } from './context/ContextApi'
export default function App() {

  

  return (
  <AuthProvider>
    <NavigationContainer>
         <ScneensContainer/>
    </NavigationContainer>
   </AuthProvider>
  )
}

