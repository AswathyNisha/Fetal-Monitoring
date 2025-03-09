import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      localStorage.setItem("isAuthenticated", "true"); // Store login state
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", color: "#ffffff", backgroundColor: "#121212", minHeight: "100vh", textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />
        <br />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#00bfff", border: "none", color: "white", fontSize: "16px" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
