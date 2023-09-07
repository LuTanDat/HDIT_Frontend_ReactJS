import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password }); // { email, password } la cu phap viet tat của {email:email, password:password}
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

export { handleLoginAPI, getAllUsers };
