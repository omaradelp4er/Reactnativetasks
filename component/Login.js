import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./Homescreen";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../Redux/Actions";
function Login({ navigation }) {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const islogedin = useSelector((state) => state.logreducer.isLoggedIn);
  const message = useSelector((state) => state.logreducer.message);
  useEffect(() => {
    trylogin ? navigation.replace("/trylogin") : alert(message);
  }, [islogedin]);
  const LoginHandler = () => {
    dispatch(GetUser(email, password));
  };

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
        <Button title="Login" onPress={LoginHandler} />
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
