import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actions from "../../actions/auth";

const Profile = ({ navigation, logout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil de Usuario</Text>
      <Button
        title="Ir a otra pantalla"
        onPress={() => navigation.navigate("Test")}
      />
      <Button title="Cerrar Sesión" onPress={() => logout()} />
    </View>
  );
};

export default connect(undefined, (dispatch) => ({
  logout() {
    dispatch(actions.logout());
    AsyncStorage.removeItem("token");
  },
}))(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#76a6ef",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
