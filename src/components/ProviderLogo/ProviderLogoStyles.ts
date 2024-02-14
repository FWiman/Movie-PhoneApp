import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 2,
    right: 2,
    display: "flex",
    flexDirection: "column",
  },
  modalContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 8,
    borderColor: "#ffeccc",
    borderWidth: 2,
  },
  modalLogo: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 8,
    borderColor: "#ffeccc",
    borderWidth: 1.5,
  },
});

export default styles;
