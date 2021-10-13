import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./component/Homescreen";
import Login from "./component/Login";
import Details from "./component/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStore,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import { Provider } from "react-redux";
import RootReducer from "./Redux/Reducers/RootReducer";
const Stack = createNativeStackNavigator();
const Store = createStore(RootReducer)
function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Details" component={Details} /> 
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
export default App;
