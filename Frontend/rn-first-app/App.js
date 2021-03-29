import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ListUsers } from "./components/ListUsers/ListUsers";
import { Login } from "./components/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./components/Navigation/TabNavigator";
import { AuthNavigator } from "./components/Navigation/AuthNavigator";
import { Loading } from "./components/Loading/Loading";

export default function App() {
  const [isLoading, setisLoading] = useState(true);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set isLoading
    setTimeout(() => {
      setisLoading(false);
    }, 500);

    // Set User
    setTimeout(() => {
      setUser({});
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
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
