import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import bcrypt from "bcryptjs"; // Để mã hóa mật khẩu
import "./profileForm.css"; // Giả sử bạn có file CSS cho form

const EditProfileForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    const storedUserName = localStorage.getItem("userName");
    const usernameToSet = storedUserName ? storedUserName : "";
    setUsername(usernameToSet);

    const avatarStored = localStorage.getItem("avatar");
    const avatarToSet = avatarStored ? avatarStored : "";
    setAvatar(avatarToSet);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  if (password !== confirmPassword) {
    setError("Password and confirm password do not match");
    return;
  }

  let updatedUser = {
    id: localStorage.getItem("id"),
    username,
    email,
    avatar
  };

  if (password && confirmPassword) {
    updatedUser.password = bcrypt.hashSync(password, 10);
  }

  const userId = localStorage.getItem("id");
  localStorage.setItem("userName", username);
  localStorage.setItem("avatar", avatar);

  if (!userId) {
    setError("User ID not found.");
    return;
  }
  
    try {
        await fetch(`http://localhost:5000/users/${userId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          });
    
      alert("Edit profile succesfully!")
      navigate("/");
      onClose();
    } catch (error) {
      setError("Failed to update profile");
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="btn-close" onClick={onClose}>
          &times;
        </button>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar:</label>
            <input
              type="text"
              id="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
