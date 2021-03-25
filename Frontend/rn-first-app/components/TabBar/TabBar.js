import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Tab } from "./Tab";

export const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState("Home");

  const { routes } = state;

  const renderColor = (currentTab) =>
    currentTab === selected ? "red" : "black";

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 100,
    elevation: 2,
  },
  wrapper: {
    position: "absolute",
    bottom: 20,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
});
