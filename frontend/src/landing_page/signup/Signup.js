import React, { useState } from "react";

export default function ZerodhaStyleSignup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch("https://zerodha-clone-oqrc.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.status === 201) {
        const data = await response.json();
        setMessage(`Welcome, ${data.username}!`);
      } else {
        const err = await response.json();
        setMessage(err.message || "Registration failed.");
      }
    } catch (error) {
      setMessage("Server error.");
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
          <h5 className="mt-3">Sign up to continue</h5>
        </div>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

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
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Already have an account? <a href="/login">Log in</a>
          </small>
        </div>
      </div>
    </div>
  );
}
