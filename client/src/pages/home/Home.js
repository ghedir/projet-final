import React, { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import "./home.css";

import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import getPosts from "../../redux/actions/posts";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(getPosts());
    setLoading(true);
  }, [dispatch, search]);
  return (
    <>
      <Header />
      {loading ? (
        <div className="home">
          {Array.isArray(posts) && posts.length > 0 ? (
            <Posts posts={posts} />
          ) : null}
          <SideBar />
        </div>
      ) : null}
    </>
  );
}
