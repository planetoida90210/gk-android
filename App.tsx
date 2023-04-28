import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens";
import { View } from "react-native";

export type StackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
NavigationBar.setVisibilityAsync("hidden");

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
