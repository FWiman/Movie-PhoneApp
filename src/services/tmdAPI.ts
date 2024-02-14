import axios from "axios";
import { REACT_NATIVE_API_KEY } from "@env";

const API_KEY = REACT_NATIVE_API_KEY;

const tmdbAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default tmdbAPI;
