import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./Homescreen";
const correctEmail = "omar";
const correctPassword = "123";
function Login({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput
          style={styles.textinput}
          value={email}
          onChangeText={(text) => {
            setemail(text);
          }}
        />
      </View>
      <View>
        <Text>password</Text>
        <TextInput
          style={styles.textinput}
          value={password}
          onChangeText={(pass) => {
            setpassword(pass);
          }}
        />
      </View>
      <View>
        <Button
          title="Login"
          onPress={() => {
            if (
              email.toLowerCase() === correctEmail &&
              password.toLowerCase() === correctPassword
            ) {
              // alert("login sucess");
              navigation.navigate("Homescreen");
            } else {
              alert("wrong sucess");
            }
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    borderColor: "black",
    width: 200,
    borderWidth: 1,
  },
});

export default Login;
