import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchMovies from "./src/components/SearchMovies/SearchMovies";
import TrendingContent from "./src/components/TrendingContent/TrendingContent";
import LoginPage from "./src/components/LoginPage/LoginPage";
import RegisterPage from "./src/components/RegisterPage/RegisterPage";

const Stack = createStackNavigator(); // Create a Stack navigator

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPage">
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
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
          <Stack.Screen
            name="RegisterPage"
            component={RegisterPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
