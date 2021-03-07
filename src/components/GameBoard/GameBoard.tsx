import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
const TAG = "GAME BOARD";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const grillSide = h / 3;
const cellSide = grillSide / 3;

const GameCell = ({ position, onPress }) => {
  const onAction = () => {
    onPress(position);
  };
  const row = position[0];
  const column = position[1];
  let customStyles = {};
  if (row < 2) {
    customStyles["borderBottomWidth"] = 3;
  }
  if (column < 2) {
    customStyles["borderRightWidth"] = 3;
  }
  return (
    <View style={{ ...styles.grillCell, ...customStyles }}>
      <Pressable onPress={onAction}>
        <Text style={styles.cellText}>X</Text>
      </Pressable>
    </View>
  );
};

const GameGrill = ({ data }) => {
  const onTouch = (position) => {
    const row = position[0];
    const column = position[1];
  };
  return (
    <View style={styles.grill}>
      <View style={styles.grillRow}>
        <GameCell position={[0, 0]} onPress={onTouch} />
        <GameCell position={[0, 1]} onPress={onTouch} />
        <GameCell position={[0, 2]} onPress={onTouch} />
      </View>
      <View style={styles.grillRow}>
        <GameCell position={[1, 0]} onPress={onTouch} />
        <GameCell position={[1, 1]} onPress={onTouch} />
        <GameCell position={[1, 2]} onPress={onTouch} />
      </View>
      <View style={styles.grillRow}>
        <GameCell position={[2, 0]} onPress={onTouch} />
        <GameCell position={[2, 1]} onPress={onTouch} />
        <GameCell position={[2, 2]} onPress={onTouch} />
      </View>
    </View>
  );
};
const Separator = () => {
  return <View style={styles.separator}></View>;
};
const GameBoard = () => {
  return (
    <Layout level="1" style={styles.environment}>
      <View style={styles.container}>
        <Text style={{ transform: [{ rotate: "180deg" }] }} category="h5">
          Hello Player 2
        </Text>
        <Separator />
        <GameGrill data={{}} />
        <Separator />
        <Text category="h5">Hello Player 1</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  environment: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  separator: {
    height: cellSide * 2,
  },
  grill: {
    height: grillSide,
  },
  grillRow: {
    flexDirection: "row",
    height: cellSide,
  },
  grillCell: {
    height: cellSide,
    width: cellSide,
    borderColor: "green",
    //borderWidth: 3,
    //borderBottomWidth: 3
  },
  cellText: {
    fontSize: 50,
    textAlign: "center",
  },
});
export default GameBoard;
