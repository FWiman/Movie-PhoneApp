import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  searchResults: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
  },

  searchResultItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 200,
    marginTop: 5,
  },

  searchResultItemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default styles;
