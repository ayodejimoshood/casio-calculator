import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
// import NavLink from "../components/NavLink";
import TextInput from "../components/TextInput";
import KeypadAmount from "../components/KeypadAmount";
import Icon from "react-native-vector-icons/Feather"

const HomeScreen = ({ onPress, navigation }) => {
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <View style={styles.container}>
      {/* <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Icon name="chevron-left" size={24} style={styles.iconWhite} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.title2}>Enter your PIN to continue</Text>
        </View>
      </SafeAreaView> */}
      
      <KeypadAmount/>
      {/* <Transfer/> */}
      {/* <View style={{flexDirection: 'row', paddingHorizontal: 10, width: '75%', alignSelf: 'center', bottom: 15}}>
        <TouchableOpacity
          style={styles.buttonRequestStyle}
          onPress={() => navigation.navigate("RequestMoneyScreen" )}
          // onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonTextStyle}> Request </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSendStyle}
          onPress={() => navigation.navigate( "SendMoneyScreen" )}
          // onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonTextStyle}> Send </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    // margin: 20,
    backgroundColor: 'white'
    
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
    // paddingHorizontal: 50,
    // marginLeft: 50,
    bottom: 100,
    position: 'absolute',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 10,
    // marginTop: 10,
    width: '50%',
    flexDirection: 'row',
    // marginVertical: 35,
    alignSelf: 'center',
  },
  buttonTextStyle: {
    fontWeight: '500',
    fontSize: 14,
    color: '#828282',
    textAlign: 'center',
    width: '120%'
  },
  buttonRequestStyle: {
    backgroundColor: '#f2f2f2',
    // paddingHorizontal: 50,
    // marginLeft: 50,
    bottom: 100,
    position: 'absolute',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 10,
    // marginTop: 10,
    width: '50%',
    flexDirection: 'row',
    // marginVertical: 35,
    alignSelf: 'center',
  },
  buttonSendStyle: {
    // backgroundColor: '#00b14f',
    backgroundColor: '#f2f2f2',
    // paddingHorizontal: 50,
    // marginLeft: 50,
    bottom: 100,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 10,
    // marginTop: 10,
    width: '50%',
    flexDirection: 'row',
    // marginVertical: 35,
    alignSelf: 'center',
  },
  buttonContainerStylex: {
    bottom: 100,
    position: 'absolute',
    backgroundColor: '#000000',
    // paddingVertical: 17,
    // borderRadius: 10,
    flexDirection: 'row',
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

export default HomeScreen;
