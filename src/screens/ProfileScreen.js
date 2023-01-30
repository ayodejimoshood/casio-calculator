import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text
} from "react-native";
import { Icon } from "react-native-elements";

const ProfileScreen = ({ onPress, navigation }) => {

  return (
    // <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('OnboardingScreen')}>
            <Icon name="chevron-left" size={24} style={styles.iconWhite} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.title2}>Getting ready.</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    margin: 20,
  },
  // card: {
  //   padding: 0,
  //   margin: 0,
  // },
  header: {
    paddingVertical: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 20
  },
  title2: {
    fontSize: 15,
    paddingHorizontal: 20
  },
});
export default ProfileScreen;
