import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";

function Login(props: any) {
  return (
    <View style={styles.pageStyle}>
      <Image
        source={require("../../assets/falcon_icon_512.png")}
        style={styles.headerImage}
      ></Image>
      <View style={styles.container}>
        <View style={styles.titleCard}>
          <Text style={styles.titleText}>Login</Text>
        </View>
        <View style={styles.allTextInputBoxView}>
          <View style={styles.textInputBoxView}>
            <TextInput
              style={styles.textInputBox}
              placeholder="Enter your Username"
            ></TextInput>
          </View>

          <View style={styles.textInputBoxView}>
            <TextInput
              style={styles.textInputBox}
              placeholder="Enter your Password"
            ></TextInput>
          </View>
        </View>
        <View style={styles.totalInputButton}>
          <View style={styles.buttonInputBox}>
            <TouchableOpacity style={styles.buttonTopacText}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonInputBox}>
            <TouchableOpacity style={styles.buttonTopacText}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  headerImage: {
    flex: 1,
    maxHeight: "20%",
    maxWidth: "70%",
    resizeMode: "contain",
    scaleX: 0.5,
    scaleY: 0.5,
    // backgroundColor: "red",
  },
  container: {
    flex: 1,
    // backgroundColor: "#eb2929",
    maxHeight: "50%",
    maxWidth: "80%",
    // alignItems: "center",
    padding: 20,
    borderRadius: 10,
    // elevation: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
  },
  titleCard: {
    flex: 1,
    maxHeight: "30%",
    minWidth: "100%",
    paddingTop: "15%",
    marginBottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    // alignItems: "center",
    // backgroundColor: "#ae2727",
  },
  titleText: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
    // flex: 1,
    // backgroundColor: "red",
    maxHeight: "auto",
  },
  allTextInputBoxView: {
    flex: 1,
    // paddingTop: 50,
    maxHeight: "40%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  textInputBoxView: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#ffffff",
    minWidth: "90%",
    maxWidth: "90%",
    minHeight: 40,
    maxHeight: 40,
    // maxHeight: "20%",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textInputBox: {
    // flex: 2,
    paddingStart: 15,
    paddingEnd: 15,
  },
  buttonInputBox: {
    flex: 1,
    margin: 5,
    backgroundColor: "#ffffff",
    // minWidth: "90%",
    maxHeight: "auto",
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#ccc",
  },
  totalInputButton: {
    flexDirection: "row",
    minHeight: "5%",
    maxHeight: "auto",
    padding: 10,
    marginTop: 30,
    // backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonTopacText: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonText: {
    paddingStart: 10,
    paddingEnd: 10,
    padding: 5,
  },
});
