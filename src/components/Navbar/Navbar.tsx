import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./NavbarStyles";

const Navbar = ({ navigation }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [input, setInput] = useState("");

  const fullNavbarWidth = Dimensions.get("window").width - 20; // Adjust for padding
  const iconSpace = 40; // Space for the icon
  const inputWidth = useRef(new Animated.Value(iconSpace)).current;

  useEffect(() => {
    Animated.timing(inputWidth, {
      toValue: isSearchActive ? fullNavbarWidth : iconSpace,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isSearchActive, fullNavbarWidth]);

  const toggleSearchInput = () => {
    setIsSearchActive((prev) => !prev);
  };

  const handleSearchSubmit = async () => {
    navigation.navigate("SearchMovies", { query: input });
  };

  const handleCloseSearch = () => {
    setIsSearchActive(false);
    setInput("");
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../../assets/NavbarBackground.png")}
    >
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={toggleSearchInput}
          style={styles.iconContainer}
        >
          <Icon name="search" size={30} color="#fbf0d4" />
        </TouchableOpacity>
        <Animated.View style={[styles.animatedView, { width: inputWidth }]}>
          {isSearchActive ? (
            <View style={styles.searchInputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Search..."
                autoFocus={true}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={handleSearchSubmit}
                returnKeyType="search"
              />
              <TouchableOpacity
                onPress={handleCloseSearch}
                style={styles.closeIconContainer}
              >
                <Icon name="close" size={25} color="black" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ width: 10, height: 10 }} /> // Placeholder for layout
          )}
        </Animated.View>
        <TouchableOpacity
          onPress={() => {} /* Handle menu press */}
          style={styles.iconContainer}
        >
          <Icon name="menu" size={30} color="#fbf0d4" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Navbar;
