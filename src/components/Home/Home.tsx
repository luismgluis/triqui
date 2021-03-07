import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
const TAG = "HOME";
const CustomTitle = () => {
  return (
    <Text style={{ textAlign: "center" }} category="h3">
      Super triqui
    </Text>
  );
};
const CustonButton = ({ title, fnBack }) => {
  return (
    <View style={styles.panelButton}>
      <Button
        style={styles.button}
        onPress={fnBack}
        children={() => (
          <Text appearance="alternative" category="h2">
            {title}
          </Text>
        )}
      />
    </View>
  );
};
const Home = ({ navigation, route }) => {
  const goGame = () => {
    navigation.navigate("GameBoard");
  };

  const goConfig = () => {
    navigation.navigate("Config");
  };

  const goScores = () => {
    //--- PENDING
  };
  return (
    <Layout>
      <TopNavigation title={CustomTitle} />
      <Layout>
        <CustonButton title="Game" fnBack={goGame} />
        <CustonButton title="Config" fnBack={goConfig} />
        <CustonButton title="Scores" fnBack={goScores} />
      </Layout>
    </Layout>
  );
};
const w = Dimensions.get("window");
const hButton = (w.height - 140) / 3;
const styles = StyleSheet.create({
  button: {
    height: hButton,
  },
  panelButton: {
    padding: 10,
  },
});
export default Home;
