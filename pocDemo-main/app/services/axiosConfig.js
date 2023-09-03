import axios from "axios";

export const searchController = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_URL_BASE,
  baseURL:"https://reqres.in",
});