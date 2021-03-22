import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { UserItem } from "../UserItem/UserItem";

export const ListUsers = () => {
  const [user, setuser] = useState();
  const [users, setUserItems] = useState([]);

  const handleAddUser = () => {
    Keyboard.dismiss();
    setUserItems([...users, user]);
    setuser(null);
  };

  const removeUser = (index) => {
    const usersCopy = [...users];
    usersCopy.splice(index, 1);
    setUserItems(usersCopy);
  };

  return (
    <View style={styles.container}>
      {/*Listado de Usuarios*/}
      <View style={styles.usersWrapper}>
        <Text style={styles.sectionTitle}>Usuarios</Text>
        <View style={styles.items}>
          {users.map((user, index) => (
            <TouchableOpacity key={index} onPress={() => removeUser(index)}>
              <UserItem userName={user} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/*Agregar al Listado */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.writeUserWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Agrega un Usuario"}
          value={user}
          onChangeText={(value) => setuser(value)}
        />
        <TouchableOpacity onPress={() => handleAddUser()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addUser}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  usersWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeUserWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addUser: {},
});
