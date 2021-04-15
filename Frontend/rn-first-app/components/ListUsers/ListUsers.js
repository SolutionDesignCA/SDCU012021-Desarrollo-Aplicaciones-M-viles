import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import UserItem from "../UserItem/UserItem";
import * as selectors from "../../reducers";
import * as actions from "../../actions/users";

const ListUsers = ({ users, addUser, removeUser, loadUsers, modifyUsers }) => {
  const [user, setuser] = useState();

  console.log(users);

  /**
   * Ya no necesitamos esto, estara en el estado global
   */
  // const [users, setUserItems] = useState([]);

  // const handleAddUser = () => {
  //   // Keyboard.dismiss();
  //   // addUser(user);
  //   // setuser(null);
  // };

  const handleRemoveUser = (index) => {
    removeUser(index);
  };

  useEffect(() => {
    // * Llamada al API
    loadUsers();
  }, []);

  return (
    <View style={styles.container}>
      {/*Listado de Usuarios*/}
      <View style={styles.usersWrapper}>
        <Text style={styles.sectionTitle}>Usuarios</Text>
        <View style={styles.items}>
          <ScrollView>
            {users.map((user, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleRemoveUser(index)}
              >
                <UserItem user={user} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/*Agregar al Listado */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.writeUserWrapper}
      >
        {/* <TextInput
          style={styles.input}
          placeholder={"Agrega un Usuario"}
          value={user}
          onChangeText={(value) => setuser(value)}
        /> */}
        <TouchableOpacity onPress={() => modifyUsers(users)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addUser}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default connect(
  (state) => ({
    users: selectors.getUsersList(state),
  }),
  (dispatch) => ({
    addUser(user) {
      dispatch(actions.completeAddingUser(user));
    },
    removeUser(index) {
      dispatch(actions.startRemovingUser(index));
    },
    loadUsers() {
      dispatch(actions.startLoadingUsers());
    },
    modifyUsers(users) {
      users.forEach((user) => dispatch(actions.updateUser(user)));
    },
  })
)(ListUsers);

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
