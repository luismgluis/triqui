import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
const TAG = "HOME";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const BackAction = () => <TopNavigationAction icon={BackIcon} />;

const Home = () => {
  return (
    <Layout>
      <TopNavigation accessoryRight={BackAction} title="Eva Application" />
      <Button>hola</Button>
    </Layout>
  );
};
export default Home;
