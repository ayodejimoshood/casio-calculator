import React from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";

import "react-native-gesture-handler";

// begin of app screens import
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import OTPScreen from "../screens/OTPScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";


// end of app screens import

// import { NavigationContainer } from "@react-navigation/native";

import MapScreen from "../screens/MapScreen";
import DispatchScreen from "../screens/DispatchScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import BottomTabNavigator from '../navigation/BottomTabNavigator';

// The Google API's we use in this project are:
// https://console.cloud.google.com/google/maps-apis/api-list

// - Directions API
// - Places API
// - Distance Matrix API
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// export default function App() {
// const StackNavigator = createStackNavigator ({
//   Onboarding: OnboardingScreen,
//   Login: LoginScreen,
//   OTP: OTPScreen,
//   Register: RegisterScreen,
// });
  const StackNavigator = () => {
  

  return (
    
            <Stack.Navigator initialRouteName="OnboardingScreen">
              <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="OTPScreen"
                component={OTPScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DispatchScreen"
                component={DispatchScreen}
                options={{
                  headerShown: false,
                }}
              />
              {/* <Stack.Screen
                name="TripsScreen"
                component={TripsScreen}
                options={{
                  headerShown: false,
                }}
              /> */}
            </Stack.Navigator>
            
          
  );
}

export default StackNavigator;

// function BottomTabNavigator() {
//   return (
//     <BottomTabNavigator/>
//   );
// }