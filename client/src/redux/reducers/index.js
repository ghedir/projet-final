import { combineReducers } from "redux";
import posts from "./posts";
import cats from "./category"

const appReducers = combineReducers({ posts, cats});
export default appReducers;
