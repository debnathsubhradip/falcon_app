import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Modal(props: any) {
  // This state is used to store the menuID
  const [menuModal, setMenuModal] = React.useState(props.menuModal);

  // This function sends the menuID to the parent component
  function handleSetMainMenuID(menuID: number) {
    props.handleSetMainMenuID(menuID);
    console.log(`Child Component Menu ID: ${menuID}`);
  }

  // These states are used to store the menu icons and button colors
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

  const [buttonColor1, setButtonColor1] = React.useState("white");
  const [buttonColor2, setButtonColor2] = React.useState("white");
  const [buttonColor3, setButtonColor3] = React.useState("black");
  const [buttonColor4, setButtonColor4] = React.useState("white");
  const [buttonColor5, setButtonColor5] = React.useState("white");

  const [selectButton1, setSelectButton1] = React.useState<boolean>(false);
  const [selectButton2, setSelectButton2] = React.useState<boolean>(false);
  const [selectButton3, setSelectButton3] = React.useState<boolean>(true);
  const [selectButton4, setSelectButton4] = React.useState<boolean>(false);
  const [selectButton5, setSelectButton5] = React.useState<boolean>(false);

  // This function changes the menuID and updates the menu icons and button colors
  function handleSetMenuModal(menuModal: number) {
    setMenuModal(menuModal);
    handleSetMenuID(menuModal);
    handleSetMainMenuID(menuModal);
  }

  // This function updates the menu icons and button colors
  function handleSetMenuID(menuID: number) {
    if (menuID === 1) {
      setMenuIcon1("paper-plane");
      setMenuIcon2("albums-outline");
      setMenuIcon3("home-outline");
      setMenuIcon4("megaphone-outline");
      setMenuIcon5("menu-outline");

      setButtonColor1("black");
      setButtonColor2("white");
      setButtonColor3("white");
      setButtonColor4("white");
      setButtonColor5("white");

      setSelectButton1(true);
      setSelectButton2(false);
      setSelectButton3(false);
      setSelectButton4(false);
      setSelectButton5(false);
    } else if (menuID === 2) {
      setMenuIcon1("paper-plane-outline");
      setMenuIcon2("albums");
      setMenuIcon3("home-outline");
      setMenuIcon4("megaphone-outline");
      setMenuIcon5("menu-outline");

      setButtonColor1("white");
      setButtonColor2("black");
      setButtonColor3("white");
      setButtonColor4("white");
      setButtonColor5("white");

      setSelectButton1(false);
      setSelectButton2(true);
      setSelectButton3(false);
      setSelectButton4(false);
      setSelectButton5(false);
    } else if (menuID === 3) {
      setMenuIcon1("paper-plane-outline");
      setMenuIcon2("albums-outline");
      setMenuIcon3("home");
      setMenuIcon4("megaphone-outline");
      setMenuIcon5("menu-outline");

      setButtonColor1("white");
      setButtonColor2("white");
      setButtonColor3("black");
      setButtonColor4("white");
      setButtonColor5("white");

      setSelectButton1(false);
      setSelectButton2(false);
      setSelectButton3(true);
      setSelectButton4(false);
      setSelectButton5(false);
    } else if (menuID === 4) {
      setMenuIcon1("paper-plane-outline");
      setMenuIcon2("albums-outline");
      setMenuIcon3("home-outline");
      setMenuIcon4("megaphone");
      setMenuIcon5("menu-outline");

      setButtonColor1("white");
      setButtonColor2("white");
      setButtonColor3("white");
      setButtonColor4("black");
      setButtonColor5("white");

      setSelectButton1(false);
      setSelectButton2(false);
      setSelectButton3(false);
      setSelectButton4(true);
      setSelectButton5(false);
    } else if (menuID === 5) {
      setMenuIcon1("paper-plane-outline");
      setMenuIcon2("albums-outline");
      setMenuIcon3("home-outline");
      setMenuIcon4("megaphone-outline");
      setMenuIcon5("menu");

      setButtonColor1("white");
      setButtonColor2("white");
      setButtonColor3("white");
      setButtonColor4("white");
      setButtonColor5("black");

      setSelectButton1(false);
      setSelectButton2(false);
      setSelectButton3(false);
      setSelectButton4(false);
      setSelectButton5(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.modalBar}>
        <View
          style={
            selectButton1
              ? styles.buttonStyleSelected
              : styles.buttonStyleUnselected
          }
        >
          <TouchableOpacity onPress={() => handleSetMenuModal(1)}>
            <Ionicons name={menuIcon1} size={32} color={buttonColor1} />
          </TouchableOpacity>
        </View>
        <View
          style={
            selectButton2
              ? styles.buttonStyleSelected
              : styles.buttonStyleUnselected
          }
        >
          <TouchableOpacity onPress={() => handleSetMenuModal(2)}>
            <Ionicons name={menuIcon2} size={32} color={buttonColor2} />
          </TouchableOpacity>
        </View>
        <View
          style={
            selectButton3
              ? styles.buttonStyleSelected
              : styles.buttonStyleUnselected
          }
        >
          <TouchableOpacity onPress={() => handleSetMenuModal(3)}>
            <Ionicons name={menuIcon3} size={32} color={buttonColor3} />
          </TouchableOpacity>
        </View>
        <View
          style={
            selectButton4
              ? styles.buttonStyleSelected
              : styles.buttonStyleUnselected
          }
        >
          <TouchableOpacity onPress={() => handleSetMenuModal(4)}>
            <Ionicons name={menuIcon4} size={32} color={buttonColor4} />
          </TouchableOpacity>
        </View>
        <View
          style={
            selectButton5
              ? styles.buttonStyleSelected
              : styles.buttonStyleUnselected
          }
        >
          <TouchableOpacity onPress={() => handleSetMenuModal(5)}>
            <Ionicons name={menuIcon5} size={32} color={buttonColor5} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonStyleSelected: {
    backgroundColor: "#ffffff",
    maxHeight: "auto",
    maxWidth: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    padding: 5,
  },
  buttonStyleUnselected: {
    backgroundColor: "#000",
    maxHeight: "auto",
    maxWidth: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    padding: 5,
  },
});
