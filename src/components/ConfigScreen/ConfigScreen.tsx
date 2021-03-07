import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { Pressable } from "react-native";
import ConfigUserForm from "../ConfigUserForm/ConfigUserForm";
const TAG = "CONFIG SCREEN";

const BackIcon = (fnOnPress: () => void) => {
  return (props) => (
    <Pressable onPress={fnOnPress}>
      <Icon {...props} name="arrow-back" />
    </Pressable>
  );
};

const ConfigScreen = ({ navigation, route }) => {
  const titleScreen = "Configuration";
  const onBack = () => {
    navigation.navigate("Home");
  };
  const BackAction = () => <TopNavigationAction icon={BackIcon(onBack)} />;

  const saveData = (playerId, data) => {};

  return (
    <Layout>
      <TopNavigation accessoryLeft={BackAction} title={titleScreen} />
      <Divider />
      <Layout level="2">
        <ConfigUserForm
          title="Player 1 config"
          fnBack={(data) => {
            saveData(1, data);
          }}
          level="2"
        />
        <Divider />
        <ConfigUserForm
          title="Player 1 config"
          fnBack={(data) => {
            saveData(1, data);
          }}
          level="2"
        />
      </Layout>
    </Layout>
  );
};
export default ConfigScreen;
