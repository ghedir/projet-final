import "./profile.css";
import SideBar from "../../components/sidebar/Sidebar";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Profile() {
  const { user } = useContext(Context);
  const PF = "/images/";

  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileUpdateTitle">
            Your Personnel Information
          </span>
          <button className="profileSubmit" type="submit">
            <a
              href="/settings"
              style={{ textDecoration: "none", color: "white" }}
            >
              Update
            </a>
          </button>
        </div>
        <form className="profileForm">
          <label>Profile Picture</label>
          <div className="profilePP">
            <img src={PF + user.profilePic} alt="" />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} disabled />
          <label>Email</label>
          <input type="email" placeholder={user.email} disabled />
          <label>Password</label>
          <input type="" placeholder="******" disabled />

        </form>
      </div>
      <SideBar />
    </div>
  );
}
