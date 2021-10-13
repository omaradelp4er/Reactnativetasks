import React from "react";
import { Text, View, Button } from "react-native";
import Details from "./Details";

function Homescreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>welcome to home screen</Text>
      <Button
        title="go to details"
        onPress={() => navigation.push("Details")}
      />
      <Button
        title="Logout"
        onPress={() => navigation.replace("Login")}
      />
    </View>
  );
}

export default Homescreen;
