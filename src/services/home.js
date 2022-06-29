import axios from "axios";

export function getHomes() {
  return axios
    .get("http://localhost:3000/home")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}

export function addHome(detail) {
  return axios
    .post("http://localhost:3000/home", detail)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}
