import React from "react";
import { StyleSheet, View } from "react-native";
import { ListUsers } from "./components/ListUsers/ListUsers";
import { Login } from "./components/Login/Login";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <ListUsers />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
