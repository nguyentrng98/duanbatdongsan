import React, { useState } from "react";
import bcrypt from "bcryptjs";
import "./loginForm.css";

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email không được để trống.");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Email không hợp lệ.");
      return;
    } else {
      setEmailError("");
    }

    try {
        // Fetch danh sách người dùng từ server
        const response = await fetch("http://localhost:5000/users");
        const users = await response.json();
    
        // Tìm ngời dùng theo email
        const user = users.find((u) => u.email === email);
    
        if (user) {
          // So sánh mật khẩu đã nhập với mật khẩu mã hóa
          const isPasswordValid = await bcrypt.compare(password, user.password); // password: người dùng nhập, user.password: đã mã hóa
    
          if (isPasswordValid) {    
            // Lưu username vào localStorage
            localStorage.setItem("email", user.email);
            localStorage.setItem("id", user.id);
            if (user.avatar != null) { // Kiểm tra null hoặc undefined
              localStorage.setItem("avatar", user.avatar);
            }

            if (user.userName) {
                localStorage.setItem("userName", user.userName);
            }
            onClose(); // Đóng form đăng nhập
          } else {
            setError("Invalid email or password!");
          }
        } else {
          setError("Invalid email or password!");
        }
      } catch (err) {
        console.error("Error during login:", err);
        setError("Unable to connect to the server!");
      }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="btn-close" onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             {emailError && <span style={{ color: "red" }}>{emailError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
