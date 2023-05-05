import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ArtScreen, GraffitiScreen, HomeScreen, SaleScreen } from "../screens";

export type TabsStackParamList = {
  Home: undefined;
  Art: undefined;
  Sale: undefined;
  Graffiti: undefined;
};

const TabStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <TabStack.Screen name="Art" component={ArtScreen} options={{ headerShown: false }} />
      <TabStack.Screen name="Sale" component={SaleScreen} options={{ headerShown: false }} />
      <TabStack.Screen name="Graffiti" component={GraffitiScreen} options={{ headerShown: false }} />
    </TabStack.Navigator>
  );
};

export default TabsNavigator;
