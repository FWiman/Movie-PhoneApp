import axios from "axios";
import { MONGO_URI } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authAPI = axios.create({
  baseURL: MONGO_URI,
});

export const register = async (email: string, password: string) => {
  const response = await authAPI.post("/register", { email, password });
  const { token } = response.data;

  await AsyncStorage.setItem("userToken", token);
  authAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await authAPI.post("/login", { email, password });
  const { token } = response.data;

  await AsyncStorage.setItem("userToken", token);
  authAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return response.data;
};

export const logout = async () => {
  await AsyncStorage.removeItem("userToken");
  authAPI.defaults.headers.common["Authorization"] = "";
};

export default authAPI;
