import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

function SignUp(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>Sign Up</Text>

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

        <View style={styles.totalInputButton}>
          <View style={styles.buttonInputBox}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonInputBox}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  titleCard: {
    backgroundColor: "#000000",
    minHeight: "40%",
    maxWidth: "80%",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  titleText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    flex: 1,
  },
  textInputBoxView: {
    flex: 2,
    marginTop: 10,
    backgroundColor: "#ffffff",
    minWidth: "90%",
    maxHeight: "20%",
    borderRadius: 20,
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
  },
  totalInputButton: {
    flexDirection: "row",
    // flex: 1,
    maxHeight: "auto",
    padding: 10,
    // backgroundColor: "red",
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
