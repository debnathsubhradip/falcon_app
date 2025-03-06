import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "./components/modules/Modal";
import TopBar from "./components/modules/TopBar";

import HomeScreen from "./components/screens/HomeScreen";
import Message from "./components/screens/Message";
import Announcements from "./components/screens/Announcements";
import Menu from "./components/screens/Menu";
import Notifications from "./components/screens/Notifications";

import SignUp from "./components/signup_login/signup";

import { useState } from "react";

export default function App() {
  // This state is used to store the menuID
  const [menuModal, setMenuModal] = useState(3);

  // This state is used to store the scroll pages
  const [scrollPages, setScrollPages] = useState(<HomeScreen />);

  // This function sends the menuID to the parent component
  function handleSetMainMenuID(menuID: number) {
    setMenuModal(menuID);
    handleSetScrollPages(menuID);
  }
  // This function sets the scroll pages
  const handleSetScrollPages = (menu: any) => {
    if (menu === 1) {
      setScrollPages(<Message />);
    } else if (menu === 2) {
      setScrollPages(<Announcements />);
    } else if (menu === 3) {
      setScrollPages(<HomeScreen />);
    } else if (menu === 4) {
      setScrollPages(<Notifications />);
    } else if (menu === 5) {
      setScrollPages(<Menu />);
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.topbarContainer}>
        <View style={styles.topbarContainer1}>
          <TopBar />
        </View>
      </View>

      <View style={styles.containerScrollModal}>
        <View style={styles.containerMain}>
          <ScrollView style={styles.scrollContainer}>
            {scrollPages}
            <View style={styles.vacantContainer}></View>
          </ScrollView>
        </View>
        <View style={styles.modalContainer}>
          <Modal
            menuModal={menuModal}
            handleSetMainMenuID={handleSetMainMenuID}
          />
        </View>
      </View> */}

      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  topbarContainer: {
    flex: 1.2,
    // position: "absolute",
    zIndex: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  topbarContainer1: {
    flex: 1,
    // position: "absolute",
    // zIndex: 2,
  },
  containerScrollModal: {
    flex: 9,
    flexDirection: "column",
    position: "relative",
    zIndex: 1,
  },
  containerMain: {
    flex: 10,
    backgroundColor: "#000000",
    minHeight: "auto",
    maxHeight: "auto",
  },
  modalContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    minWidth: "100%",
    minHeight: "10%",
    zIndex: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  vacantContainer: {
    flex: 1,
    height: 80,
    // position: "static",
    // zIndex: 10,
  },

  scrollContainer: {
    flex: 9,
  },
});
