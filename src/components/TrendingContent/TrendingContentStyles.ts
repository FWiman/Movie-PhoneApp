import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  carouselWrapper: {
    flex: 1,
    marginBottom: "5%",
    width: "100%",
  },

  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  carouselContainerH2: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#F5F5F5",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "black",
    padding: 5,
  },

  carousel: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    width: "100%",
  },

  carouselItem: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  noImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 300,
    backgroundColor: "#ccc",
    color: "#999",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
  },
});
