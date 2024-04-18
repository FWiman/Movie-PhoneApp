import axios from "axios";
import { MONGO_URI } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiServer = "http://localhost:5000";

const authAPI = axios.create({
  baseURL: apiServer,
});

export const register = async (email: string, password: string) => {
  try {
    const response = await authAPI.post("/register", { email, password });
    const { token } = response.data;

    await AsyncStorage.setItem("userToken", token);
    authAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Email already exists. Please try again.");
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await authAPI.post("/login", { email, password });
    const { token } = response.data;

    await AsyncStorage.setItem("userToken", token);
    authAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return response.data;
  } catch (error) {
    console.error("HERE I AM", error);
    throw new Error("Invalid email or password. Please try again.");
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem("userToken");
  authAPI.defaults.headers.common["Authorization"] = "";
};

export default authAPI;
