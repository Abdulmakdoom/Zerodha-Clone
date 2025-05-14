import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setMessage("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("https://zerodha-clone-oqrc.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // credentials: "include", // Important for sending cookies!
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken)
        setMessage(`Welcome back, ${data.loggedInUser.username || data.loggedInUser.email}!`);
        window.location.href = `https://zerodha-clone-brown.vercel.app/${data.loggedInUser.username}?token=${data.accessToken}`;

        
        // optionally redirect to dashboard
      } else {
        setMessage("Invalid credentials or user does not exist.");
      }
    } catch (error) {
      setMessage("Server error.");
      console.error(error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="text-center mb-4">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "120px" }}
          />
          <h5 className="mt-3">Login to your account</h5>
        </div>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don't have an account? <a href="/signup">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  );
}
