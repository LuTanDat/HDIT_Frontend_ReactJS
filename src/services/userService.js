import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password }); // { email, password } la cu phap viet tat của {email:email, password:password}
};

export { handleLoginAPI };
