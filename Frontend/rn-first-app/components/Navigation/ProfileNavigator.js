import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../Profile/Profile";
import { Test } from "../Test/Test";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: "" }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
