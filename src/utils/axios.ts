import axios from "axios";

axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_API_URI,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const axiosPrivateInstance = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_API_URI,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})