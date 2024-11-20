import React, { useState } from "react";
import bcrypt from "bcryptjs";
import "./registerForm.css";

const RegisterForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

    // Kiểm tra password và confirmPassword
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Mã hóa mật khẩu
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Tạo đối tượng user
    const user = { email, password: hashedPassword };

    try {
      // Gửi yêu cầu POST tới JSON Server
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Registration successful!");
        onClose(); // Đóng form
      } else {
        setError("Failed to register. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Error connecting to the server.");
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="btn-close" onClick={onClose}>
          &times;
        </button>
        <h2>Register Account</h2>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
