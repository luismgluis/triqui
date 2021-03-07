import { Layout, Text } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import Home from "./src/components/Home/Home";
const TAG = "APP NAV";

const { Navigator, Screen } = createStackNavigator();

const AppNav = () => {
  return (
    <Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Config" component={Home} />
    </Navigator>
  );
};
export default AppNav;
