import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
// import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
// import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
// import NavLink from "../components/NavLink";
import TextInput from "../components/TextInput";
import Icon from "react-native-vector-icons/Feather"

const Keypad = ({ onPress, navigation }) => {
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  // const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}>
        <View
          style={{
            // marginTop: -20,
            bottom: 60,
            // position: 'absolute'
          }}>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fafafa', 
                width: '50%',
                // paddingVertical: 5,
                borderRadius: 20,
                color: '#fafafa'
              }}>
              <Text style={{color: '#828282', fontSize: 35}}>• • • •</Text>
            </View>
          {numbers.map((chunk, index) => {
            return (
              <View key={index} style={styles.keypadWrapper}>
                {chunk.map((number) => {
                  return (
                    <View
                      key={number}
                      style={{
                        alignSelf: 'center',
                      }}>
                      <Text style={styles.keypadText}>{number}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
          <View style={styles.keypadWrapper}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Text style={styles.keypadText}>C</Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Text style={styles.keypadText}>0</Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Icon
                name="delete"
                size={24}
                style={{
                  color: '#000000',
                }}
              />
            </View>
          </View>
        </View>
             
        </View>
  );
};

Keypad.navigationOptions = () => {
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
    bottom: 40,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
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
    top: 60,
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

export default Keypad;
