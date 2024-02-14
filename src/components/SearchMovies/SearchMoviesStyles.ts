import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },

  searchResults: {
    flex: 1,
    padding: 10,
    width: "100%",
  },

  searchResultItem: {
    width: 135,
    height: 200,
    flexDirection: "row",
    padding: 15,
  },

  searchResultItemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default styles;
