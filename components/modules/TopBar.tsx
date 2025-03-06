import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TopBar(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.leftBlock}>
          <View style={styles.buttonStyle1}>
            {/* <Text>B1</Text> */}
            <Image
              style={styles.buttonImageStyle1}
              source={require("../../assets/falcon_light_512.png")}
            ></Image>
          </View>
        </View>

        {/* <View style={styles.buttonStyle2}>
          <Text>B2</Text>
        </View>
        <View style={styles.buttonStyle3}>
          <Text>B3</Text>
        </View> */}
        <View style={styles.rightBlock}>
          <View style={styles.buttonStyle4}>
            <Ionicons
              name="person-circle-outline"
              size={32}
              color="#ffffff"
            ></Ionicons>
            {/* <Image
              style={styles.buttonImageStyle4}
              source={require("../assets/icon.png")}
            ></Image> */}
            {/* <Text>B4</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
}

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 10,
    backgroundColor: "#000000",
    borderBottomColor: "#ccc",
    borderWidth: 2,
    elevation: 5,
  },
  topBar: {
    // flex: 1,
    paddingTop: 30,
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    // marginBottom: 10,
    // borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#727272",
  },
  buttonStyle1: {
    // backgroundColor: "#cb0000",
    flex: 1,
    maxHeight: "auto",
    maxWidth: "auto",
    justifyContent: "center",
  },
  buttonStyle4: {
    // backgroundColor: "violet",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#727272",
  },
  leftBlock: {
    flex: 1,
    alignItems: "flex-start",
    paddingStart: 10,
    // height: "auto",
    maxHeight: "auto",
    // backgroundColor: "yellow",
  },
  rightBlock: {
    flex: 1,
    alignItems: "flex-end",
    paddingEnd: 10,
  },
  buttonImageStyle4: {
    // height: 20,
    // width: 20,
    flex: 1,
    aspectRatio: 1,
    borderRadius: 50,
  },
  buttonImageStyle1: {
    flex: 1,
    maxWidth: "70%",
    maxHeight: "90%",
    // backgroundColor: "#8459fc",
    // aspectRatio: 1,
    // borderRadius: 50,
  },
});
