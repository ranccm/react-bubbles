import axios from "axios";

//step one: create axiosWithAuth
// create a new "instance" of the axios module that has the Auth header built-in

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      authorization: token,
    },
  });
};
