import { StyleSheet } from "react-native";
export default StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    marginTop: 48,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
    // Add more styling as per your app's theme
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  searchInputContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  closeIconContainer: {
    position: "absolute",
    right: 20,
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
