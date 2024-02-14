import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "black",
    borderRadius: 10,
  },
  closeModal: {
    backgroundColor: "transparent",
    fontSize: 22,
  },
  movieInfoModalOverlay: {
    width: "100%",
    zIndex: 999,
  },

  closeButtonContainer: {
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.7,
    borderRadius: 50,
    top: 20,
    left: 20,
    width: 35,
    height: 35,
    zIndex: 1,
  },

  closeButton: {
    fontSize: 30,
    fontWeight: "normal",
    backgroundColor: "transparent",
    color: "whitesmoke",
    top: -3,
    left: 10,
  },
  movieInfoHeader: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 5,
  },
  movieTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#cb6350",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "#e3aa86",
    margin: 5,
  },
  releaseDate: {
    fontSize: 12,
    color: "#cb6350",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "#e3aa86",
  },

  moviePosterContainer: {
    width: "100%",
    height: 500,
    position: "relative",
  },

  moviePoster: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderColor: "#ffeccc",
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 10,
  },

  gradient: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  movieDetails: {
    padding: 10,
  },
  overview: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
    color: "#cb6350",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "#e3aa86",
  },

  ratingContainer: {
    backgroundColor: "#C41E3A",
    padding: 10,
    borderRadius: 15,
    width: 104,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffeccc",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "black",
  },
  footer: {
    marginBottom: 100,
  },
});

export default styles;
