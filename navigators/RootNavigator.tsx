import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigatorScreenParams } from "@react-navigation/native";
import TabsNavigator, { TabsStackParamList } from "./TabsNavigator";

export type RootStackParamList = {
  TabStack: NavigatorScreenParams<TabsStackParamList>;
  Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="TabStack" component={TabsNavigator} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
