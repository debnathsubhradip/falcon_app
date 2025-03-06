import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Modal(props: any) {
  const [menuModal, setMenuModal] = React.useState(props.menuModal);
  // handleSetMenuID(menuModal)
  const [menuIcon1, setMenuIcon1] = React.useState<
    | "paper-plane-outline"
    | "albums-outline"
    | "home-outline"
    | "megaphone-outline"
    | "menu-outline"
    | "filter"
    | "paper-plane"
    | "albums"
    | "home"
    | "megaphone"
    | "menu"
    | "key"
  >("paper-plane-outline");
  const [menuIcon2, setMenuIcon2] = React.useState<
    | "paper-plane-outline"
    | "albums-outline"
    | "home-outline"
    | "megaphone-outline"
    | "menu-outline"
    | "filter"
    | "paper-plane"
    | "albums"
    | "home"
    | "megaphone"
    | "menu"
    | "key"
  >("albums-outline");
  const [menuIcon3, setMenuIcon3] = React.useState<
    | "paper-plane-outline"
    | "albums-outline"
    | "home-outline"
    | "megaphone-outline"
    | "menu-outline"
    | "filter"
    | "paper-plane"
    | "albums"
    | "home"
    | "megaphone"
    | "menu"
    | "key"
  >("home");
  const [menuIcon4, setMenuIcon4] = React.useState<
    | "paper-plane-outline"
    | "albums-outline"
    | "home-outline"
    | "megaphone-outline"
    | "menu-outline"
    | "filter"
    | "paper-plane"
    | "albums"
    | "home"
    | "megaphone"
    | "menu"
    | "key"
  >("megaphone-outline");
  const [menuIcon5, setMenuIcon5] = React.useState<
    | "paper-plane-outline"
    | "albums-outline"
    | "home-outline"
    | "megaphone-outline"
    | "menu-outline"
    | "filter"
    | "paper-plane"
    | "albums"
    | "home"
    | "megaphone"
    | "menu"
    | "key"
  >("menu-outline");

  function handleSetMenuMondal(menuModal: number) {
    setMenuModal(menuModal);
    console.log(`Menu Modal: ${menuModal}`);
    handleSetMenuID(menuModal);
  }

  function handleSetMenuID(menuID: number) {
    if (menuID === 1) {
      setMenuIcon1("paper-plane");
      setMenuIcon2("albums-outline");
      setMenuIcon3("home-outline");
      setMenuIcon4("megaphone-outline");
      setMenuIcon5("menu-outline");
    } else if (menuID === 2) {
      setMenuIcon1("paper-plane-outline");
      setMenuIcon2("albums");
      setMenuIcon3("home-outline");
      setMenuIcon4("megaphone-outline");
      setMenuIcon5("menu-outline");
    } else if (menuID === 3) {
      setMenuIcon1("paper-plane-outline");
      setMenuIcon2("albums-outline");
      setMenuIcon3("home");
      setMenuIcon4("megaphone-outline");
      setMenuIcon5("menu-outline");
    } else if (menuID === 4) {
      setMenuIcon1("paper-plane-outline");
      setMenuIcon2("albums-outline");
      setMenuIcon3("home-outline");
      setMenuIcon4("megaphone");
      setMenuIcon5("menu-outline");
    } else if (menuID === 5) {
      setMenuIcon1("paper-plane-outline");
      setMenuIcon2("albums-outline");
      setMenuIcon3("home-outline");
      setMenuIcon4("megaphone-outline");
      setMenuIcon5("menu");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.modalBar}>
        <View style={styles.buttonStyle1}>
          <TouchableOpacity onPress={() => handleSetMenuMondal(1)}>
            <Ionicons name={menuIcon1} size={32} color="#ffffff" />
          </TouchableOpacity>
          {/* <Text>Contact</Text> */}
        </View>
        <View style={styles.buttonStyle2}>
          <TouchableOpacity onPress={() => handleSetMenuMondal(2)}>
            <Ionicons name={menuIcon2} size={32} color="#ffffff" />
          </TouchableOpacity>
          {/* <Text>Feed</Text> */}
        </View>
        <View style={styles.buttonStyle3}>
          <TouchableOpacity onPress={() => handleSetMenuMondal(3)}>
            <Ionicons name={menuIcon3} size={32} color="#ffffff" />
          </TouchableOpacity>
          {/* <Text>B2</Text> */}
        </View>
        <View style={styles.buttonStyle4}>
          <TouchableOpacity onPress={() => handleSetMenuMondal(4)}>
            <Ionicons name={menuIcon4} size={32} color="#ffffff" />
          </TouchableOpacity>
          {/* <Text>B3</Text> */}
        </View>
        <View style={styles.buttonStyle5}>
          <TouchableOpacity onPress={() => handleSetMenuMondal(5)}>
            <Ionicons name={menuIcon5} size={32} color="#ffffff" />
          </TouchableOpacity>
          {/* <Text>Menu</Text> */}
        </View>
      </View>
    </View>
  );
}

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "flex-end",
    elevation: 5,
  },
  modalBar: {
    flex: 1,
    backgroundColor: "#000000",
    maxHeight: "auto",
    width: "100%",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingEnd: 20,
    paddingStart: 20,
    // marginBottom: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  buttonStyle1: {
    // backgroundColor: "red",
    maxHeight: "auto",
    maxWidth: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonStyle2: {
    // backgroundColor: "#ffffff",
    maxHeight: "auto",
    maxWidth: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonStyle3: {
    // backgroundColor: "blue",
    maxHeight: "auto",
    maxWidth: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonStyle4: {
    // backgroundColor: "violet",
    maxHeight: "auto",
    maxWidth: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonStyle5: {
    // backgroundColor: "violet",
    maxHeight: "auto",
    maxWidth: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
