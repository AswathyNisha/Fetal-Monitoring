import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import WebSocketComponent from "./WebSocketComponent";
import Home from "./Home";
import Login from "./login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure login page appears first
    const storedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuth === "true");
    setLoading(false);
  }, []);

  if (loading) return <div style={{ color: "white", textAlign: "center", paddingTop: "50px" }}>Loading...</div>;

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      ) : (
        <>
          {/* Navigation bar appears only after login */}
          <nav style={{ backgroundColor: "#1a1a1a", padding: "10px", display: "flex", justifyContent: "space-around" }}>
            <a href="/home" style={{ color: "#00bfff", textDecoration: "none", fontSize: "18px" }}>Home</a>
            <a href="/dashboard" style={{ color: "#00bfff", textDecoration: "none", fontSize: "18px" }}>Dashboard</a>
            <button onClick={() => { localStorage.removeItem("isAuthenticated"); setIsAuthenticated(false); }} 
              style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
              Logout
            </button>
          </nav>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<WebSocketComponent />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
