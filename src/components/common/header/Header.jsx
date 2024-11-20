import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOut,
  faTimes,
  faBars,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import RegisterForm from "../auth/RegisterForm";
import LoginForm from "../auth/LoginForm"; // Import LoginForm
import EditProfileForm from "../profile/EditProfileForm";

const Header = () => {
  const navigate = useNavigate();
  const [navList, setNavList] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); // Thêm state cho form login
  const [showDropdown, setShowDropdown] = useState(false); // State để hiển thị dropdown menu

  const email = localStorage.getItem("email");
  const avatar = localStorage.getItem("avatar");
  const username = localStorage.getItem("userName");

  const handleRegisterClick = () => setShowRegisterForm(true);
  const handleCloseRegisterForm = () => setShowRegisterForm(false);
  const [showProfileForm, setShowProfileForm] = useState(false);

  const handleLoginClick = () => setShowLoginForm(true); // Hiển thị form login
  const handleCloseLoginForm = () => setShowLoginForm(false); // Ẩn form login

  const toggleDropdown = () => setShowDropdown(!showDropdown); // Toggle dropdown visibility
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("avatar");
    setShowDropdown(false); // Ẩn dropdown
    alert("You have logged out!");
  };

  const handleEditProfile = () => {
    setShowProfileForm(true); // Hiển thị form chỉnh sửa khi chọn "Edit Profile"
  };

  const handleCreateEstate = () => {
    navigate("/create-estate"); // Điều hướng đến trang Create Estate
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            {email ? (
              // Nếu người dùng đã đăng nhập, hiển thị avatar và dropdown
              <div className="user-profile" onClick={toggleDropdown}>
                <img
                  src={avatar ?? "./images/avatar.png"}
                  alt="User Avatar"
                  className="avatar"
                />
                <span className="hello-username">
                  Hello, {username ? username : email}
                </span>
                {showDropdown && (
                  <div className="dropdown-menu">
                    <ul>
                      <li onClick={handleEditProfile}>Edit Profile</li>
                      <li onClick={handleCreateEstate}>Create Estate</li>
                      <li onClick={handleLogout}>Logout</li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              // Nếu người dùng chưa đăng nhập, hiển thị nút đăng nhập và đăng ký
              <>
                <button className="btn1" onClick={handleLoginClick}>
                  <FontAwesomeIcon icon={faSignOut} /> Sign In
                </button>
                <button
                  className="btn1"
                  id="btn_regist"
                  onClick={handleRegisterClick}
                >
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </button>
              </>
            )}
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
      </header>

      {showRegisterForm && <RegisterForm onClose={handleCloseRegisterForm} />}
      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
      {showProfileForm && (
        <EditProfileForm onClose={() => setShowProfileForm(false)} />
      )}
    </>
  );
};

export default Header;
