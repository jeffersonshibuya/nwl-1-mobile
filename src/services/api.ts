import axios from "axios";

const api = axios.create({ baseURL: "https://e-coleta-app.herokuapp.com" });

export default api;
