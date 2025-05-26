import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (
      user &&
      user.email === form.email &&
      user.password === form.password
    ) {
      navigate("/welcome");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p
          style={{
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Don't have an account?{" "}
          <span
            style={{
              color: "#007bff",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;