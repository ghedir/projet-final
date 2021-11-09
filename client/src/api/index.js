import axios from "axios";
const url = "";
export const fetchPosts = () => axios.get(`${url}/posts`);
export const fetchCats = () => axios.get(`${url}/categories`);
