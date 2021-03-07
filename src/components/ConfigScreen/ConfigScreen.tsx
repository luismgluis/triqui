import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { Pressable } from "react-native";
const TAG = "CONFIG SCREEN";

const BackIcon = (fnOnPress) => {
  return (props) => (
    <Pressable>
      <Icon {...props} name="arrow-back" />
    </Pressable>
  );
};

const BackAction = () => <TopNavigationAction icon={BackIcon} />;

const ConfigScreen = (props) => {
  const titleScreen = "Configuration";
  const onBack = () => {
    console.log(TAG, props);
  };
  return (
    <Layout>
      <TopNavigation accessoryRight={BackAction} title={titleScreen} />
      <Button>hola</Button>
    </Layout>
  );
};
export default ConfigScreen;
