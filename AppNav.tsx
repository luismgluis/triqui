import { Layout, Text } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import Home from "./src/components/Home/Home";
import ConfigScreen from "./src/components/ConfigScreen/ConfigScreen";
import GameBoard from "./src/components/GameBoard/GameBoard";
const TAG = "APP NAV";

const { Navigator, Screen } = createStackNavigator();

const AppNav = () => {
  return (
    <Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Config" component={ConfigScreen} />
      <Screen name="GameBoard" component={GameBoard} />
    </Navigator>
  );
};
export default AppNav;
