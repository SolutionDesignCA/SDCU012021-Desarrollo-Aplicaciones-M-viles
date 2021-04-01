import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Home/Home";
import ListUsers from "../ListUsers/ListUsers";
import { Profile } from "../Profile/Profile";
import { TabBar } from "../TabBar/TabBar";
import { ProfileNavigator } from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ icon: "home" }}
      />
      <Tab.Screen
        name="ListUsers"
        component={ListUsers}
        initialParams={{ icon: "users" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        initialParams={{ icon: "address-card" }}
      />
    </Tab.Navigator>
  );
};
