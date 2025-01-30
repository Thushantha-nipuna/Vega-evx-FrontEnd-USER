import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Models from "./pages/Models";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CarForm from "./pages/CarForm";
import UpdateCarForm from "./pages/UpdateCarForm";
import DeleteCarForm from "./pages/DeleteCarForm";
import Dashboard from "./pages/Dashboard";
import AdminOrders from "./pages/AdminOrders";

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  // Define paths where the navbar should NOT appear (admin pages)
  const isAdminPage = ["/CarForm", "/UpdateCarForm", "/DeleteCarForm", "/Dashboard", "/AdminOrders"].includes(location.pathname);

  return (
    <>
      {!isAdminPage && <Header />} {/* Hide header for admin pages */}
      <main style={{ padding: "0px" }}>
        <Routes>
          {/* User Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/Models" element={<Models />} />         
          <Route path="/contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          {/* Admin Pages */}
          <Route path="/CarForm" element={<CarForm />} />
          <Route path="/UpdateCarForm" element={<UpdateCarForm />} />
          <Route path="/DeleteCarForm" element={<DeleteCarForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AdminOrders" element={<AdminOrders />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
