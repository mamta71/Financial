// routes.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import UserPage from './pages/User/UserPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} /> {/* Render DashboardPage for the root path */}
        <Route path="/user" element={<UserPage/>} /> {/* Render DashboardPage for the root path */}
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
