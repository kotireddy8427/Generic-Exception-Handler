import axios from "axios";
import { handleError } from "../utils/errorHandler";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";
const TIMEOUT = 10000;

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor: normalize errors
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Normalize error using handleError
    const normalized = handleError(error);
    return Promise.reject(normalized);
  }
);

export default httpClient;
