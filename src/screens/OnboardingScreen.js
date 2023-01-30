import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
// import NavLink from "../components/NavLink";
import { FontAwesome5 } from "@expo/vector-icons";
import Images from "../../assets/onboarding";

const OnboardingScreen = ({ navigation }) => {
  const onboardingList = [
    {
      id: 1,
      title: "Track Money, Save Money",
      illustration: Images.moniee,
      // illustration: require('../assets/onboarding/dispatch.gif'),
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            alignSelf: 'center',
            width: 70,
            height: 70,
            top: 100,
            // position: 'relative'
          }}
          source={ require("../../assets/moniee-logo.png")}
        />
        
      </View>
      {onboardingList.map((i) => {
          return (
            <View
              key={i.id}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: '100%',
                top: 40
              }}
            >
              <Image style={styles.imageContainer} source={i.illustration} />
              <Text style={styles.textStyle}>{i.title}</Text>
            </View>
          );
        })}
      {/* <Text style={styles.text}>
        See what's happening in the world right now.
      </Text> */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'white',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingVertical: 40
        }}
      >
      <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.loginButtonStyle}> Login</Text>
        </TouchableOpacity>
      {/* <Button
        buttonStyle={styles.button}
        title="Create Account"
        onPress={() => navigation.navigate("Signup")}
      /> */}
      <TouchableOpacity
        style={styles.createAccountButtonStyle}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.createAccountTextButtonStyle}> Create Account</Text>
      </TouchableOpacity>

      {/* <NavLink
        style={styles.navlink}
        routeName="Signin"
        text="Have an account already? Log in"
      /> */}
      <View style={{marginTop: 10}}>
        <Text
          style={styles.textTermsStyle}
          onPress={() =>
            navigation.navigate("auth", { screen: "HomeScreen" })
          }
        >
          
          By tapping Create account, you agree {"\n"}to our Terms and Privacy Policy.
        </Text>
        </View>
      </View>
    </View>
  );
};
// OnboardingScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
    // padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    // height: Dimensions.get('window').height,
    //   width: Dimensions.get('window').width,
  },
  imageContainer: {
    height: '40%',
    width: '80%',
    resizeMode: 'contain',
    // marginHorizontal: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    // width: '70%',
    color: '#ffffff',
    textAlign: 'center',
    bottom: 17.5,
    marginBottom: 200
  },
  button: {
    borderRadius: 10,
    color: "black",
    borderWidth: 1,
  },
  buttonStyle: {
    // backgroundColor: '#00b14f',
    // backgroundColor: '#232323',
    borderColor: '#232323',
    borderWidth: 1,
    // paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 10,
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
  },
  createAccountButtonStyle: {
    // backgroundColor: '#00b14f',
    backgroundColor: '#000000',
    // paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
    borderRadius: 10,
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
  },
  textTermsStyle: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%'
  },
  loginButtonStyle: {
    fontWeight: '500',
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    width: '120%'
  },
  createAccountTextButtonStyle: {
    fontWeight: '500',
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
    width: '120%'
  },
  navlink: {
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    
  },
});
export default OnboardingScreen;
