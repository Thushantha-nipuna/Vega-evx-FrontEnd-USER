import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css"; // Import CSS for styling

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from backend API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-panel">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/update-car">Manage Cars</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Orders List</h1>
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Car Model</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>NIC Number</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.address}</td>
                  <td>{order.car_model}</td>
                  <td>{order.customer_name}</td>
                  <td>{order.email}</td>
                  <td>{order.mobile_number}</td>
                  <td>{order.nic_number}</td>
                  <td>{new Date(order.order_date).toLocaleString()}</td>
                  <td className={order.order_status === "Pending" ? "pending" : "completed"}>
                    {order.order_status}
                  </td>
                  <td>${order.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
