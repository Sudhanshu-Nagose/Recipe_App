import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets
} from "@react-navigation/stack";
import Home from "./Home";
import Profile from "./Profile";
import Cart from "./Cart";
import Notification from "./Notification";
import { Image, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const renderTabLabel = (label, isFocused) => {
    return null;
  };

  const renderTabIcon = (tabName, isFocused) => {
    let iconSrc;
    switch (tabName) {
      case "Home":
        iconSrc = require("../images/home.png");
        break;
      case "Profile":
        iconSrc = require("../images/profile.png");
        break;
      case "Cart":
        iconSrc = require("../images/cart.png");
        break;
      case "Notification":
        iconSrc = require("../images/notification.png");
        break;
      default:
        iconSrc = require("../images/home.png");
    }
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: wp(3),
          paddingHorizontal: isFocused ? wp(3) : undefined,
          paddingVertical: isFocused ? wp(3) : undefined,
          backgroundColor: isFocused ? "#FCE5E8" : undefined
        }}>
        <Image
          source={iconSrc}
          tintColor={isFocused ? "#EC3323" : "Pink"}
          resizeMode="stretch"
          style={{ width: wp(5), height: wp(5) }}
        />
        {isFocused && (
          <Text
            numberOfLines={1}
            style={{ fontWeight: "500", color: "black", marginLeft: wp(2) }}>
            {tabName}
          </Text>
        )}
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => renderTabLabel("Home", focused),
          tabBarIcon: ({ focused }) => renderTabIcon("Home", focused)
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => renderTabLabel("Profile", focused),
          tabBarIcon: ({ focused }) => renderTabIcon("Profile", focused)
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => renderTabLabel("Cart", focused),
          tabBarIcon: ({ focused }) => renderTabIcon("Cart", focused)
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => renderTabLabel("Notification", focused),
          tabBarIcon: ({ focused }) => renderTabIcon("Notification", focused)
        }}
        name="Notification"
        component={Notification}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
