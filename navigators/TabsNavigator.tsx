import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ArtScreen, GraffitiScreen, HomeScreen, SaleScreen } from "../screens";

export type TabsStackParamList = {
  Produkty: undefined;
  Art: undefined;
  Promocje: undefined;
  Graffiti: undefined;
};

const TabStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="Produkty"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "yellow",
        tabBarStyle: styles.tabBar,
      }}
    >
      <TabStack.Screen name="Produkty" component={HomeScreen} />
      <TabStack.Screen name="Art" component={ArtScreen} />
      <TabStack.Screen name="Promocje" component={SaleScreen} />
      <TabStack.Screen name="Graffiti" component={GraffitiScreen} />
    </TabStack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    paddingBottom: 10,
    bottom: -10,
    borderRadius: 8,
    height: 72,
    backgroundColor: "black",
    borderColor: "transparent",
  },
});

export default TabsNavigator;
