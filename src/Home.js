import React from "react";

const Home = () => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #050505, #001a33)", 
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    color: "#ffffff",
    padding: "40px 10%",
    overflow: "hidden"
  }}>
    {/* Hero Section */}
    <div style={{
      maxWidth: "900px",
      background: "rgba(255, 255, 255, 0.1)", 
      padding: "50px", 
      borderRadius: "20px", 
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)", 
      backdropFilter: "blur(10px)", 
      border: "1px solid rgba(255, 255, 255, 0.2)"
    }}>
      <h1 style={{
        fontSize: "42px", 
        fontWeight: "700", 
        background: "linear-gradient(to right, #00bfff, #0088cc)", 
        WebkitBackgroundClip: "text",
        color: "transparent",
        marginBottom: "15px"
      }}>
        Fetal Monitoring System
      </h1>
      
      <p style={{ fontSize: "20px", color: "#ddd", lineHeight: "1.7" }}>
        Empowering safer pregnancies through real-time fetal movement tracking. 
        Designed to help mothers and doctors detect potential distress early — ensuring timely care and better outcomes.
      </p>
      
      {/* Key Benefits */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "30px"
      }}>
        <div style={{
          padding: "20px", 
          borderRadius: "10px", 
          background: "rgba(255, 255, 255, 0.1)", 
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)"
        }}>
          <h3 style={{ fontSize: "18px", color: "#00bfff" }}>📊 Live Monitoring</h3>
          <p style={{ fontSize: "15px", color: "#bbb" }}>Real-time fetal movement analysis with instant feedback.</p>
        </div>
        <div style={{
          padding: "20px", 
          borderRadius: "10px", 
          background: "rgba(255, 255, 255, 0.1)", 
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)"
        }}>
          <h3 style={{ fontSize: "18px", color: "#00bfff" }}>📡 Remote Access</h3>
          <p style={{ fontSize: "15px", color: "#bbb" }}>Mothers & doctors can monitor data from anywhere.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ marginTop: "30px" }}>
        <a href="/dashboard" style={{
          display: "inline-block",
          padding: "14px 30px",
          fontSize: "18px",
          color: "#ffffff",
          background: "linear-gradient(90deg, #00bfff, #0066ff)",
          borderRadius: "10px",
          textDecoration: "none",
          boxShadow: "0px 4px 10px rgba(0, 191, 255, 0.5)",
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => e.target.style.opacity = "0.8"}
        onMouseOut={(e) => e.target.style.opacity = "1"}>
          Access Dashboard →
        </a>
      </div>
    </div>
  </div>
);

export default Home;
