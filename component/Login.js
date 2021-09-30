import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./Homescreen";
// const correctEmail = "omar";
// const correctPassword = "123";
function Login({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Stack = createNativeStackNavigator();
  const[data,setdata]=useState([])
  const getdata=()=>{
      fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{method:'Get'})
      .then(response =>response.json())
      .then(responsejson =>setdata(responsejson))
      .catch(err =>alert(err))
  }
  useEffect(() => {
    getdata();
  }, [])
  // console.log(data.filter(checkemail),"no")
  // function checkemail(err){
    
  //   return(
  //     arr.find(x => x.email === email).email
  //   )
  // }
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
          var  user = data.find(x => x.email == email)
            if (
              email == user.email
              &&
              password == user.id
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






var x ;
console.log(x)
var x =10;
const print=()=>{
  console.log(`${x}`)
  console.log(arguments)

}
function sayhello(hamada){
    console.log('hello')
  console.log(arguments)
}
