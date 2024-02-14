import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchMovies from "./src/components/SearchMovies/SearchMovies";
import TrendingContent from "./src/components/TrendingContent/TrendingContent";

const Stack = createStackNavigator(); // Create a Stack navigator

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TrendingContent">
        <Stack.Screen
          name="TrendingContent"
          component={TrendingContent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchMovies"
          component={SearchMovies}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
