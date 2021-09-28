import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./component/Homescreen";
import Login from "./component/Login";
import Details from "./component/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Details" component={Details} /> 
      </Stack.Navigator>
    </NavigationContainer>
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
