import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.43.111:3333" // ip da maquina 
})


export default api