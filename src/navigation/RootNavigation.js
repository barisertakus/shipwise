import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stations from "../screens/Stations";
import ChargeStation from "../screens/ChargeStation";
import Appointment from "../screens/Appointment";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_left" }}
        initialRouteName="Stations"
      >
        <Stack.Screen name="Stations" component={Stations} />
        <Stack.Screen name="ChargeStation" component={ChargeStation} />
        <Stack.Screen name="Appointment" component={Appointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
