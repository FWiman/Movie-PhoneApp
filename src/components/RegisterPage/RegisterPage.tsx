import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import Layout from "../Layout/Layout";
import styles from "./RegisterPageStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PasswordStrengthIndicator from "../PasswordStrengthIndicator/PasswordStrengthIndicator";
import zxcvbn from "zxcvbn";

const RegisterPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = (password) => {
    setPassword(password);
    const result = zxcvbn(password);
    setPasswordStrength(result.score);
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setModalMessage("Passwords do not match.");
      setModalVisible(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `http://192.168.0.170:5000/api/users/register`,
        {
          email,
          password,
        }
      );
      console.log(response.data);
      const token = response.data.token;

      await AsyncStorage.setItem("userToken", token);

      setModalMessage("Registration successful! You will now be logged in :)");
      setModalVisible(true);
    } catch (error) {
      console.error("Registration failed: ", error.response.data);
      setModalMessage(`Registration failed: User already exists.`);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setModalVisible(true);
      });
    }
  };

  return (
    <Layout navigation={navigation}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
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
            onChangeText={handlePasswordChange}
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
        <PasswordStrengthIndicator passwordStrength={passwordStrength} />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              confirmPassword &&
                password !== confirmPassword &&
                styles.inputError,
            ]}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!confirmPasswordVisible}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity
              style={[styles.modalButton, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("TrendingContent");
              }}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Layout>
  );
};

export default RegisterPage;
