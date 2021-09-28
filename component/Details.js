import React from "react";
import { Text, View, Button } from "react-native";

function Details({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>welcome to Details screen</Text>
      <Button
        title="go to details"
        onPress={() => navigation.navigate("Details")}
      />

    </View>
  );
}

export default Details;
