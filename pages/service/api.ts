import axios from "axios";

export const getShoes = () => {
  return axios.get("http://localhost:5000/shoe/all");
};

export const getOneShoe = (id: string) => {
  return axios.get(`http://localhost:5000/shoe/${id}`);
};
