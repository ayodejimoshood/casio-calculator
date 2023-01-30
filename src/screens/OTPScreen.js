import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import Swiper from "react-native-swiper";
// import Images from "../assets/onboarding";
// import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
// import { useValidation } from "react-native-form-validator";
// import { Formik } from "formik";
// import TextInput from "../components/TextInput";
// import Button from "../components/Button";
import OTPTextInput from "../components/OTPTextInput";
import Icon from "react-native-vector-icons/Feather"
// import DismissKeyboard from '../components/DismissKeyboard';
// import NavFavourites from "../components/NavFavourites";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { useDispatch } from "react-redux";
// import { setDestination, setOrigin } from "../slices/navSlice";
// import { GOOGLE_MAPS_APIKEY } from "@env";
// import NavOptions from "../components/NavOptions";



const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const OTPScreen = ({ onPress, navigation }) => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('OnboardingScreen')}>
            <Icon name="chevron-left" size={24} style={styles.iconWhite} />
          </TouchableOpacity>
        </View>
        <View>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.title2}>Lacus integer imperdiet lacinia consectetur era scelerisque.</Text>
      </View>
      </SafeAreaView>
      
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{ top: 30, position: 'absolute', width: "90%" }}
          >
            
            {/* start OTP text input component */}
            <OTPTextInput />
            {/* end OTP text input component */}
          </View>

          <TouchableOpacity>
            <Text
              style={styles.textResendOTPStyle}
              onPress={() => navigation.navigate("OTPScreen")}
            >
              {" "}
              Verification code will be resent in
            </Text>
            <Text
              style={styles.textResendOTPTimeStyle}
              onPress={() => navigation.navigate("OTPScreen")}
            >
              {" "}
              0:45
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("AddBankDetailsScreen")}
          >
            <Text style={styles.loginButtonStyle}> Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboard>
  );
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
    // top: 120,
    // paddingVertical: 20
    paddingHorizontal: 20
  },
  title2: {
    fontSize: 15,
    // fontWeight: "500",
    // top: 125,
    // paddingVertical: 20
    paddingHorizontal: 20
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    width: "40%",
    textAlign: "center",
    bottom: "15%",
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    resizeMode: "contain",
    marginHorizontal: 15,
    // marginVertical: 15,
  },
  buttonStyle: {
    backgroundColor: "#000000",
    // paddingHorizontal: 100,
    bottom: 5,
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: "90%",
  },
  loginButtonStyle: {
    fontWeight: '400',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    width: '120%'
  },
  textStartedStyle: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#ffffff",
  },
  textRegisterStyle: {
    fontWeight: "500",
    fontSize: 13,
    bottom: 5,
  },
  textOTPStyle: {
    fontWeight: "500",
    fontSize: 12,
    // top: "-110%",
    bottom: 30,
    alignItems: "center",
    textAlign: "center",
  },
  textResendOTPStyle: {
    fontWeight: "500",
    fontSize: 12,
    bottom: 150,
    // position: 'absolute',
    // bottom: 15,
    marginTop: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: 'center'
  },
  textResendOTPTimeStyle: {
    fontWeight: "500",
    fontSize: 14,
    bottom: 140,
    fontStyle: 'italic',
    // position: 'absolute',
    // bottom: 15,
    marginTop: 10,
    alignItems: "center",
    textAlign: "center",
  },
  textOTPVerifyStyle: {
    fontWeight: "bold",
    // fontSize: 3,
    width: "90%",
    // flex: 1,
    // top: '25%',
    color: "#000000",
    fontSize: 25,
    marginBottom: 42,
    position: "absolute",
    bottom: 80,
    left: "6%",
    right: "56%",
    justifyContent: "space-evenly",
    // alignItems: 'center',
    // textAlign: 'left',
  },
  header: {
    paddingVertical: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default OTPScreen;
