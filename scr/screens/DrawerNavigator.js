import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Setting from "./Setting";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      screenOptions={{
        drawerType: "front",
        drawerStyle: { width: "80%" },
        headerShown: false
      }}>
      <Drawer.Screen name="Dashboard" component={TabNavigator} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
