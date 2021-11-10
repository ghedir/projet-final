import React, { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import "./home.css";

import { useLocation } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import getPosts from "../../redux/actions/posts";
import axios from "axios";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
     
        <div className="home">
          
            <Posts posts={posts} />
        
          <SideBar />
        </div>
     
    </>
  );
}
