import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
// import { useDispatch, useSelector } from "react-redux";
// import getCats from "../../redux/actions/category";
import {useLocation} from 'react-router-dom';
export default function SideBar() {
  const [cats, setCats] = useState([]);
const { search } = useLocation();
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories" + search);
      setCats(res.data);
    };
    getCats();
  }, [search]);


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <p className="about-me">it's my personal Blog</p>
        <img
          src="https://images.pexels.com/photos/3283121/pexels-photo-3283121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"
          alt=""
        />
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        
          <ul className="sidebarList">
            {cats.map((cat) => (
                  <Link to={`/?cat=${cat.name}`} className="link" key={cat}>
                    <li className="sidebarListItem">{cat.name}</li>
                  </Link>
                ))}
          </ul>
  </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
