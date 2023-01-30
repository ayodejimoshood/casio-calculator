import React, {useEffect} from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Animated } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './src/navigation/Navigation';

import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Bungee_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
    </Provider>
  );
}
