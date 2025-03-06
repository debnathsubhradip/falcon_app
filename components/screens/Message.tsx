import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
// import PostCard from "../modules/PostCard";
import { useState } from "react";

const handlePostPress = (title: string) => {
  console.log(`Post clicked: ${title}`);
};

function Message(props: any) {
  const [userName, setUserName] = useState<string>("Subhradip");

  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>Message {userName}!</Text>
        <Text>This is the Message Page from Falcon</Text>
      </View>
    </View>
  );
}

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: "100%",
  },
  titleCard: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  titleText: { color: "black", fontWeight: "bold", fontSize: 30 },
  mainCard: {
    flex: 1,
    maxHeight: "auto",
    minWidth: "100%",
    backgroundColor: "#000000",
    borderBottomWidth: 1,

    borderBottomColor: "#ccc",
    padding: 10,
  },
});
