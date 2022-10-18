import React from "react";
import "./navbar.css";
import logo from "../../pict_logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../../store/store";

function Navbar() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const sendLogoutReq = async () => {
    const res = await axios.post("/api/students/logout", null, {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res;
    }
    return new Error("Unable TO Logout. Please try again");
  };
  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout())).then(()=>window.location.replace("/login"));
  };

  return (
    <div className="navbar">
      <div className="logoside">
        <a href="/dashboard">
          <div className="navlogo">
            <img src={logo} alt="" />
          </div>
          <div className="navname">
            <p>Digital Academic Passport</p>
          </div>
        </a>
      </div>
      <div className="navlinks">
        {/* <a href="/dashboard">Home</a> */}
        {/* <a href="/dashboard">Home</a> */}
        {!isLoggedIn && (
        <p onClick={handleLogout}>Logout</p>

        )}
      </div>
    </div>
  )
};

export default Navbar;
