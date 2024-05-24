import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  showPasswordButton: {
    position: "absolute",
    right: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FF4500",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: "black",
    padding: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffeecc",
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FF4500",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
  loginButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#FF4500", // Adjust the color to match your theme
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
  registerButton: {
    marginTop: 20,
    color: "#FF4500",
    textAlign: "center",
  },

  loadingIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});
