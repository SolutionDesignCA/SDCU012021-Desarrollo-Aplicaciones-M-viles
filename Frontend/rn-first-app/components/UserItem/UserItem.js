import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../actions/users";

const UserItem = ({ user, updateQuantity }) => {
  const [cantidad, setcantidad] = useState(0);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{user.nombre_usuario}</Text>
        <View>
          <TextInput
            placeholder={user.cantidad ? user.cantidad.toString() : "Cantidad"}
            // style={styles.textInput}
            onChangeText={(value) => {
              setcantidad(value);
              updateQuantity({ ...user, cantidad: value });
            }}
            value={cantidad}
          />
        </View>
        {/* <Button title="Save" /> */}
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

export default connect(undefined, (dispatch) => ({
  updateQuantity(user) {
    dispatch(actions.startModifyUser(user));
  },
}))(UserItem);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#93278f",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#93278f",
    borderWidth: 2,
    borderRadius: 5,
  },
});
