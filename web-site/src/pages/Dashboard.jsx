import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Dashboard = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/manage-cars">Manage Cars</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <h1>Admin Dashboard</h1>
          <div className="profile">
            <span>Admin</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard">
          <div className="card">Total Cars: 50</div>
          <div className="card">Total Orders: 120</div>
          <div className="card">Total Users: 300</div>
          <div className="card">Revenue: $50,000</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
