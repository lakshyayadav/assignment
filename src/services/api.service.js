import axios from "axios";
const BASE_URL = "https://backendlakshya.herokuapp.com/";

const apiService = axios.create({ baseURL: BASE_URL });

export async function register(data) {
  try {
    return apiService.post("/register", data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
