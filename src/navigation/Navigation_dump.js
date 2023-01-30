import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
// import Icon from "react-native-remix-icon";
// import Home from "@screens/Home";
// import Details from "@screens/Details";
// import InnerDetails from "@screens/InnerDetails";

// begin of app screens import
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
// import OTPScreen from "../screens/OTPScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SpacesScreen from "../screens/SpacesScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MessageScreen from "../screens/MessageScreen";
// import DispatchScreen from "../screens/DispatchScreen";
// import TripsScreen from "../screens/TripsScreen";
// import EarningsScreen from "../screens/EarningsScreen";
// import SettingsScreen from "../screens/SettingsScreen";
// import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
// import ToggleSwitch from "../components/ToggleSwitch";
// import SwipeButton from "../components/SwipeButton";
// end of app screens import
import plus from "../assets/bottomtabnavigation/plus.png";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5, backgroundColor: 'black' }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const screenNames = {
  onboarding: "OnboardingScreen",
  login: "LoginScreen",
  // otp: "OTPScreen",
  register: "RegisterScreen",
  home: "HomeScreen",
  search: "SearchScreen",
  spaces: "SpacesScreen",
  notification: "NotificationScreen",
  message: "MessageScreen",
  // earnings: "EarningsScreen",
  // settings: "SettingsScreen",
  // profile: "ProfileSettingsScreen",
  // authStack: "AuthStackScreen",
  
};

function TabNav() {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const [toggleState, setToggleState] = useState(false);
  // const handleToggle = (value) => setToggleState(value);

  const onSelectSwitch = index => {
    // alert('Selected index: ' + index);
  };
  
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          // Floating Tab Bar...
          tabBarStyle: {
            // width: 130,
            // flex: 0.3,
            backgroundColor: "#fff",
            position: "absolute",
            // bottom: -60,
            // bottom: 0,
            // marginHorizontal: 20,
            // Max Height...
            // height: 70,
            borderRadius: 20,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 0,
              height: 1,
              marginVertical: 10,
              // marginLeft: 10
            },

            borderTopWidth: 0,
            // borderColor: 'red',
            paddingHorizontal: 20,
            // borderWidth: 1,
            // borderColor: 'green'
            // borderLine: 'none'
          },
        }}
      >
        {
          // Tab Screens....
          // Tab ICons....
        }
        <Tab.Screen
          name={screenNames.home}
          component={HomeScreen}
          options={{
            // headerShown: false,
            headerTitle: () => (
              <Image
                style={{
                  alignSelf: 'center',
                  width: 25,
                  height: 25,
                }}
                source={ require("../../assets/wabbling-logo.png")}
              />
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => alert('Left Menu Clicked')}
                style={{marginLeft: 30}}>
                {/* <Text style={{color: 'black'}}>Left Menu</Text> */}
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                  }}
                  source={ require("../../assets/avatar.png")}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('Right Menu Clicked')}
                style={{marginRight: 30}}>
                {/* <Text style={{color: 'black'}}>Right Menu</Text> */}
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 25,
                    height: 25,
                  }}
                  source={ require("../../assets/wabble-spaces-icon.png")}
                />
              </TouchableOpacity>
            ),
            headerStyle: {height: 100, },
            
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? "#8e7aea" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={screenNames.search}
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? "#8e7aea" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        {
          // Extra Tab Screen For Action Button..
        }

        {/* <Tab.Screen
          name={screenNames.notification}
          component={NotificationScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#f9d34a",
                    borderRadius: 45,
                    borderLine: "none",
                    borderWidth: 0,
                    // borderStyle: "solid",
                    // borderColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: Platform.OS == "android" ? 50 : 40,
                  }}
                >
                  <Image source={plus} style={{
                  width: 20,
                  height: 20,
                  tintColor: 'white',
                }}></Image> */}
                  {/* <FontAwesome5
                    // name="bell"
                    size={20}
                    color={focused ? "#f9d34a" : "white"}
                  >GO</FontAwesome5> */}
                {/* </View>
              </TouchableOpacity>
            ),
          }}
        ></Tab.Screen> */}

        <Tab.Screen
          name={screenNames.notification}
          component={NotificationScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="bell"
                  size={20}
                  color={focused ? "#8e7aea" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={screenNames.message}
          component={MessageScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="comments"
                  size={20}
                  color={focused ? "#8e7aea" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "#8e7aea",
          position: "absolute",
          bottom: 77,
          // Horizontal Padding = 20...
          left: 35,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
}

function SideDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Profile' }}
          component={firstScreenStack}    
        />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function Navigation() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerShown: false,
        }}
        // initialRouteName={screenNames.onboarding}
      >
        <Stack.Screen name={screenNames.onboarding} component={OnboardingScreen} />
        <Stack.Screen name={screenNames.login} component={LoginScreen} />
        {/* <Stack.Screen name={screenNames.otp} component={OTPScreen} /> */}
        <Stack.Screen name={screenNames.register} component={RegisterScreen} />
        {/* <Stack.Screen name={screenNames.map} component={MapScreen} /> */}
        {/* <Stack.Screen name={screenNames.profile} component={ProfileSettingsScreen} /> */}
        {/* <Stack.Screen name={screenNames.dispatch} component={DispatchScreen} /> */}

        <Stack.Screen name={"auth"} component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 4;
}
