import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
// import NavLink from "../components/NavLink";
// import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
import TextInput from "../components/TextInput";

const RegisterScreen = ({ navigation }) => {
  // const { state, signup, clearErrorMessage } = useContext(AuthContext);
  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  
  return (
    <View style={styles.container}>
      {/* <NavigationEvents onWillFocus={clearErrorMessage} /> */}
      {/* <AuthForm
        headerText="Create your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      /> */}
      <View>
        {/* <FontAwesome5
          style={{ alignSelf: "center" }}
          name="paw"
          size={24}
          color="#1DA1F2"
        /> */}
        <TouchableOpacity
          style={styles.createAccountButtonStyle}
          onPress={() => navigation.navigate("Signin")}
        >
        

        <FontAwesome5
            style={{ alignSelf: "center", right: 150, top: 50 }}
            name="arrow-left"
            size={24}
            // onPress={() => navigation.navigate("Signin")}
            // color="#1DA1F2"
          />
          
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Create your account</Text>
      </View>
      {/* {state.errorMessage ? (
        <Text style={styles.errorTitle}>{state.errorMessage}</Text>
      ) : null} */}
      {/* <View>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View> */}
      <View
        style={{
          flex: 1,
          // backgroundColor: '#fff',
          alignItems: "center",
          justifyContent: "center",
          // marginTop: 35
        }}>
        <View
          style={{ marginBottom: 20 }}>
          
          <TextInput
            icon='user'
            placeholder="Name"
            label="name"
            // value={name}
            // onChangeText={setName}
            autoCapitalize="none"
            autoCorrect={false}
            mode="outlined"
            // keyboardType="phone-pad"
            fontSize={12}
            style={{
              marginBottomx: 10,
              height: 45,
              fontSize: 13,
              width: '80%',
            }}
            activeOutlineColor="#252525"
          />
        </View>
        <View
          style={{ marginBottom: 20 }}>
          
          <TextInput
            icon='circle'
            placeholder="Username"
            label="Username"
            // value={username}
            // onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            mode="outlined"
            // keyboardType="phone-pad"
            fontSize={12}
            style={{
              marginBottomx: 10,
              height: 45,
              fontSize: 13,
              width: '80%',
            }}
            activeOutlineColor="#252525"
          />
        </View>
        <View
          style={{ marginBottom: 20}}>
          
          <TextInput
            icon='mail'
            placeholder="Email"
            label="Email"
            // value={email}
            // onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            mode="outlined"
            // keyboardType="phone-pad"
            fontSize={12}
            style={{
              marginBottomx: 10,
              height: 45,
              fontSize: 13,
              width: '80%',
            }}
            activeOutlineColor="#252525"
          />
        </View>
        <View
          style={{ marginBottom: 20}}>
          
          <TextInput
            icon='mobile'
            placeholder="Phone"
            label="Phone"
            // value={phone}
            // onChangeText={setPhone}
            autoCapitalize="none"
            autoCorrect={false}
            mode="outlined"
            // keyboardType="phone-pad"
            fontSize={12}
            style={{
              marginBottomx: 10,
              height: 45,
              fontSize: 13,
              width: '80%',
            }}
            activeOutlineColor="#252525"
          />
        </View>
        <View
          style={{ marginBottom: 30}}>
          
          <TextInput
            secureTextEntry
            icon='lock'
            placeholder="Password"
            label="Password"
            // value={password}
            // onChangeText={setPassword}
            mode="outlined"
            // keyboardType="phone-pad"
            fontSize={12}
            style={{
              marginBottomx: 10,
              height: 45,
              fontSize: 13,
              width: '80%',
            }}
            activeOutlineColor="#252525"
          />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={styles.agreementStyle}>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use. Others will be able to find you by email or
          phone number when provided Privacy Options
        </Text>
      </View>

        {/* <Button
          buttonStyle={styles.signUpButton}
          title="Sign up"
          onPress={() => signup({ username, password, email, name })}
        /> */}
        <View style={{top: -70}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            // onPress={() => signup({ name, username, email, phone, password })}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.loginButtonStyle}> Sign Up</Text>
          </TouchableOpacity>
        </View>

      {/* <NavLink routeName="Signin" text="Do you have an account? Sign in here" /> */}
      <View style={{marginTop: 10}}>
        <Text
          style={styles.textTermsStyle}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Do you have an account? <Text style={{fontWeight: '600'}}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

RegisterScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    margin: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    top: 100,
    paddingHorizontal: 15,
    textAlign: 'center'
  },
  errorTitle: {
    fontSize: 13,
    fontWeight: "bold",
    top: 140,
    color: '#ff0000',
    paddingVertical: 8,
    textAlign: 'center',
    backgroundColor: '#ff9999',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50
  },
  agreement: {
    fontSize: 14,
    color: "grey",
  },
  signUpButton: {
    color: "#1DA1F2",
    borderRadius: 50,
    marginTop: 5,
  },
  buttonStyle: {
    // backgroundColor: '#00b14f',
    backgroundColor: '#42da',
    paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    // marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  loginButtonStyle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    width: '120%'
  },
  textTermsStyle: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: -60,
  },
  agreementStyle: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: -160,
  },
});
export default RegisterScreen;
