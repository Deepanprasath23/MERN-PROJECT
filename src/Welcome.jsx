import React from "react";
import "./styles.css";

function Welcome() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="welcome-wrapper">
      <div className="welcome-message">
        Welcome, {user?.username || "User"}!
        <br />
        <span style={{ fontSize: 16, color: "#666" }}>
          Email: {user?.email} <br />
          Phone: {user?.phone}
        </span>
      </div>
    </div>
  );
}

export default Welcome;