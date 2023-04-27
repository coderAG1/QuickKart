import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screen/Home";
import PlacesDetail from "./screen/PlacesDetail";
import OrderComplete from "./screen/OrderComplete";
import Log from "./screen/Log";
import LogIn from "./screen/LogIn";
import SignUp from "./screen/SignUp";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log" screenOptions={screenOptions}>
        <Stack.Screen name="Log" component={Log} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PlacesDetail" component={PlacesDetail} />
        <Stack.Screen name="OrderComplete" component={OrderComplete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
