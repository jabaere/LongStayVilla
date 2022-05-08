import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import { MoreModal } from "../components/MoreModal";

import  Screens2  from "../components/Screens2";
const RootStack = createStackNavigator();


export const RootNavigator = () => {
    return (
      <RootStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal', animationEnabled: false }}>
        <RootStack.Screen name="BottomTabNavigatorScreen" component={Screens2}/>
        <RootStack.Screen name="MoreModal" component={MoreModal} options={{ animationEnabled: true }}/>
      </RootStack.Navigator>
    )
  }