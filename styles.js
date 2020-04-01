import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width) / 100;
const screenHeight = Math.round(Dimensions.get("window").height) / 100;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A6D785",
    alignItems: "center",
    justifyContent: "center"
  },
  myText: {
    top: screenHeight * -45,
    backgroundColor: "#fff",
    left: screenWidth * -7,
    borderWidth: 1.2,
    borderColor: "#6ebadd",
    margin: 1,
    padding: 10,
    width: "82%",
    borderRadius: 12
  },
  checkbox: {},
  add: {
    width: screenWidth * 12,
    borderRadius: 50,
    backgroundColor: "#F5651C",
    height: screenHeight * 8,
    top: screenHeight * -37,
    left: screenWidth * 42
  }
});
