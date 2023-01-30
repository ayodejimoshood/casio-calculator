import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
// import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
// import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
// import NavLink from "../components/NavLink";
import TextInput from "../components/TextInput";
import Keypad from "../components/Keypad";
// import Transfer from "../components/Transfer";
import Icon from "react-native-vector-icons/Feather"

const EnterPINScreen = ({ onPress, navigation }) => {
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  // const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Icon name="chevron-left" size={24} style={styles.iconWhite} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.title2}>Enter your PIN to continue</Text>
        </View>
      </SafeAreaView>
      
      {/* <View> */}
        <Keypad/>
      {/* </View> */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("auth", { screen: "HomeScreen" })}
        // onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.loginButtonStyle}> Continue </Text>
      </TouchableOpacity>
      {/* <Transfer/> */}
      </View>
  );
};

EnterPINScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    margin: 20,
    
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // top: 20,
    // position: 'absolute',
    // paddingVertical: 20
    paddingHorizontal: 20
  },
  title2: {
    fontSize: 15,
    // fontWeight: "500",
    // top: 25,
    // position: 'absolute',
    // paddingVertical: 20
    paddingHorizontal: 20
  },
  signInButton: {
    color: "#1DA1F2",
    borderRadius: 50,
    marginTop: 5,
  },
  buttonStyle: {
    // backgroundColor: '#00b14f',
    backgroundColor: '#000000',
    paddingHorizontal: 100,
    bottom: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    // marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  loginButtonStyle: {
    fontWeight: '400',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    width: '120%'
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  textTermsStyle: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%'
  },
  keypadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 35,
    top: 80,
    // position: 'absolute',
  },
  keypadText: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 24
  },
  header: {
    paddingVertical: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default EnterPINScreen;
