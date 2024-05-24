import { ImageBackground, View, StyleSheet } from "react-native";
import Navbar from "../Navbar/Navbar";
import React from "react";

const Layout = ({ children, navigation }) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../../assets/DarkGreyAbstract.jpg")}
    >
      <View style={styles.container}>
        <Navbar navigation={navigation} />
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default Layout;
