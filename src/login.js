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
    <div style={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      background: "linear-gradient(90deg, #0f0f0f,rgb(1, 20, 39))", 
      fontFamily: "Arial, sans-serif", 
      textAlign: "center"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.08)", 
        padding: "35px", 
        borderRadius: "15px", 
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", 
        backdropFilter: "blur(10px)", 
        border: "1px solid rgba(255, 255, 255, 0.1)", 
        width: "320px"
      }}>
        <h1 style={{ fontSize: "34px", marginBottom: "10px", color: "#ffffff", fontWeight: "bold" }}>Welcome</h1>
        <p style={{ fontSize: "15px", color: "#aaa", marginBottom: "20px" }}>Sign in to access the system</p>
        
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            style={{ 
              padding: "12px", 
              marginBottom: "12px", 
              width: "90%", 
              fontSize: "15px", 
              borderRadius: "6px", 
              border: "none", 
              textAlign: "center",
              outline: "none",
              backgroundColor: "rgba(255, 255, 255, 0.1)", 
              color: "#ffffff",
              transition: "0.3s",
            }}
            onFocus={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
            onBlur={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
          />
          <br />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              padding: "12px", 
              marginBottom: "18px", 
              width: "90%", 
              fontSize: "15px", 
              borderRadius: "6px", 
              border: "none", 
              textAlign: "center",
              outline: "none",
              backgroundColor: "rgba(255, 255, 255, 0.1)", 
              color: "#ffffff",
              transition: "0.3s",
            }}
            onFocus={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
            onBlur={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
          />
          <br />
          <button type="submit" 
            style={{ 
              padding: "12px 20px", 
              background: "linear-gradient(135deg, #00bfff, #008cff)", 
              border: "none", 
              color: "white", 
              fontSize: "16px",
              borderRadius: "6px", 
              cursor: "pointer",
              width: "100%",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => e.target.style.background = "#008cff"}
            onMouseOut={(e) => e.target.style.background = "linear-gradient(135deg, #00bfff, #008cff)"}
          >
            Login
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
