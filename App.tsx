import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./navigators/RootNavigator";
import { setStatusBarHidden } from "expo-status-bar";

export type StackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  // Hide system status bar
  setStatusBarHidden(true, "none");
  // Hide system navigation bar on Android when not swiping from edges
  NavigationBar.setPositionAsync("absolute");
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  NavigationBar.setBackgroundColorAsync("#0000001a");
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
