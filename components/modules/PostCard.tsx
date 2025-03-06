import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onPress: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  imageUrl,
  onPress,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSource, setImageSource] = useState<{ uri: string } | null>(null);

  useEffect(() => {
    const loadAsyncImage = async () => {
      try {
        setImageSource({ uri: imageUrl });
        setImageLoaded(true);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    loadAsyncImage();
  }, [imageUrl]);

  return (
    <View style={styles.cardLayout}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        {!imageLoaded ? (
          <ActivityIndicator
            size="large"
            color="#FF6347"
            style={styles.loader}
          />
        ) : (
          <Image source={imageSource!} style={styles.cardImage} />
        )}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
          <View style={styles.iconRow}>
            <Ionicons name="heart-outline" size={24} color="#FF6347" />
            <Ionicons name="chatbubble-outline" size={24} color="#4CAF50" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  cardLayout: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
  },
  card: {
    minWidth: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  loader: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
