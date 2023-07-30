import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets,
  createStackNavigator
} from "@react-navigation/stack";
import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import RecipesDetails from "./RecipesDetails";

const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false
      }}
      initialRouteName="TABS">
      <Stack.Screen name={"TABS"}>
        {(props) => <BottomTabNavigator {...props} />}
      </Stack.Screen>

      <Stack.Screen name={"RECIPE_DETAILS"} component={RecipesDetails} />
    </Stack.Navigator>
  );
};

export default TabNavigator;
