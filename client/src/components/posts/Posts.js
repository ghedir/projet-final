import React from "react";
// import {useSelector} from 'react-redux';
import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) {
  
  // const posts = useSelector((state)=> state.posts)
  
 
  return (
    <div className="posts">
      {Array.isArray(posts) && posts.length > 0 ? posts.map((p, id) => (
         <Post key={id} post={p}  />
      )) : null}
      
    </div>
  );
}
