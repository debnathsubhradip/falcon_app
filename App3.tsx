import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Modal from "./components/modules/Modal";
import TopBar from "./components/modules/TopBar";
import HomeScreen from "./components/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topbarContainer}>
        <TopBar />
      </View>

      <View style={styles.containerMain}>
        <ScrollView style={styles.scrollContainer}>
          <HomeScreen />
        </ScrollView>
      </View>

      <View style={styles.modalContainer}>
        <Modal />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topbarContainer: {
    height: 60,
    zIndex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  containerMain: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContainer: {
    flex: 1,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10, // Ensuring it stays on top
    elevation: 10, // For Android shadow stacking
    backgroundColor: "rgba(0,0,0,0.5)", // Adding overlay effect
  },
});
