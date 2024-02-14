import { StyleSheet } from "react-native";
export default StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    marginTop: 48,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: "100%",
    backgroundColor: "transparent",
    marginTop: 10,
    paddingHorizontal: 10,
    // Add more styling as per your app's theme
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    height: 54,
    borderWidth: 1,
    borderColor: "#22585a",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fbf0d4",
    color: "#22585a",
    marginBottom: 10,
    marginLeft: -10,
  },
  animatedView: {
    position: "absolute",
    left: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  // Add more styles if needed
});
