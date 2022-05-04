import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Location } from "./Location";
import { Booking } from "./Booking";
import { Profile } from "./Profile";
import { More } from "./More";
import { Login } from "./Login";
import { FirstScreen } from "./FirstScreen";

import Icon from "react-native-vector-icons/Ionicons";
import IconHome from "react-native-vector-icons/AntDesign";
const Tab = createBottomTabNavigator();

const Screens2 = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let menuIcon;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Location") {
            iconName = focused ? "search1" : "search1";
          } else if (route.name === "Booking") {
            iconName = "hearto";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else {
            menuIcon = "menu-outline";
          }

          // You can return any component that you like here!
          return route.name !== "More" ? (
            <IconHome name={iconName} size={size} color={color} />
          ) : (
            <Icon name={menuIcon} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#B2002D",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Location" component={Location} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default Screens2;
