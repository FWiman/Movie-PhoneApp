import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  movieCard: {
    flex: 1,
    width: 100, // 70% of screen width
    borderRadius: 10,
    backgroundColor: "red",
    overflow: "hidden",
  },
  movieImage: {
    width: "100%",
    height: "100%", // keeping the aspect ratio of the image
  },
  providerLogoContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    flexDirection: "row",
  },

  // NO IMAGE STYLE HANDLER
  noImageContainer: {
    width: "100%",
    height: width * 0.6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCC",
  },
  noImageText: {
    color: "#999",
    fontSize: 18,
    fontWeight: "bold",
  },
});
