import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-8135b-default-rtdb.firebaseio.com/",
});

export default instance;
