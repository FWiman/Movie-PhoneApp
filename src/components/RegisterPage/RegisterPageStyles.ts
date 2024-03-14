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
    textShadowColor: "#356B68",
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
    borderColor: "#356B68",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  showPasswordButton: {
    position: "absolute",
    right: 10,
  },
  registerButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#cb6350",
    borderColor: "#356B68",
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

  // MODAL STYLES
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "#ffeecc",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#356B68",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    color: "#356B68",
    marginBottom: 20,
  },
  modalButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#cb6350",
    borderColor: "#356B68",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonClose: {
    backgroundColor: "#356B68",
  },

  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },

  loadingContainer: {
    zIndex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,255.7)",
  },
});
