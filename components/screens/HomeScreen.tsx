import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import PostCard from "../modules/PostCard";
import { useState } from "react";

const posts = [
  {
    title: "Post Title 1",
    description: "This is a brief description of the post.",
    imageUrl:
      "https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg",
  },
  {
    title: "Post Title 2",
    description: "Another brief description.",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Post Title 3",
    description: "Another brief description.",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Post Title 4",
    description: "Another brief description.",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Post Title 5",
    description: "Another brief description.",
    imageUrl: "https://example.com/image2.jpg",
  },
  // Add more posts here
];

const handlePostPress = (title: string) => {
  console.log(`Post clicked: ${title}`);
};

function HomeScreen(props: any) {
  const [userName, setUserName] = useState<string>("Subhradip");

  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>Welcome {userName}!</Text>
        <Text>Here are the latest feeds from Falcon</Text>
      </View>

      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          onPress={() => handlePostPress(post.title)}
        />
      ))}
    </View>
  );
}

export default HomeScreen;

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
