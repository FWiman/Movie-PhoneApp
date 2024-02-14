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

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../../assets/NavbarBackground.png")}
    >
      <View style={styles.navbar}>
        <Animated.View style={[styles.animatedView, { width: inputWidth }]}>
          {isSearchActive ? (
            <TextInput
              style={styles.input}
              placeholder="Search..."
              autoFocus={true}
              value={input}
              onChangeText={setInput}
              onSubmitEditing={handleSearchSubmit}
              returnKeyType="search"
            />
          ) : (
            <View style={{ width: 10, height: 10 }} /> // Placeholder for layout
          )}
          <TouchableOpacity
            onPress={toggleSearchInput}
            style={styles.iconContainer}
          >
            <Icon name="search" size={30} color="#fbf0d4" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default Navbar;
