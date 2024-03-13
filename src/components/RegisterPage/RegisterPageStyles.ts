import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50,
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#ffeecc",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 4,
    textShadowColor: "#cb6350",
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
    borderColor: "#cb6350",
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
  registerButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#cb6350",
    borderColor: "#cb6350",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffeecc",
    fontSize: 18,
    fontWeight: "500",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});
