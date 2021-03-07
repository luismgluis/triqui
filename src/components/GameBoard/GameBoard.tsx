import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { Alert, Dimensions, Pressable, StyleSheet, View } from "react-native";
const TAG = "GAME BOARD";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const grillSide = h / 3;
const cellSide = grillSide / 3;

const MyAlert = (msj) => {
  Alert.alert(
    msj,
    "game will be restarted",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false },
  );
};

const GameCell = ({ value = "", position, onPress }) => {
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
        <Text style={styles.cellText}>{value}</Text>
      </Pressable>
    </View>
  );
};

const GameGrill = ({ data = {}, player, changePlayer }) => {
  const onTouch = (position) => {
    const row = position[0];
    const column = position[1];
    let newData = { ...data };
    if (newData[row][column] == "") {
      newData[row][column] = player;
      changePlayer();
    }
  };

  return (
    <View style={styles.grill}>
      <View style={styles.grillRow}>
        <GameCell value={data[0][0]} position={[0, 0]} onPress={onTouch} />
        <GameCell value={data[0][1]} position={[0, 1]} onPress={onTouch} />
        <GameCell value={data[0][2]} position={[0, 2]} onPress={onTouch} />
      </View>
      <View style={styles.grillRow}>
        <GameCell value={data[1][0]} position={[1, 0]} onPress={onTouch} />
        <GameCell value={data[1][1]} position={[1, 1]} onPress={onTouch} />
        <GameCell value={data[1][2]} position={[1, 2]} onPress={onTouch} />
      </View>
      <View style={styles.grillRow}>
        <GameCell value={data[2][0]} position={[2, 0]} onPress={onTouch} />
        <GameCell value={data[2][1]} position={[2, 1]} onPress={onTouch} />
        <GameCell value={data[2][2]} position={[2, 2]} onPress={onTouch} />
      </View>
    </View>
  );
};
const Separator = () => {
  return <View style={styles.separator}></View>;
};
const FloatingButton = ({ right = false, icon = "star", onPress }) => {
  const StarIcon = (props) => <Icon {...props} name={icon} />;
  let customStyles = {};
  if (right) {
    customStyles["right"] = 0;
  }

  return (
    <View style={{ ...styles.FloatingButton, ...customStyles }}>
      <Button
        size="giant"
        status="basic"
        appearance="ghost"
        accessoryLeft={StarIcon}
        onPress={onPress}
      />
    </View>
  );
};
const GameBoard = ({ navigation, route }) => {
  const oData = {
    0: ["", "", ""],
    1: ["", "", ""],
    2: ["", "", ""],
  };
  const [data, setData] = useState(oData);
  const [player, setPlayer] = useState("X");
  const checkWinner = () => {
    function WinnerAlert(msj) {
      MyAlert(msj);
    }
    for (let i = 0; i < Object.keys(data).length; i++) {
      console.log(TAG, i);
      if (
        data[i][0] == data[i][1] &&
        data[i][0] == data[i][2] &&
        data[i][0] !== ""
      ) {
        console.log(TAG, "WIN");
        WinnerAlert("Player with '" + data[i][0] + "' wins! (Horizontal)");
        return;
      }
    }

    let colsWins = [
      { name: "", count: 0 },
      { name: "", count: 0 },
      { name: "", count: 0 },
    ];
    for (const key in data) {
      const playerMarks = data[key];
      for (const nKey in colsWins) {
        const element = colsWins[nKey];
        if (element.name == "" && playerMarks[nKey] !== "") {
          colsWins[nKey].name = playerMarks[nKey];
          colsWins[nKey].count++;
        } else if (
          element.name == playerMarks[nKey] &&
          playerMarks[nKey] !== ""
        ) {
          colsWins[nKey].name = playerMarks[nKey];
          colsWins[nKey].count++;
        }
      }
    }
    for (const key in colsWins) {
      const element = colsWins[key];
      if (element.count >= 3) {
        console.log(TAG, "WIN");
        WinnerAlert("Player with '" + element.name + "' wins! (Vertical)");
        return;
      }
    }

    if (
      data[0][0] == data[1][1] &&
      data[0][0] == data[2][2] &&
      data[0][0] !== ""
    ) {
      console.log(TAG, "WIN");
      WinnerAlert("Player with '" + data[0][0] + "' wins! (Diagonal)");
      return;
    }
    if (
      data[0][2] == data[1][1] &&
      data[0][2] == data[2][0] &&
      data[0][2] !== ""
    ) {
      console.log(TAG, "WIN");
      WinnerAlert("Player with '" + data[0][0] + "' wins! (Diagonal)");
      return;
    }
    //WinnerAlert("Player with '" + "e[0]" + "' wins!");
  };
  const changePlayer = () => {
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    checkWinner();
  };
  const clean = () => {
    console.log(TAG, "clean");
    const newData = { ...oData };
    for (const key in newData) {
      if (!Object.prototype.hasOwnProperty.call(newData, key)) {
        continue;
      }
      newData[key] = ["", "", ""];
    }
    setData(newData);
    changePlayer();
  };
  const goMenu = () => {
    navigation.navigate("Home");
  };

  return (
    <Layout level="1" style={styles.environment}>
      <View style={styles.container}>
        <Text style={{ transform: [{ rotate: "180deg" }] }} category="h5">
          {player === "Y" && "¡Player 2 your turn!"}
        </Text>
        <Separator />
        <GameGrill player={player} changePlayer={changePlayer} data={data} />
        <Separator />
        <Text category="h5"> {player === "X" && "¡Player 1 your turn!"}</Text>
      </View>
      <FloatingButton icon="close" onPress={goMenu} />
      <FloatingButton right={true} icon="flip-2-outline" onPress={clean} />
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
    borderColor: "#0982e6",
    //borderWidth: 3,
    //borderBottomWidth: 3
  },
  cellText: {
    fontSize: 50,
    textAlign: "center",
  },
  FloatingButton: {
    position: "absolute",
    height: 50,
    top: h / 2 - 25,
  },
});
export default GameBoard;
