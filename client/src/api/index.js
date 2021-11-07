import axios from "axios";

export const fetchPosts = () => axios.get("/posts");
export const fetchCats = () => axios.get("/categories");
