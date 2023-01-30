// import { NavigationActions } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};
