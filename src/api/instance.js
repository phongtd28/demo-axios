import axios from "axios";

const instance = axios.create({
  baseURL: "https://60f7c7909cdca00017454fc0.mockapi.io",
});
export default instance;
