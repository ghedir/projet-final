import axios from "axios";
url=''
export const fetchPosts = () => axios.get(`${url}/posts`);
export const fetchCats = () => axios.get(`${url}/categories`);
