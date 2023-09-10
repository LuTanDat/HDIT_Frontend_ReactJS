import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password }); // { email, password } la cu phap viet tat của {email:email, password:password}
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
  return axios.post(`/api/create-new-user`, data);
};

export { handleLoginAPI, getAllUsers, createNewUserService };
