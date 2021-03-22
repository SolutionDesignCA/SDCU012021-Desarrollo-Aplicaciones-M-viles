import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

export const Login = () => {
  const [animationLogin, animateLogin] = useState(
    new Animated.Value(width - 40)
  );

  const [enable, setEnable] = useState(true);

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const _animation = () => {
    Animated.timing(animationLogin, {
      toValue: 40,
      duration: 250,
    }).start();
    setTimeout(() => {
      setEnable(false);
    }, 150);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/header.png")}
          style={styles.imageBackground}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
            Bienvenido
          </Text>
          <Text
            style={{
              color: "yellow",
            }}
          >
            Inicia Sesión
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.title, { marginTop: 50 }]}>Usuario</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Usuario"
            style={styles.textInput}
            onChangeText={(value) => setUserName(value)}
            value={userName}
          />
        </View>
        <Text style={[styles.title, { marginTop: 20 }]}>Contraseña</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Contraseña"
            style={styles.textInput}
            onChangeText={(value) => setPassword(value)}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (
              (userName === null || userName === "") &&
              (password === null || password === "")
            ) {
              if (Platform.OS === "android") {
                ToastAndroid.show(
                  "El usuario y contraseña son campos requeridos",
                  ToastAndroid.SHORT
                );
                return;
              }

              Alert.alert(
                "Login Error",
                "El usuario y contraseña son campos requeridos",
                [{ text: "OK" }]
              );
            }

            return _animation();
          }}
        >
          <View style={styles.button_container}>
            <Animated.View
              style={[styles.animation, { width: animationLogin }]}
            >
              {enable ? (
                <Text style={styles.textLogin}>Iniciar Sesión</Text>
              ) : (
                <Animatable.View animation="bounceIn" delay={50}>
                  <FontAwesome name="check" color="white" size={20} />
                </Animatable.View>
              )}
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 2,
    padding: 20,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // position: "absolute",
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 5,
    color: "gray",
  },
  button_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    backgroundColor: "#93278f",
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
