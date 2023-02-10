import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-b.onrender.com/", //later change the base url to backend deployed link http://localhost:8000
});

export default instance;
