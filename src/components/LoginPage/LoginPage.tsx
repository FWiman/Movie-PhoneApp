import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { login } from "../../services/Authentication Service/authService";
import styles from "./LoginPageStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Layout from "../Layout/Layout";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      console.log("Logging in...");
      setIsLoading(true);
      await login(email, password);
      navigation.navigate("TrendingContent");
      console.log("Logged in successfully");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout navigation={navigation}>
      <View style={styles.container}>
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="#ffeecc"
            style={styles.loadingIndicator}
          />
        )}
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* Register Button */}
        <TouchableOpacity onPress={() => navigation.navigate("RegisterPage")}>
          <Text style={styles.registerButton}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.registerButton}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default LoginPage;
