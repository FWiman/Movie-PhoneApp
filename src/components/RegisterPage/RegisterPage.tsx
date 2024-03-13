import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import Layout from "../Layout/Layout";
import styles from "./RegisterPageStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const RegisterPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `http://192.168.0.170:5000/api/users/register`,
        {
          email,
          password,
        }
      );
      console.log(response.data);
      Toast.show({
        type: "success",
        text1: "Registration successful",
        text2: "You have been logged in!",
        visibilityTime: 4000,
      });
    } catch (error) {
      console.error("Registration failed: ", error.response.data);
    }
  };

  return (
    <Layout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
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
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!confirmPasswordVisible}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            <Icon
              name={confirmPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.registerButton}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default RegisterPage;
