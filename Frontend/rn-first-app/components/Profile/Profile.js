import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil de Usuario</Text>
      <Button
        title="Ir a otra pantalla"
        onPress={() => navigation.navigate("Test")}
      />
    </View>
  );
};

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
