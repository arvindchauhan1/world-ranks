import axios from "axios";

export const baseUrl ="https://restcountries.com/v3.1/"

export const http = axios.create({
  baseURL: baseUrl,
});