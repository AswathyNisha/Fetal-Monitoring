import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  TimeScale
} from "chart.js";
import "chartjs-adapter-date-fns"; // Import time adapter

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

const WebSocketComponent = () => {
  const [impulse, setImpulse] = useState(null);
  const [status, setStatus] = useState("Connecting...");
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://192.168.94.192:81"); // Change to your ESP32 IP

    socket.onopen = () => setStatus("🟢 Connected");
    socket.onclose = () => setStatus("🔴 Disconnected");
    socket.onerror = () => setStatus("⚠️ Error: Unable to connect");

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setImpulse(data.impulse);
        setDataPoints((prev) => [...prev.slice(-99), { x: Date.now(), y: data.impulse }]); // Store 100 points
      } catch (error) {
        console.error("Invalid WebSocket Data:", event.data);
      }
    };

    return () => socket.close();
  }, []);

  const chartData = {
    datasets: [
      {
        label: "Impulse Over Time",
        data: dataPoints,
        borderColor: "#00AEEF", // Cool blue
        backgroundColor: "rgba(0, 174, 239, 0.2)", // Soft blue fill
        fill: true,
        tension: 0.3, // Smooth curve
        pointRadius: 2, // Small dots
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow full control over size
    scales: {
      x: { 
        type: "time", 
        time: { unit: "second" }
      },
      y: { beginAtZero: false },
    },
    plugins: {
      legend: {
        labels: {
          color: "#A9CCE3", // Light blue text
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Fetal Monitoring Dashboard</h1>
      <h3 style={styles.status}>Status: <span>{status}</span></h3>
      <h2 style={styles.impulse}>Real-Time Impulse: <span>{impulse !== null ? impulse.toFixed(2) : "Waiting..."}</span></h2>
      
      <div style={styles.chartContainer}>
        <div style={styles.chartWrapper}>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#121826", // Dark blue-gray background
    color: "white",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  header: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#00AEEF", // Blue accent
  },
  status: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  impulse: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#A9CCE3", // Light blue
  },
  chartContainer: {
    backgroundColor: "#1B2A41", // Slightly lighter dark background
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 174, 239, 0.2)",
    width: "90%", // Larger width
    margin: "0 auto",
  },
  chartWrapper: {
    width: "100%", 
    height: "500px", // Increased height for the chart itself
  },
};

export default WebSocketComponent;
